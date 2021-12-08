import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useQuery} from "react-query";
import {getTvShows} from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateTvListPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
});

const TvListPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('discover2', getTvShows)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const tv = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favorites = tv.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    const addToFavorites = (movieId) => true

    return (
        <PageTemplate
            title="Discover Tv Shows"
            tvs={tv}
            action={(tv) => {
                return <AddToFavoritesIcon tv={tv} />
            }}
        />
    );
};
export default TvListPage;