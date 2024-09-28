import PageLoader from "@/components/loader/page-loader";
import React from "react";

//this is a default loader that will take whole page, partial component loader is implemented in page.js using suspense
const MealsLoadingPage = () => {
  return <PageLoader loadingText="Fetching meals..." />;
};

export default MealsLoadingPage;
