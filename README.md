# Smalls challenge

## Objective

Fullstack Asessment

The following coding challenge is an opportunity for you to show us your coding skills and for us to hopefully enjoy reading beautiful code.
We want to render reddit posts, mark our favourites and save them in a db table, be able to retrieve those we've faved

Using the reddit top posts api, we want you to render the following:

- Title
- Author
- Entry date, following a format "x hours ago"
- A thumbnail for those who have a picture
- Number of comments
- Unread status

Reddit top posts:
https://www.reddit.com/r/redditdev/top.json

- Each post should have a Fav button/icon.
- When the fav button/icon is clicked, you should hit your custom backend API route and save the post in a database table.
- When the show favs button is clicked, all fav posts should be retrieved and rendered

What Includes:

- Indicator of unread/read post (updated status, after post is selected)
- Fav post button (could be a nice star icon) (don't worry about saving the thumbnail in the table)
- Button to retrieve all favs
- Be able to refresh and retrieve favs
- Dismiss Post Button (remove the cell from list)
- Dismiss All Button (remove all posts.)
- Support split layout (left side: all posts / right side: detail post)

Extra nerd bonus points:

- Dockerize the backend api
- Be able to unfav a post
- Pagination of favs
- Responsive design
- Animation when a post is dismissed

Important:

- Explain your architectural coding decisions
- Explain your selection of tools: did you pick a backend framework? Why? What benefits does it give you? Did you pick a state management library? Why? Did you pick an ORM? We want to understand your pros/cons thinking
- In terms of scale: If this solution has to serve millions of users, what would you add? How would you handle scaling frontend / backend / database? Explain these scale decisions.

## Solution

The solution that i've created is a react-golang-mongodb application. I've been able to dockerize the solution, this implies the creation of a dockerFile inside each module, and a docker compose file for build and connect this modules.

In terms of decisions:

- React service
  I will list some libraries/helpers/APi's i've used: - Redux: in order to have a central storage management - Redux thunk: an extension of redux for handle asynx operations - Axios: Http client, for handle request/responses - Styled components: my favorite react library for create css in js - Flexbox: For layout design thinking in mobile first - Responsive design: this app has a mobile first approach. - React hooks - Context API - React memo, Lazy loading, Suspense

- GO service:

  - I've choosen mux as HTTP router for golang, it was easy to implement
  - I've chossen godotenv to do some operations taking values from .env file
  - I've choose a mongo driver lib which is one of the most used drivers for golang in order to connect a mongo db
  - And i've choosen a cors library as helper for cors configuration

- Scalability

  - In order keep an efficient database use by using a save/delete model. So if a user want to save favorites post, it will save and delete phisically from the database. Doing this psically achieve the minimum database usage instead of logical delete.

- UX

  - One of my main goals was to give the best UX i can, using a switch to see favs/detail gives to user the experience of the whole application without moving of the page. I also put effort in mobile experience by building a hiddeable navigation post list.

- Personal comments

This challenge was a very nice opportunity for learn new languajes and tools.

As the word says, it's challenge, i took this mission to learn Golang, this was my very first experience.
I found this very challenging, but i'm proud of what i was able to built on this first approach.
This was also my first time digging deeper with docker, and i'm also proud of what i got.

I'm very satisfied to have been able to finish the task. There is a room for improvements surelly but i hope i can cover most of the items.

Thanks!
