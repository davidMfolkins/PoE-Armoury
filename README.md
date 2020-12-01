# PoE Armoury

A character database for the video game Path of Exile. Users can search characters, browse their inventory/skills, and save to favourites!

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/nav.gif?raw=true)

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/search.gif?raw=true)

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/filters_large.png?raw=true)

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/skills_large.png?raw=true)

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/ladder_small.png?raw=true)

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/register_small.png?raw=true)
## Functionality

- Users can view the Standard and Hardcore ladders of the Heist season in Path of Exile
- Users can view characters, their skills and their equiped items
- Filters to refine your search: by class, by favourites, or by twitch account
- Users can register a new account, log in, and save their favourite characters to their favourites page
- Users can remove characters from their favourites, or keep them for as long as they want
- Fully functional searchbar can look up character names and account names -- regardless of whether those names are in the ladder or not
- Searching for a PoE account will display all characters associated with said account
- Users can view Twitch accounts of players who have them

## Getting Started
- in the root folder, `npm install` to grab all of the dependencies
- in the api folder, `npm install` to grab all of the dependencies
- in the root folder, create a psql database. Seed it with the `/db/schema.sql`
- in the root folder, open a terminal and type `npm start` to start development server
- in api/app.js, configure the database credentials

![image](https://github.com/davidMfolkins/PoE-Armoury/blob/master/docs/sql_config.png?raw=true)

- in the api folder, open a terminal and type `npx nodemon <db_name>` where `db_name` is the name of your psql server
- to generate the list of ladder players uncomment line 13-17 in the Navigation.js file. A Seed button will appear in the Navbar. Click this to begin seeding the ladders.

## Dependencies
- React
- Express
- Node-Sass
- React Bootstrap
- React Router
- React Cookie
- Axios
- CORS
- Bcrypt
- Circular Structure Stringify
