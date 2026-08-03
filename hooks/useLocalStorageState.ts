"use client";

import { useSyncExternalStore } from "react";

const caches = new Map<string, unknown>();
const loadedKeys = new Set<string>();
const listenerSets = new Map<string, Set<() => void>>();

function emit(key: string) {
  listenerSets.get(key)?.forEach((listener) => listener());
}

function readValue<T>(key: string, fallback: T): T {
  if (!loadedKeys.has(key)) {
    loadedKeys.add(key);
    try {
      caches.set(key, JSON.parse(localStorage.getItem(key) || "null"));
    } catch {
      caches.set(key, null);
    }
  }
  const value = caches.get(key);
  return value === null || value === undefined ? fallback : (value as T);
}

function writeValue<T>(key: string, value: T) {
  caches.set(key, value);
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
  emit(key);
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key) emit(e.key);
  });
}

export function useLocalStorageState<T>(key: string, fallback: T) {
  const value = useSyncExternalStore(
    (listener) => {
      if (!listenerSets.has(key)) listenerSets.set(key, new Set());
      listenerSets.get(key)!.add(listener);
      return () => {
        listenerSets.get(key)?.delete(listener);
      };
    },
    () => readValue<T>(key, fallback),
    () => fallback,
  );

  return [value, (next: T) => writeValue(key, next)] as const;
}
