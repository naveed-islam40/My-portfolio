"use client";
import { useEffect } from "react";
import Cards from "./components/cards/page";
import CaseStudio from "./components/casestudio/page";
import ContactSection from "./components/contactSection/page";
import ITSection from "./components/itSection/page";
import Mission from "./components/mission/page";
// import Navbar from "./components/navbar/page";
import ItPartnerSection from "./components/partnerSection/page";
import Pricing from "./components/pricing/page";
import ServicesSection from "./components/servicesSection/page";
import TrustedBySection from "./components/trustedSection/page";
import Waleed from "./components/testimonials/page";
import Blog from "./components/blog/page";
// import Footer from "./components/footer/page";
// import PreLoader from "./components/preloader/page";

export default function Home() {
    // useEffect(() => {
    //   const saveScrollPosition = () => {
    //     localStorage.setItem("scrollPosition", window.scrollY);
    //   };

    //   const restoreScrollPosition = () => {
    //     const scrollPosition = localStorage.getItem("scrollPosition");
    //     if (scrollPosition) {
    //       window.scrollTo(0, parseInt(scrollPosition, 10));
    //     }
    //   };

    //   restoreScrollPosition();

    //   window.addEventListener("beforeunload", saveScrollPosition);

    //   return () => {
    //     window.removeEventListener("beforeunload", saveScrollPosition);
    //   };
    // }, []);
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <div>
            {/* <PreLoader /> */}
            {/* <Navbar /> */}
            <ITSection />
            <ItPartnerSection />
            <Cards />
            <TrustedBySection />
            <ServicesSection />
            <CaseStudio />
            <Mission />
            <ContactSection />
            <Pricing />
            <Waleed />
            <Blog />
            {/* <Footer /> */}
        </div>
    );
}
