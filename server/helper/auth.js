let utils = require('../helper/utils.js');
let mongoose = require('mongoose');
var User = mongoose.model('User');
let jwt = require('./jwt');
let auth = {};
auth.checkToken = (req, res, next) => {
    let token = (req.headers && req.headers['x-auth-token']);
    if (utils.empty(token)) {
        token = (req.body && req.body['x-auth-token']);
    }
    if (utils.empty(token)) {
        return errorUtil.notAuthenticated(res, req);
    }
    req.token = token;
    next();
}


auth.requiresAdminLogin = (req, res, next) => {
    checkAuth(req, res, next, 'admin');
}

auth.requiresEmployerLogin = (req, res, next) => {
    checkAuth(req, res, next, 'employer');
}

auth.getCurrentUser = (req) => {
    let token = (req.headers && req.headers['x-auth-token']);
    let userId = jwt.getCurrentUserId(req);
    if (utils.empty(token) || utils.empty(userId)) {
        let response = {
            status: 401,
            message: req.t("NOT_AUTHORIZED")
        }
        return res.status(401).json(response);
    }
    else {
        let filter = {
            _id: userId,
            userType: 'employer'
        }
        User.findOne(filter, (err, result) => {
            if (!result) {
                let response = {
                    status: 401,
                    message: "NOT_AUTHORIZED"
                }
                return res.status(401).json(response);
            } else {
                console.log('result', result);
                return result;
            }
        });
    }
}

function checkAuth(req, res, next, userType) {
    let token = (req.headers && req.headers['x-auth-token']);
    let adminId = jwt.getCurrentUserId(req);
    if (utils.empty(token) || utils.empty(adminId)) {
        let response = {
            status: 401,
            message: "NOT_AUTHORIZED"
        }
        return res.status(401).json(response);
    }
    else {
        let filter = {
            _id: adminId,
            userType: userType
        }
        User.findOne(filter, (err, result) => {
            if (!result) {
                let response = {
                    status: 401,
                    message: "NOT_AUTHORIZED"
                }
                return res.status(401).json(response);
            } else {
                next();
            }
        });
    }
}

module.exports = auth