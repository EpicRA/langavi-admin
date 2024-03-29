import Image from "next/image";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem";
import { SidebarTitle } from "./SidebarTitle";
import { Line } from "@/components";
import { Svg } from "../svg/Svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInChildren } from "@/utils/motion";
import { fadeInChild } from "../../utils/motion";

export const Sidebar = () => {
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);

  const toggleSidebarMobile = () => {
    setShowSidebarMobile(!showSidebarMobile);
  };

  const sidebarItems = [
    {
      iconName: "currency-dollar",
      label: "Ordenes",
      path: "/admin/orders",
    },
    {
      iconName: "tag",
      label: "Cupones",
      path: "/admin/discounts",
    },
    // {
    //   iconName: "users",

    //   label: "Clientes",
    //   path: "/clientes",
    // },
    // {
    //   iconName: "settings",
    //   label: "Configuración",
    //   path: "/admin/settings",
    // },
  ];

  return (
    <motion.div
      className={`${styles.container} ${
        showSidebarMobile ? styles.showSidebarMobile : styles.hideSidebarMobile
      }
        `}
      variants={fadeInChildren()}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.sidebarItems}>
        <SidebarTitle isOpen={showSidebarMobile} />
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            iconName={item.iconName}
            label={item.label}
            path={item.path}
          />
        ))}
      </div>

      <motion.div variants={fadeInChild()}>
        <Line />
      </motion.div>

      <motion.div
        variants={fadeInChild()}
        className={styles.rightArrow}
        onClick={toggleSidebarMobile}
      >
        <Svg iconName="chevron-right" />
      </motion.div>
    </motion.div>
  );
};
