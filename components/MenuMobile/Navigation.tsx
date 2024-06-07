import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

type NavigationProps = {
  handleScrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutUsSectionRef: React.RefObject<HTMLDivElement>;
  portfolioSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
  teamSectionRef: React.RefObject<HTMLDivElement>;
};

export const Navigation = ({
  handleScrollToSection,
  aboutUsSectionRef,
  portfolioSectionRef,
  contactSectionRef,
  teamSectionRef,
}: NavigationProps) => (
  <motion.ul className="ul-parent" variants={variants}>
    <MenuItem
      i={0}
      title="About Us"
      onClick={() => handleScrollToSection(aboutUsSectionRef)}
    />{" "}
    <MenuItem
      i={2}
      title="Contact"
      onClick={() => handleScrollToSection(contactSectionRef)}
    />
    <MenuItem
      i={1}
      title="Portfolio"
      onClick={() => handleScrollToSection(portfolioSectionRef)}
    />
    <MenuItem
      i={3}
      title="Team"
      onClick={() => handleScrollToSection(teamSectionRef)}
    />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
