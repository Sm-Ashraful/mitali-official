import React from "react";
import HeroCareer from "./partials/HeroCareer";
import Jobs from "./partials/Jobs";

import { useData } from "../../utils/fetchData";

const Career = () => {
  const { data, loading, error } = useData("/get-active-job");
  if (loading) {
    return <h5>Loading ....</h5>;
  }
  if (error) {
    return;
  }
  return (
    <>
      <HeroCareer />
      <Jobs data={data} />
    </>
  );
};

export default Career;
