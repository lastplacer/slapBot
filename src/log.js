require('dotenv').config()
const winston = require('winston');

winston.configure({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // Write to all logs with level `info` and below to `combined.log` 
        // Write all logs error (and below) to `error.log`.
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'logs/combined.log'
        })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    winston.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = winston;