const mongoose = require('mongoose');
const jwt = require('../../helper/jwt');
const crypto = require('crypto');
const User = mongoose.model('User');
const Notification = mongoose.model('Notification');
const bcrypt = require('bcrypt');
const imgur = require('imgur');
const promise = require('bluebird');
const utils = require('../../helper/utils');
const waterfall = require('async-waterfall');




//verification
module.exports.isEmailExist = function (req, res) {
  console.log(req.body, "sda")
  let emailId = req.body.email;
  if (!emailId) {
    res.send({
      message: "Please Provide Email"
    })
    return false;
  }
  User.find({ email: emailId }, function (error, result) {
    if (error) {
      res.send({
        status: 400,
        message: error
      })
      return false;
    }
    if (result.length > 0) {
      res.send({
        status: 200,
        data: emailId,
        message: 'User Verified Successfully'
      })
      return false;
    }
    res.send({
      status: 201,
      data: emailId,
      message: 'User Not Verified'
    })
  })

}
// POST /api/users/register
// module.exports.register = function (req, res) {
//   console.log('registering user');

//   if (req.body.email && req.body.password) {
//     var userData = {
//       email: req.body.email,
//       name: req.body.name,
//       password: req.body.password,
//       // passwordConf: req.body.passwordConf,
//       phoneNumber: req.body.handphoneNumber,
//       companyname: req.body.companyname
//     }
//     User.create(userData, function (err, user) {
//       if (err) {
//         console.log("Error creating user", err)
//         // res.status(400).render('sessions/register', { error: err });
//         let response = {
//           status: 400,
//           message: "FAILED"
//         }
//         return res.status(200).json(response);
//       } else {
//         // console.log("User created ", user);
//         // res.status(201).render("sessions/login", { message: "Registration Successful. Please login." });
//         let response = {
//           status: 200,
//           message: "SUCCESS"
//         }
//         return res.status(200).json(response);
//       }
//     });
//   } else {
//     console.log('Insufficient data. Cannot register!');
//     // res.status(400).render('sessions/register', { error: 'Insufficient data. Cannot register!' });
//     let response = {
//       status: 400,
//       message: 'Insufficient data. Cannot register!'
//     }
//     return res.status(400).json(response);
//   }
// };


function generateReferenceNumber(cb) {
  let referenceNumber = utils.makeRandomWithCharacter();
  let filter = {
    referenceNumber: referenceNumber
  }

  User.find(filter, function (err, result) {
    (err) => {
      let response = {
        status: 400,
        message: 'Please Try Again'
      }
      return res.status(400).json(response);
    }
    if (result && result.length > 0) {
      generateReferenceNumber(cb);
    } else {
      cb(referenceNumber);
    }
  });
  // User.find(filter).exec(result => {
  //   if (result && result.length > 0) {
  //     generateReferenceNumber(cb);
  //   } else {
  //     cb(referenceNumber);
  //   }
  // }, (err) => {
  //   let response = {
  //     status: 400,
  //     message: 'Please Try Again'
  //   }
  //   return res.status(400).json(response);
  // });
}

