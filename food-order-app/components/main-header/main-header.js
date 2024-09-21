import React from "react";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header draggable={false} className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImage} alt="A plate with food" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
