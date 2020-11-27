# PoE Armoury

A character database for the video game Path of Exile. Users can search characters, browse their inventory/skills, and save to favourites!

## Getting Started
- `npm install` to grab all of the dependencies
- in the root folder, create a psql database. Seed it with the `/db/schema.sql`
- in the root folder, open a terminal and type `npm start` to start development server
- in the api folder, open a terminal and type `npx nodemon` and the name of the db to start express server
- to generate the list of ladder players

## Dependencies
- React
- Express
- React Sass
- React Bootstrap

## Functionality

- Users can view the Standard and Hardcore later of the Heist season in Path of Exile
- Users can view characters, their skills and their equiped items
- Users can register and log in, when they do they are able to favourite characters
- Users can remove characters from favourites 
- Users can search accounts or character names in the search field
- Users can view twitch accounts of players who have them
