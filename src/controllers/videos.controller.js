const data = require('../data');
const videosService = require('../services/videos.service');

const get = async function(req, res){
    let searchQuery = req.params.searchQuery;
    let pageNumber = req.params.pageNumber;
    if(pageNumber>1){
        res.send(videosService.paginate(data.Videos,20,pageNumber));
    }
    let videoList = await videosService.get(searchQuery);
    res.send(videoList);
}

module.exports = {
    get
};