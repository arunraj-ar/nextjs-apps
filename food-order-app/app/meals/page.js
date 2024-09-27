import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recepie and cook it yourself.</p>
        <p className={classes.cta}>
          {" "}
          <Link href="/meals/share">Share your favourite recepie.</Link>
        </p>
      </header>

      <main>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
