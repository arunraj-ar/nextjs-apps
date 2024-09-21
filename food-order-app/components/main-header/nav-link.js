"use client";
import React from "react";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = (props) => {
  const { href, children } = props;
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) && classes.active}>
      {children}
    </Link>
  );
};

export default NavLink;
