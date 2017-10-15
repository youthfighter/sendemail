/**
 * Created by Administrator on 2017/10/15 0015.
 */
var request = require("request");
var cheerio = require('cheerio');
module.exports = function(cb){
    request("http://www.biquku.co/126028/",function(err,res){
        var data = {}
        if (!err && (res.statusCode == 200 || res.statusCode===304)) {
            var $ = cheerio.load(res.body,{decodeEntities: false});
            data.updateTime=$("#info p").eq(2).text().substr(5),
            data.updateContent=$("#info p").eq(2).text().substr(5)
        }
        cb(err,data);

    });
};