module.exports.register = (req, res) => {
  let token = crypto.randomBytes(20).toString('hex');
  let newReferenceNumber;
  let referralSender;
  waterfall([
    function (callback) {
      generateReferenceNumber((data) => {
        newReferenceNumber = data;
        callback(null);
      });
    },
    function (callback) {
      if (req.body.referenceNumber) {
        let filter = {
          referenceNumber: req.body.referenceNumber
        }
        User.find(filter, function (err, result) {
          console.log('result', result);
          if (result && result.length > 0) {
            referralSender = result[0];
            let carrot = {
              available: 110,
              pending: 0,
              total: 110
            }
            callback(null, carrot);
          } else {
            let carrot = {
              available: 100,
              pending: 0,
              total: 100
            }
            callback(null, carrot);
          }
        });
      } else {
        let carrot = {
          available: 100,
          pending: 0,
          total: 100
        }
        callback(null, carrot);
      }
    },
    function (carrot, callback) {
      if (req.body.email && req.body.password) {
        var userData = {
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
          // passwordConf: req.body.passwordConf,
          phoneNumber: parseInt(req.body.handphoneNumber),
          companyname: req.body.companyname,
          token: token,
          // carrots: {
          //   available: 100,
          //   pending: 0,
          //   total: 100
          // },
          carrots: carrot,
          referenceNumber: newReferenceNumber
        }
        User.create(userData, function (err, user) {
          if (err) {
            console.log("Error creating user", err);
            if (err.code === 11000) {
              let response = {
                status: 400,
                message: "Already Registered"
              }
              return res.status(400).json(response);
            }
            // res.status(400).render('sessions/register', { error: err });
            let response = {
              status: 400,
              message: "FAILED"
            }
            return res.status(400).json(response);
          } else {
            callback(null, userData, user);
          }
        });
      } else {
        console.log('Insufficient data. Cannot register!');
        // res.status(400).render('sessions/register', { error: 'Insufficient data. Cannot register!' });
        let response = {
          status: 400,
          message: 'Insufficient data. Cannot register!'
        }
        return res.status(400).json(response);
      }
    }, function (data, user, callback) {
      if (referralSender && referralSender != null && referralSender != undefined) {
        // console.log('referralSender', referralSender);
        let user_id = referralSender._id;
        let purchasedCarrot = 10;
        let oldTotalCarrots = referralSender.carrots.total;
        let oldAvailableCarrots = referralSender.carrots.available;
        let updatedTotalCarrot = Number(oldTotalCarrots) + Number(purchasedCarrot);
        let updatedAvailableCarrot = Number(oldAvailableCarrots) + Number(purchasedCarrot);
        let userNewData = {
          carrots: {
            total: Number(updatedTotalCarrot),
            available: Number(updatedAvailableCarrot),
            pending: referralSender.carrots.pending
          }
        }
        // console.log('userNewData', userNewData);
        User.findByIdAndUpdate(user_id, userNewData, { new: true }, function (err, updatedUserData) {
          if (err) {
            console.log('err', err);
            // callback(err);
            callback(null, data, user);
          } else {
            // console.log('updatedUserData', updatedUserData);
            callback(null, data, user);
          }
        });
      } else {
        callback(null, data, user);
      }
    }, function (data, user, callback) {
      let email = data.email;
      let token = data.token;
      let username = data.name ? data.name : '';
      let subject = 'Verify your Account';
      let pageName = 'activateaccount/' + token;
      let fileName = 'accountVerification';
      let date = new Date();
      let year = date.getFullYear();
      let mailTemplatePath = "./mail_content/" + fileName + ".html";
      utils.getHtmlContent(mailTemplatePath, function (err, content) {
        if (err) {
          callback('PLEASE_TRY_AGAIN');
        }
        if (content) {
          let link = config.SITE_URL + pageName;
          content = content.replace("{LINK}", link);
          content = content.replace("{USERNAME}", username);
          content = content.replace("{YEAR}", year);

          utils.sendEmail(email, subject, content, function (err, result) {
            if (err) {
              callback('PLEASE_TRY_AGAIN');
            }
            if (result) {
              // callback(null, result);
              let response = {
                status: 200,
                message: "SUCCESS",
                userId: user._id
              }
              return res.status(200).json(response);
            }
            else {
              callback('PLEASE_TRY_AGAIN');
            }
          });
        }
        else {
          callback('PLEASE_TRY_AGAIN');
        }
      });
    }
  ], function (err) {
    response = {
      status: 400,
      error: err
    }
    return res.status(400).json(response);
  });
}

