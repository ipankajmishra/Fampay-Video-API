# Youtube Video API with frontend


To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.


- Backend  - Node js - https://dashboard.heroku.com/apps/fampay-video-api-pankaj
- Front end - React js - https://fpay-video.netlify.app

## Git repositories 

Backend - https://github.com/ipankajmishra/Fampay-Video-API.git
Frontend - https://github.com/ipankajmishra/youtube-video-frontend.git

## Features

- In search bar you can search for any keyword like cricket, football etc.
- List of videos will come along with their title, description and thumbnail.
- There is a provision to go next and previosus page.
- For next and previous page youtube API is not getting called. The result will come from the data that is stored by the background sync.
- Definition of background sync is Once the search query is initiated the first set of results will be returne and background sync will start. It will update the result after every 60 seconds and store the data.
- Next time when the request will come for next and previous page, it will redirected to the data which is stored with us. Its basically beahving like a caching mechanism.
- Multiple Youtube API keys are added. If one get exhausted it will automatically take the next available API key and push the exhaused api key for cooling. It is like poping from the available key's stack and push to the cooling keys Queue.


## Installation

Fampay-Video-API requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd Fampay-Video-API
npm i
npm start or node src/index.js
```


## Docker
Docker file is written named Dockerfile.
We can build and run the container straightaway.

```sh
docker build -t youtube-api-backend .
docker run -d -p 8080:8080 --restart=always --name=youtueb-api-backend-container youtube-api-backend