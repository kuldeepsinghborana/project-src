let fs = require('fs');
const nodemailer = require("nodemailer");
let bcrypt = require('bcrypt');
let mongoose = require('mongoose');
let User = mongoose.model('User');
let jwt = require('./jwt');
let utilsfunction = {};
utilsfunction.isDefined = (variable) => {
    if (typeof variable == 'boolean') return true;
    return (typeof variable !== undefined && variable != null && variable != "");
}
utilsfunction.empty = (mixedVar) => {
    let undef, key, i, len;
    let emptyValues = ["undefined", null, false, 0, '', '0'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i]) {
            return true;
        }
    }
    if (typeof mixedVar === 'object') {
        for (key in mixedVar) {
            return false;
        }
        return true;
    }

    return false;
}
utilsfunction.isArray = (array) => {
    return Array.isArray(array);
}
utilsfunction.getHtmlContent = (filePath, callback) => {
    let content = "";
    fs.readFile(filePath, 'utf8', function (err, html) {
        if (!err) {
            content = html;

        }
        callback(null, content);

    });
}
utilsfunction.makeRandom = (req) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

utilsfunction.isPasswordMatch = (password, hash) => {
    //compare db password hash with new request password
    return new Promise((resolve, reject) => {
        bcrypt.compareSync(password, hash).then(function (res) {
            resolve(res);
        }, (err) => {
            console.log(err);
            reject(err);
        });
    })
}

utilsfunction.encrypt = (password) => {
    //return password hash as promise
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(parseInt(process.env.SALT_ROUND), function (err, salt) {
            if (err) {
                console.log(err);
                reject(err);
            }
            bcrypt.hash(password, salt).then((hash) => {
                resolve(hash);
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    })
};
utilsfunction.sendEmail = (toEmail, subject, body, callback) => {
    // let options = {
    //     auth: {
    //         api_user: process.ENV.MAIL_API_USER,
    //         api_key: process.ENV.MAIL_API_KEY
    //     }
    // }

    let options =
        {
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: config.MAIL_API_USER,
                pass: config.MAIL_API_KEY
            }
        }
    // let options =
    //     {
    //         host: "mail.cyon.ch",
    //         port: 465,
    //         auth: {
    //             user: config.MAIL_API_USER,
    //             pass: config.MAIL_API_KEY
    //         }
    //     }

    //smtpTransport = nodemailer.createTransport('smtps://murtu@suitenomics.com:g@KFyt34e@smtp.gmail.com');
    // smtpTransport = nodemailer.createTransport(sgTransport(options));
    smtpTransport = nodemailer.createTransport(options);

    let isEmailSent = false;
    smtpTransport.sendMail({
        from: "support@jobbuddy.com",
        to: toEmail,
        subject: subject,
        html: body.toString()
    }, function (error, response) {
        // console.log('error', error);
        // console.log('response', response);
        if (error) {
            isEmailSent = false;
        } else {
            // console.log(response);
            isEmailSent = true;
        }
        callback(null, isEmailSent);
    });
}

utilsfunction.getCurrentUser = (req) => {
    let token = (req.headers && req.headers['x-auth-token']);
    let userId = jwt.getCurrentUserId(req);
    if (utilsfunction.empty(token) || utilsfunction.empty(userId)) {
        let response = {
            status: 401,
            message: "NOT_AUTHORIZED"
        }
        return res.status(401).json(response);
    }
    else {
        let filter = {
            _id: userId,
            userType: 'employer'
        }
        let data = {};
        User.findOne(filter, (err, result) => {
            if (!result) {
                let response = {
                    status: 401,
                    message: "NOT_AUTHORIZED"
                }
                return res.status(401).json(response);
            } else {
                data = result;
                return data;
            }
        });
    }
}
module.exports = utilsfunction