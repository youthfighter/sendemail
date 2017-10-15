/**
 * Created by Administrator on 2017/10/15 0015.
 */
var log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'log/app.log' } },
    categories: { default: { appenders: ['cheese'], level: 'info' } }
});

module.exports = log4js.getLogger();