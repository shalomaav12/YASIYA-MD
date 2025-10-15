const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JJYCFIhK#gbwEDW75opKIZO4CEI62Ctkrr7eTtNN9IsPTXOAL7O8'
};
