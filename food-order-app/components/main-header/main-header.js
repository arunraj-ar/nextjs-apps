import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
    <header draggable={false} className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImage} alt="A plate with food" priority />
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default MainHeader;
