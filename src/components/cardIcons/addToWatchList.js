import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToFavorites = (e) => {
        e.preventDefault();
        context.addToFavorites(movie);
    };
    return (
        <IconButton aria-label="add to watchlist" onClick={handleAddToFavorites}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchListIcon;