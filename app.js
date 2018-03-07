var sendMail = require("./src/sendmail.js");
var spider = require("./src/spider.js");
var schedule = require("node-schedule");
var log = require("./src/log.js");

schedule.scheduleJob('/5 * * * * *', function(){
    log.info("app2")
});
var lastUpdateTime = "";
var count = 0;
log.info("开始运行程序");
schedule.scheduleJob('0 0/1 * * * *', function(){
    log.info("定时任务实行");
    if(count>0){
        log.info("执行任务数超限");
        return;
    }else{
        log.info("开始执行爬虫任务");
        spider(function(err,result){
            console.info("爬虫返回信息",result);
            if(err){
                log.error("爬取内容失败");
            }else if(result&&result.updateTime === lastUpdateTime){
                log.info("没有新的内容");
                return;
            }else{
                log.info("获取新的内容，发送邮件",result);
                lastUpdateTime = result.updateTime;
                count++;
                sendMail(result,function(err){
                    if(err){
                        log.error("邮件发送失败",err);
                    }else{
                        log.info("邮件发送成功");
                    }
                });
            }
        });
    }
});

