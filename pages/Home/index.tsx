"use client";
import AboutUsSection from "@/components/About";
import ApplySection from "@/components/Apply";
import Banner from "@/components/Banner";
import PortfolioUsSection from "@/components/Portfolio";
import StatisticsSection from "@/components/StatisticsSection";
import Header from "@/components/common/Header";
import MainLayout from "@/components/layout/main";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

function HomePage() {
  const applySectionRef = useRef<HTMLDivElement>(null);
  const aboutUsSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const scrollToApply = () => {
    if (applySectionRef.current) {
      applySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        aboutUsSectionRef={aboutUsSectionRef}
        portfolioSectionRef={portfolioSectionRef}
        contactSectionRef={contactSectionRef}
        teamSectionRef={teamSectionRef}
      />
      <Banner scrollToApply={scrollToApply} />

      <Box ref={aboutUsSectionRef}>
        <StatisticsSection />
      </Box>
      <Box ref={contactSectionRef}>
        <AboutUsSection />
      </Box>
      <Box ref={portfolioSectionRef}>
        <PortfolioUsSection ref={teamSectionRef} />
      </Box>
      <Box ref={applySectionRef}>
        <ApplySection />
      </Box>
    </>
  );
}

HomePage.Layout = MainLayout;
export default HomePage;
