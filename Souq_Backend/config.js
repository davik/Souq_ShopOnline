const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'nwhazdrp7hdpd4a4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'fdhmtiheauqwm0fl',
    password: 'mx1qevesfb4jn03p',
    database: 'jjdhl3nxaus3ojj2',
})

module.exports = connectionPool;