// POST /api/users/login
module.exports.login = function (req, res) {
  console.log('logging in user');

  let email = req.body.email;
  let password = req.body.password;

  User
    .findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        console.log(err)
        // res.status(400).render('sessions/login', { error: err });
        let response = {
          status: 400,
          message: 'Something went wrong please try again'
        }
        return res.status(400).json(response);
      } else {
        if (user && user != null) {
          if (user && bcrypt.compareSync(password, user.password)) {
            // set req.session.user for server
            let secretToken = jwt.createSecretToken({ uid: user._id });
            // req.session.userId = user._id;
            // req.session.user = user;
            // req.session.carrots = req.session.user.carrots;
            let response = {
              status: 200,
              token: secretToken,
              userType: user.userType
            }
            return res.status(200).json(response);
            // Notification.find({ notifieeId: user._id, seen: false }, function (err, notifications) {
            //   if (err) {
            //     console.error(err)
            //   }

            //   req.session.stats = { notificationsCount: notifications.length };
            //   // if (user.userType === "admin") {
            //   //   req.flash('message', 'Admin login Successful');
            //   //   res.status(301).redirect('/admin');
            //   // } else {
            //   //   req.flash('message', 'Employer login Successful');
            //   //   res.status(301).redirect('/employer');
            //   // }
            // });

          } else {
            // reset session if user not found
            // req.session.destroy();
            // res.status(401).render('sessions/login', { error: 'Unauthorized ! username and/or password does not match.' });
            let response = {
              status: 400,
              message: 'Unauthorized ! username and/or password does not match.'
            }
            return res.status(400).json(response);
          }
        } else {
          let response = {
            status: 400,
            message: 'You are not registered with us'
          }
          return res.status(400).json(response);
        }
      }
    });
};

// GET /logout
module.exports.logout = function (req, res, next) {
  console.log('logging out user -->' + req.session);
  if (req.session) {
    console.log('...deleting session')
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        next(err);
      } else {
        res.clearCookie('userId');
        res.redirect('/');
      }
    });
  }
};

// POST /api/users/update
module.exports.updateUser = function (req, res) {
  let userId = jwt.getCurrentUserId(req);
  return new Promise((resolve, reject) => {
    utils.getCurrentUser(req).then((current_user) => {
      console.log('UPDATE user with _id: ' + userId);
      var formData = req.body;
      var updateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        companyName: formData.companyName,
        profilePic: req.file ? req.file.filename : current_user.profilePic || null
      };
      if (formData.password.length > 0 && formData.passwordConf.length > 0) {
        if (formData.password !== formData.passwordConf) {
          err = "Password does not match with Password confirmation";
          reject(400, err);
        }
        updateParams.password = formData.password;
      } else {
        reject(400, 'Please enter password and password confirmation to update your settings');
      }
      return User
        .findById(userId)
        .exec().then((user) => {
          console.log('Found user: ', user._id);
          user.set(updateParams);
          return user.save().then(user => {
            if (user.profilePic) {
              // upload profile pic
              return imgur.uploadFile('public/uploads/' + user.profilePic).then(json => {
                remote_url = json.data.link;
                return User.findByIdAndUpdate(user._id, { $set: { profilePic: remote_url } }, { new: true }).then(user => {
                  resolve();
                  // reset session user to reflect changes in UI
                  // req.session.user = user;
                });
              });
            }
          });
        });
    });
  })
    .then(() => {
      return res.json({
        message: 'Account updated successfully'
      })
    })
    .catch((status, err) => {
      if (status && err) {
        return res.status(status).json({
          message: err
        });
      }
      return res.status(500).json({
        message: 'Something went wrong'
      });
    });
}

//Get /api/users/activateaccount/:token
module.exports.acitvateAccount = (req, res) => {
  let token = req.params.token;
  // console.log('token form params', token);

  let filter = { 'token': token };
  let newData = {
    token: null,
    isVerified: true
  }
  User.findOneAndUpdate(filter, newData, { new: true }, (error, result) => {
    if (error) {
      console.log('error', error);
      let response = {
        status: 400,
        message: 'FAILED'
      }
      return res.status(400).json(response);
    }
    if (result === null) {
      let response = {
        status: 400,
        message: 'Invalid Token'
      }
      return res.status(400).json(response);

    }
    console.log('result', result);
    let response = {
      status: 200,
      message: 'SUCCESS'
    }
    return res.status(200).json(response);
  });
}


// HELPER methods
var _getRedirectionPath = function (user_type) {
  var tmp = '/';
  if (user_type == 'admin') {
    tmp = '/admin/settings';
  } else if (user_type == 'employer') {
    tmp = '/employer/settings';
  }
  return tmp;
}

