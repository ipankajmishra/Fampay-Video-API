const data = require('../data');
const axios = require('axios');
const YOUTUBE_URL="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=keyword&type=video&key=";

async function backgroundVideosFetch(searchQuery){
    console.log("background")
    let apiKey = data.ACTIVE_API_KEY[0];
    let url = YOUTUBE_URL+apiKey;
    url = url.replace("keyword",searchQuery);
    try{
        var youtubeData = await axios.get(url);
    }
    catch (err) {
        if(err.toString().includes(403)){
            console.log("API limit exhausted");
            let exhaustedApiKey = data.ACTIVE_API_KEY.shift();
            let apiKey = data.ACTIVE_API_KEY[0];
            data.COOLING_API_KEY.push(exhaustedApiKey);
            let url = YOUTUBE_URL+apiKey;
            var youtubeData = await axios.get(url);
        }
        else{
            throw new Error(err);  
        }
      }
    
    let videosList = youtubeData.data.items;
    data.Videos = videosList;
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }



const get = async function(searchQuery){
    setInterval(()=>backgroundVideosFetch(searchQuery),60000);
    let apiKey = data.ACTIVE_API_KEY[0];
    let url = YOUTUBE_URL+apiKey;
    url = url.replace("keyword",searchQuery);
    try{
        var youtubeData = await axios.get(url);
    }
    catch (err) {
        if(err.toString().includes(403)){
            console.log("API limit exhausted");
            let exhaustedApiKey = data.ACTIVE_API_KEY.shift();
            let apiKey = data.ACTIVE_API_KEY[0];
            data.COOLING_API_KEY.push(exhaustedApiKey);
            let url = YOUTUBE_URL+apiKey;
            var youtubeData = await axios.get(url);
        }
        else{
            throw new Error(err);  
        }
      }
    let videosList = youtubeData.data.items;
    data.Videos = videosList;
    return paginate(videosList,12,1);
    
}

module.exports = {
    get,
    paginate
};