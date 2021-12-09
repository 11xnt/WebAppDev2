import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} )
    const [favorites, setFavorites] = useState( [] )
    const [watchLists, setWatchList] = useState( [] )

    const addToFavorites = (tv) => {
        setFavorites([...favorites,tv.id])
    };
    // We will use this function in a later section
    const removeFromFavorites = (tv) => {
        setFavorites( favorites.filter(
            (mId) => mId !== tv.id
        ) )
    };

    const addToWatchList = (tv) => {
        setWatchList([...watchLists,tv.id])
        console.log([...watchLists,tv.id]);
    };


    // We will use this function in a later section
    const removeFromWatchLists = (tv) => {
        setWatchList( watchLists.filter(
            (mId) => mId !== tv.id
        ) )
    };

    const addReview = (tv, review) => {
        setMyReviews( {...myReviews, [tv.id]: review } )
    };

    return (
        <TvContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                addToWatchList,
                removeFromWatchLists,
            }}
        >
            {props.children}
        </TvContext.Provider>
    );
};

export default TvContextProvider;