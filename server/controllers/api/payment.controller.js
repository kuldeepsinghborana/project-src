let braintree = require("braintree");
let config = require('../../config/config');
let waterfall = require('async-waterfall');
let jwt = require('../../helper/jwt');
var mongoose = require('mongoose');
var Payment = mongoose.model('Payment');
let User = mongoose.model('User');
let gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: config.BRAINTREE_MERCHANT_ID,
    publicKey: config.PUBLIC_KEY,
    privateKey: config.PRIVATE_KEY
});

let paymentCtr = {};

paymentCtr.getClientToken = (req, res) => {
    console.log('getClientToken');
    gateway.clientToken.generate({}, function (err, response) {
        console.log('err', err);
        console.log('response', response);
        res.status(200).json(response);
    });
}

paymentCtr.paymentMethod = (req, res) => {
    var nonceFromTheClient = req.body.payment_method_nonce;
    let planType = req.body.planType;
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
            console.log('selectedPlan', selectedPlan);
            gateway.transaction.sale({
                amount: selectedPlan.amount,
                paymentMethodNonce: nonceFromTheClient,
                options: {
                    submitForSettlement: true
                }
            }, (err, result) => {
                if (err) {
                    console.log('err', err);
                }
                let user_id = jwt.getCurrentUserId(req);
                let newObj = {
                    amount: result.transaction.amount,
                    transaction_id: result.transaction.id,
                    transaction_status: result.transaction.status,
                    user_id: user_id
                }
                console.log('newObj', newObj);
                callback(null, selectedPlan, newObj, result);
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
                        callback(null, selectedPlan, newData, result);
                    } else {
                        let response = {
                            status: 400,
                            message: 'Failed'
                        }
                        return res.status(400).json(response);
                    }
                }
            });
        }, function (selectedPlan, newData, result, callback) {
            let user_id = newData.user_id;
            User.findById(user_id, function (err, userData) {
                if (err) {
                    callback(err);
                } else {
                    console.log("userData", userData);
                    let purchasedCarrot = selectedPlan.carrots;
                    console.log('purchasedCarrot', purchasedCarrot);
                    let oldTotalCarrots = userData.carrots.total;
                    let oldAvailableCarrots = userData.carrots.available;
                    let updatedTotalCarrot = parseInt(oldTotalCarrots) + parseInt(purchasedCarrot);
                    let updatedAvailableCarrot = parseInt(oldAvailableCarrots) + parseInt(purchasedCarrot);
                    console.log('updatedTotalCarrot', updatedTotalCarrot);
                    console.log('updatedAvailableCarrot', updatedAvailableCarrot);
                    let userNewData = {
                        carrots: {
                            total: updatedTotalCarrot,
                            available: updatedAvailableCarrot,
                            pending: userData.carrots.pending
                        }
                    }
                    User.findByIdAndUpdate(user_id, userNewData, { new: true }, function (err, updatedUserData) {
                        if (err) {
                            callback(err);
                        } else {
                            console.log('updatedUserData', updatedUserData);
                        }
                    });
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

