var mongoose = require('mongoose');
let waterfall = require('async-waterfall');
let jwt = require('../../helper/jwt');
const crypto = require('crypto');
var User = mongoose.model('User');
var Notification = mongoose.model('Notification');
var bcrypt = require('bcrypt');
var imgur = require('imgur');
let utils = require('../../helper/utils');




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

module.exports.register = (req, res) => {
  let token = crypto.randomBytes(20).toString('hex');
  waterfall([
    function (callback) {
      if (req.body.email && req.body.password) {
        var userData = {
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
          // passwordConf: req.body.passwordConf,
          phoneNumber: req.body.handphoneNumber,
          companyname: req.body.companyname,
          token: token,
          carrots: {
            available: 100,
            pending: 0
          }
        }
        User.create(userData, function (err, user) {
          if (err) {
            console.log("Error creating user", err)
            // res.status(400).render('sessions/register', { error: err });
            let response = {
              status: 400,
              message: "FAILED"
            }
            return res.status(200).json(response);
          } else {
            callback(null, userData);
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
    }, function (data, callback) {
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
                message: "SUCCESS"
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
      'error': err
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
        req.flash('error', err);
        return res.redirect(_getRedirectionPath(current_user.userType));
      }
      updateParams.password = formData.password;
    } else {
      req.flash('error', 'Please enter password and password confirmation to update your settings');
      return res.redirect(_getRedirectionPath(current_user.userType));
    }

    User
      .findById(userId)
      .exec(function (err, user) {
        if (err) {
          console.log("User not found: ", err)
          res.locals.error = 'User not found ' + err;
          res.redirect(_getRedirectionPath(current_user.userType));
        }
        console.log('Found user: ', user._id);
        user.set(updateParams);
        user.save(function (err, user) {
          if (err) {
            console.log("Error updating user")
            req.flash('error', 'Error updating user');
            res.redirect(req.header('Referer'));
          }
          req.flash('info', 'Account updated sucessfully');
          if (user.profilePic) {
            // upload profile pic
            imgur.uploadFile('public/uploads/' + user.profilePic).then(function (json) {
              remote_url = json.data.link;
              User.findByIdAndUpdate(user._id, { $set: { profilePic: remote_url } }, { new: true }, function (err, user) {
                if (err) {
                  console.log("Something wrong when updating data!");
                  res.redirect(_getRedirectionPath(current_user.userType));
                }
                console.log('Updated user', user);
                // reset session user to reflect changes in UI
                req.session.user = user;
                res.redirect(_getRedirectionPath(current_user.userType));
              });
            })
              .catch(function (err) {
                console.error(err.message);
                res.redirect(_getRedirectionPath(current_user.userType));
              });
          } else {
            // reset session user to reflect changes in UI
            req.session.user = user;
            res.redirect(_getRedirectionPath(current_user.userType));
          }
        });
      });
  }).catch((err) => {
    res.status(401).send('Not Authorized')
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

