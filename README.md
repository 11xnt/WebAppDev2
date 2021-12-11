# Assignment 1 - ReactJS app.

Name: Allen Terescenco


## Overview.

This repo consists of a web application built on ReactJS. It features a movie website application, based on the Movie Database API where you can browse, filter, and add to favourites of your favourite movies and TV shows. You can also register and login to view your favourites.


### Features.
 
+ Top Rated Movie Page.
+ Discover TV Shows.
+ Favourite TV Shows.
+ Sorting. (Not working)
+ Authentication.
+ Storybook support for newer


## Setup requirements.

npm install  
npm start  
npm run storybook  


## API endpoints.

+ Top rated Movies = movies/top_rated
+ Discover list of TV shows - discover/tv
+ TV show details - tv/:id
+ TV show genres - genre/tv/list
+ TV show images - tv/:id/images


## App Design.

### Component catalogue.

![](./images/storybook.png)


### UI Design.

#### Filter TV Card
![ ](./images/tvfiltercard.png)
>Refactored to the original movie filter card to suit the genres and namings.

#### TV Card
![ ](./images/tvcard.png)
>Shows preview details of information on a tv show. Clicking the 'More info' button will display more information about the TV show. Refactored the calander to release the first episode air date.

#### TV Header
![ ](./images/tvheader.png)
>Refactored the original movie header as to decouple the two to have future use without interfering with the movie header collection.

#### TV Details
![ ](./images/tvDetails.png)
>Refactored original details component to change swap out a few variables, such as replacing runtime to number of episodes and generated revenue to see if the tv show is still in production.

#### TV Details Header
![ ](./images/tvDetailsHeader.png)
>Refactored the movie details header to again split the responsibility of the one header to for future-proofing it.


### Routing.

+ /movies/toprated - displays all top rated movies. (Public Route)
+ /tvshows - displays a list of tv shows. (Public Route)
+ /tvshows/:id - displays the details of a particular tv show.
+ /movies/favorites - displays the favorite movies added by a user. (Private Route)
+ /tvshows/favorites - displays the favorite tv shows added by a user. (Private Route)
+ /login - displays a page to allow the user to login, after login it will redirect to initial requested private page. (Public Route)
+ /signup - displays a page to allow the user to register which will redirect to the login page. (Public Route)

The routes that contain '(Private Route)' will redirect the guest user to the login page and from there the guest can login (if they have an account), if they do not have an account they can direct themselves to the signup page which will then allow them to login.
If the user has already been authenticated, the user can visit these pages normally.


## Independent learning (If relevant).

+ Future labs to add authentication.
+ TMDB API Documentation.
