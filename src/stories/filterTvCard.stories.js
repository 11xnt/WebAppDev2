import React from "react";
import FilterTvCard from "../components/filterTvCard";

export default {
    title: "TV/FilterTVCard",
    component: FilterTvCard,
};

export const Basic = () => {
    return <FilterTvCard />;
};
Basic.storyName = "Default";