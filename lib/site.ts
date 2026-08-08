export const WHATSAPP_NUMBER = "250788750321";
export const COACH_PHONE = "+250788750321";
export const COACH_TEL = "tel:+250788750321";
export const MTN_MOMO_CODE = "*182*8*1*250788750321#";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const siteContact = {
  address: "ALI Boxing Club — Kigali, Rwanda",
  phoneDisplay: COACH_PHONE,
  email: "",
  hours: "Mon–Sat · 6AM – 10PM",
};

export const navLinks: [string, string][] = [
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Coaches", "#coaches"],
  ["Fighters", "#fighters"],
  ["Videos", "#videos"],
  ["Team", "#team"],
  ["Stories", "#stories"],
  ["Gallery", "#gallery"],
  ["Schedule", "#schedule"],
  ["Membership", "#membership"],
  ["Apply", "#apply"],
  ["Contact", "#contact"],
];
