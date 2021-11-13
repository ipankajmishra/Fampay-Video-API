const data = require('../data');
const videosService = require('../services/videos.service');

const get = async function(req, res){
    let searchQuery = req.params.searchQuery;
    let pageNumber = req.params.pageNumber;
    let nextPage = parseInt(pageNumber)+1;
    if(parseInt(pageNumber)>1){
        let response = {
            data:videosService.paginate(data.Videos,12,pageNumber),
            next:nextPage,
            prev:parseInt(pageNumber)-1
        }
        res.send(response);
    }else{
        let response = {
            data: await videosService.get(searchQuery),
            next:nextPage,
            prev:undefined
        }
        res.send(response);
    }
    
}

module.exports = {
    get
};