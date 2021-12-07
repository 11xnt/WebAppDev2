import React from "react";
import TvDetails from "../components/movieDetails";
import SampleTv from "./sampleTV";

export default {
    title: "TV Details/TvDetails",
    component: TvDetails,
};

export const Basic = () => <TvDetails movie={SampleTv} />;
Basic.storyName = "Default";