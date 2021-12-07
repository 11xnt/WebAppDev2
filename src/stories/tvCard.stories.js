import React from "react";
import TvCard from "../components/tvCard";
import SampleMovie from "./sampleData";

export default {
    title: "TV/TvCard",
    component: TvCard,
};

export const Basic = () => {
    return (
        <TvCard
            movie={SampleMovie}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
    return (
        <TvCard
            movie={sampleNoPoster}
        />
    );
};
Exceptional.storyName = "exception";