let braintree = require("braintree");
let config = require('../../config/config');
let waterfall = require('async-waterfall');
let jwt = require('../../helper/jwt');
let mongoose = require('mongoose');
let Payment = mongoose.model('Payment');
let User = mongoose.model('User');
let utils = require('../../helper/utils');



let gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: config.BRAINTREE_MERCHANT_ID,
    publicKey: config.PUBLIC_KEY,
    privateKey: config.PRIVATE_KEY
});

let paymentCtr = {};

paymentCtr.getClientToken = (req, res) => {
    gateway.clientToken.generate({}, function (err, response) {
        // console.log('err', err);
        // console.log('response', response);
        res.status(200).json(response);
    });
}

paymentCtr.paymentMethod = (req, res) => {
    var nonceFromTheClient = req.body.payment_method_nonce;
    let planType = req.body.planType;
    console.log('req.body', req.body);
    let plan = [
        {
            planType: 'PROFESSIONAL',
            amount: 350,
            carrots: 1000
        },
        {
            planType: 'VALUE',
            amount: 90,
            carrots: 200
        },
        {
            planType: 'CASUAL',
            amount: 25,
            carrots: 50
        }
    ];
    waterfall([
        function (callback) {
            let selectedPlan = plan.filter(function (obj) {
                return obj.planType === planType;
            });
            if (selectedPlan && Array.isArray(selectedPlan) && selectedPlan.length > 0) {
                selectedPlan = selectedPlan[0];
            }
            // console.log('selectedPlan', selectedPlan);
            gateway.transaction.sale({
                amount: selectedPlan.amount,
                paymentMethodNonce: nonceFromTheClient,
                options: {
                    submitForSettlement: true
                }
            }, (err, result) => {
                if (err) {
                    console.log('err', err);
                    callback(err);
                }

                if (result && result.success === true) {
                    console.log('result1', result);
                    let user_id = jwt.getCurrentUserId(req);
                    let newObj = {
                        amount: result.transaction.amount,
                        transaction_id: result.transaction.id,
                        transaction_status: result.transaction.status,
                        user_id: user_id
                    }
                    callback(null, selectedPlan, newObj, result);
                } else {
                    console.log('test 2 re', result);
                    callback(result.message);
                }
            });
        }, function (selectedPlan, newData, result, callback) {
            let newObj = Payment(newData);
            newObj.save(function (err, paymentResult) {
                if (err) {
                    console.log('err in save transaction', err);
                    callback(err);
                }
                else {
                    // console.log('result save of transaction', result);
                    if (result && result.success === true) {
                        console.log('test');
                        callback(null, selectedPlan, newData, result, paymentResult);
                    } else {
                        let response = {
                            status: 400,
                            message: 'Failed'
                        }
                        return res.status(400).json(response);
                    }
                }
            });
        }, function (selectedPlan, newData, result, paymentResult, callback) {
            let user_id = newData.user_id;
            User.findById(user_id, function (err, userData) {
                if (err) {
                    callback(err);
                } else {
                    // console.log('userData', userData);
                    let purchasedCarrot = selectedPlan.carrots;
                    let oldTotalCarrots = userData.carrots.total;
                    let oldAvailableCarrots = userData.carrots.available;
                    let updatedTotalCarrot = Number(oldTotalCarrots) + Number(purchasedCarrot);
                    let updatedAvailableCarrot = Number(oldAvailableCarrots) + Number(purchasedCarrot);
                    let userNewData = {
                        carrots: {
                            total: Number(updatedTotalCarrot),
                            available: Number(updatedAvailableCarrot),
                            pending: userData.carrots.pending
                        }
                    }
                    // console.log('userNewData', userNewData);
                    User.findByIdAndUpdate(user_id, userNewData, { new: true }, function (err, updatedUserData) {
                        if (err) {
                            console.log('err', err);
                            callback(err);
                        } else {
                            // console.log('updatedUserData', updatedUserData);

                            callback(null, updatedUserData, paymentResult)
                        }
                    });
                }
            });
        }, function (updatedUserData, paymentResult, callback) {
            console.log('paymentResult', paymentResult);
            let newStatus = {
                carrotStatus: true
            }
            Payment.findByIdAndUpdate(paymentResult._id, newStatus, function (err, carrotStatusResponse) {
                if (err) {
                    console.log('err', err);
                    callback(err);
                } else {
                    callback(null, updatedUserData)
                }
            });
        }, function (updatedUserData, callback) {
            let email = updatedUserData.email;
            let username = updatedUserData.name ? updatedUserData.name : '';
            // let username = '';
            let subject = 'Carrot Purchased Successfully';
            // let pageName = 'activateaccount/' + token;
            let fileName = 'purchaseSuccess';
            let date = new Date();
            let year = date.getFullYear();
            let mailTemplatePath = "./mail_content/" + fileName + ".html";
            utils.getHtmlContent(mailTemplatePath, function (err, content) {
                if (err) {
                    console.log('get html err', err);
                    callback('PLEASE_TRY_AGAIN');
                }
                if (content) {
                    // let link = config.SITE_URL + pageName;
                    // content = content.replace("{LINK}", link);
                    content = content.replace("{USERNAME}", username);
                    content = content.replace("{YEAR}", year);
                    utils.sendEmail(email, subject, content, function (err, result) {
                        if (err) {
                            console.log('mail err', err);
                            callback('PLEASE_TRY_AGAIN');
                        }
                        if (result) {
                            // callback(null, result);
                            let response = {
                                status: 200,
                                message: "SUCCESS",
                                data:updatedUserData
                            }
                            return res.status(200).json(response);
                        }
                        else {
                            console.log('test');
                            callback('PLEASE_TRY_AGAIN');
                        }
                    });
                }
                else {
                    console.log('test2');
                    callback('PLEASE_TRY_AGAIN');
                }
            });
        }
    ], (err) => {
        let response = {
            status: 400,
            message: 'FAILED',
            err: err
        }
        return res.status(400).json(response);
    });
}
module.exports = paymentCtr;

