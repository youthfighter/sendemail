/**
 * Created by Administrator on 2017/10/15 0015.
 */
/**
 * Created by Administrator on 2017/10/15 0015.
 */
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = function(data,cb){
    // 开启一个 SMTP 连接池
    var transport = nodemailer.createTransport(smtpTransport({
        host: "smtp.163.com", // 主机
        secure: true, // 使用 SSL
        secureConnection: true, // 使用 SSL
        port: 465, // SMTP 端口
        auth: {
            user: "youthfighter@163.com", // 账号
            pass: "woaini11200125" // 密码
        }
    }));

// 设置邮件内容
    var mailOptions = {
        from: "youthfighter<youthfighter@163.com>", // 发件地址
        to: "945693172@qq.com", // 收件列表
        subject: "快讯", // 标题
        /*text:data*/
        html: "<h1>更新时间:"+data.updateTime+"</h1><p>更新章节:"+data.updateContent+"</p>" // html 内容
    };

// 发送邮件
    transport.sendMail(mailOptions, function(error, response) {
        transport.close(); // 如果没用，关闭连接池
        if(error){
            console.log("邮件发送失败");
        }else{
            console.log("邮件发送成功");
        }
        cb(error);
    });
};