import * as React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

type MenuItemProps = {
  title: string;
  i: number;
  onClick?: () => void;
};

export const MenuItem = ({ i, title, onClick }: MenuItemProps) => {
  const style = { border: `1.25px solid #41ffff` };
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="li-child"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div className="icon-placeholder" style={style} /> */}
      <div className="text-placeholder" style={style}>
        <Text
          color="#fff"
          fontSize="1.6rem"
          fontWeight="400"
          textTransform="uppercase"
          onClick={onClick}
        >
          {title}
        </Text>
      </div>
    </motion.li>
  );
};
