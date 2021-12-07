import React from "react";
import TvHeader from "../components/headerTv";
import SampleTV from "./sampleTV";

export default {
    title: "TV Details/TvHeader",
    component: TvHeader,
};

export const Basic = () => <TvHeader movie={SampleTV} />;
Basic.storyName = "Default";