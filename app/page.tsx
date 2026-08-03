import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Programs from "@/components/site/Programs";
import Coaches from "@/components/site/Coaches";
import Fighters from "@/components/site/Fighters";
import Team from "@/components/site/Team";
import Stories from "@/components/site/Stories";
import Schedule from "@/components/site/Schedule";
import Membership from "@/components/site/Membership";
import EventDonate from "@/components/site/EventDonate";
import Gallery from "@/components/Gallery";
import Comments from "@/components/site/Comments";
import Testimonials from "@/components/site/Testimonials";
import CoachContactCard from "@/components/CoachContactCard";
import ApplyWhatsApp from "@/components/ApplyWhatsApp";
import BookContact from "@/components/site/BookContact";
import Footer from "@/components/site/Footer";
import BackToTop from "@/components/site/BackToTop";
import RevealObserver from "@/components/RevealObserver";
import PwaRegister from "@/components/PwaRegister";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Coaches />
        <Fighters />
        <Team />
        <Stories />
        <Schedule />
        <Membership />
        <EventDonate />
        <Gallery />
        <Comments />
        <Testimonials />
        <CoachContactCard />
        <ApplyWhatsApp />
        <BookContact />
      </main>
      <Footer />
      <BackToTop />
      <RevealObserver />
      <PwaRegister />
    </div>
  );
}
