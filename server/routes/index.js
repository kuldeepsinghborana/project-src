var express = require('express');
var cookieParser = require('cookie-parser');
let auth = require('../helper/auth');
var router = express.Router();

// image upload
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

// controllers
var broadcast = require('../controllers/broadcast');
var ctrlAdmin = require('../controllers/admin-controller');
var ctrlEmployer = require('../controllers/employer-controller');
var ctrlUsers = require('../controllers/api/users.controllers');
var ctrlJobs = require('../controllers/api/jobs.controllers');
var ctrlMatches = require('../controllers/api/matches.controllers');
let ctrlPayment = require('../controllers/api/payment.controller');
var database = require('../controllers/mongo').Controller

var botControl = require('../controllers/api/bot.controller')

/* GET home page. */

/* GET employee search page. */
router.get('/employeesearch', function (req, res, next) {
  //get data of most recently added employees
  database.readRecent().then(employees => {
    console.log(employees);
    res.render('employeesearch', { title: 'Jobbunny', employees: employees });
  });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Jobbunny' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Jobbunny' });
});

/* GET jobhop page. */
router.get('/jobhop', function (req, res, next) {
  res.render('jobhop', { title: 'Jobbunny' });
});

/* Search for employees with the required parameters */
router.post('/filter', function (req, res, next) {
  console.log(req.body);
  database.filter(req.body).then(employees => {
    res.render('employeesearch', { title: 'Jobbunny', employees: employees, job: req.body });
  })
})


// POST Worker
router.post('/botControl/:task', function (req, res, next) {
  botControl.processTask(req, res, req.params.task);
})


router.get('/personality_test', function (req, res, next) {
  res.redirect('https://m.me/jobbunny?ref=personality_quiz');
});

router.get('/personality_test/:userId', function (req, res, next) {
  botControl.personalityExists({ "messenger user id": req.params.userId }).then(user_data => {
    if (user_data == null || user_data['personality'] == null) {
      res.redirect('https://m.me/jobbunny?ref=personality_quiz');
    } else {
      res.render('personality_test', { title: user_data['first name'] + '\'s personality trait is -  ' + user_data['personality']['primary']['name'].toUpperCase(), userData: user_data });
    }
  });
});


/*router.post('/newbunny', function (req, res, next) {
  var newBunny = botControl.addApplication(req.body); //database.create(req.body);
  newBunny.then(T => {
    //res.send("OK");
    var response = {
                     "messages": [
                       {"text": "Your application was successfully received. We will update you once we have matching jobs with us."}
                     ]
                   }
    res.json(response);
  }, error => {
      console.log(error)
      res.status(500).send()
  });
});




//personality-test
router.post('/storePersonality', function (req, res, next) {

});*/

// Broadcast job offer to user
router.post('/offerjob', function (req, res, next) {
  console.log(req.body);
  broadcast(req.body);
  res.send('OK');
});

/* GET register page. */
// Angular app starts at this template
// router.get('/app', function (req, res, next) {
//   res.render('angular', { title: 'Jobbunny | Register' });
// });

// cookie check for logged-in users
var isAuthenticated = function (req, res, next) {
  console.log('User in session --> ' + req.session.userId);
  // console.log(req.session.user);
  if (req.session.userId && req.cookies.userId) {
    next();
  } else {
    res.status(401).redirect('/login');
  }
};

var rootPathFor = function (user_type) {
  switch (user_type) {
    case 'employer':
      return '/employer';
    case 'admin':
      return '/admin';
    default:
      return '/';
  }
}

var isAdmin = function (req, res, next) {
  if (req.session.user) {
    var user_type = req.session.user.userType;
    if (req.session.user.userType == 'admin') {
      next();
    } else {
      req.flash('error', 'Unauthorized');
      res.status(401).redirect(rootPathFor(user_type));
    }
  } else {
    res.locals.error = "Unauthorized";
    res.status(401).redirect('/login');
  }
};

var _seenNotification = function (notification_id) {
  console.log('UPDATE notification as seen');
  Notification
    .findOneAndUpdate({ _id: notification_id }, { seen: true }, { upsert: true })
    .exec(function (err, notification) {
      if (err) {
        console.log('Error', err, notifiee_id, job_id, message);
        return err;
      }
      return notification;
    });
}

var isEmployer = function (req, res, next) {
  var current_user = req.session.user;
  if (current_user) {
    var user_type = current_user.userType;
    if (current_user.userType == 'employer') {
      next();
    } else {
      req.flash('error', 'Unauthorized access');
      res.status(401).redirect(rootPathFor(user_type));
    }
  } else {
    res.locals.error = "Unauthorized";
    res.status(401).redirect('/login');
  }
};
// Session routes
router.get('/register', function (req, res, next) {
  res.render('sessions/register', { title: 'Jobbunny | Register' });
});

router.get('/login', function (req, res, next) {
  res.render('sessions/login', { title: 'Jobbunny | Login', error: req.flash('error') });
});



router
  .route('/logout')
  .get(ctrlUsers.logout)

//account activation
router
  .route('/api/users/accountactivate/:token')
  .get(ctrlUsers.acitvateAccount);

// employer routes
router
  .route('/api/employer')
  .get(auth.requiresEmployerLogin, ctrlEmployer.dashboard);
router
  .route('/api/employer/settings')
  .get(auth.requiresEmployerLogin, ctrlEmployer.settings);
router
  .route('/api/employer/jobs')
  .get(ctrlEmployer.jobsList);
router
  .route('/employer/jobs/new')
  .get(auth.requiresEmployerLogin, ctrlEmployer.newJob);
router
  .route('/api/employer/jobs/:jobId')
  .get(ctrlEmployer.showJob);
  router
  .route('/employer/jobsWithId/:jobId')
  .get(ctrlEmployer.showJobWithId);
router
  .route('/employer/jobs/:jobId/edit')
  .get(auth.requiresEmployerLogin, ctrlEmployer.editJob);
router
  .route('/api/employer/workers')
  .get(auth.requiresEmployerLogin, ctrlEmployer.workersList);
router
  .route('/api/employer/workers/:workerId')
  .get(auth.requiresEmployerLogin, ctrlEmployer.showWorker);
router
  .route('/api/employer/employees/invite/:jobId')
  .get(auth.requiresEmployerLogin, ctrlEmployer.inviteWorkers);
router
  .route('/employer/notifications')
  .get(auth.requiresEmployerLogin, ctrlEmployer.notifications);

router.get('/employer/farm-carrots', function (req, res, next) {
  res.render('employer/farmCarrots', { title: 'Jobbunny | Employer > Carrots' });
});
router.get('/employer/buy-carrots', function (req, res, next) {
  res.render('employer/buyCarrots', { title: 'Jobbunny | Employer > Carrots' });
});

router
  .route('/api/employer/sendinvite')
  .post(auth.requiresEmployerLogin, ctrlEmployer.sendinvite);

  router
  .route('/api/saveUserProfile')
  .post(auth.requiresEmployerLogin, ctrlJobs.saveUserProfile);

// admin routes
router
  .route('/api/admin')
  .get(auth.requiresAdminLogin, ctrlAdmin.dashboard)
router
  .route('/api/admin/employers')
  .get(auth.requiresAdminLogin, ctrlAdmin.employersList);
router
  .route('/admin/employers/search')
  .get(auth.requiresAdminLogin, ctrlAdmin.searchEmployers);
router
  .route('/api/admin/settings')
  .get(auth.requiresAdminLogin, ctrlAdmin.settings);
router
  .route('/api/admin/employers/:employerId')
  .get(auth.requiresAdminLogin, ctrlAdmin.showEmployer);
router
  .route('/api/admin/jobs')
  .get(auth.requiresAdminLogin, ctrlAdmin.jobsList);
router
  .route('/api/admin/jobs/:jobId')
  .get(auth.requiresAdminLogin, ctrlAdmin.showJob);
router
  .route('/api/admin/employee')
  .get(auth.requiresAdminLogin, ctrlAdmin.workersList);
router
  .route('/api/admin/employees/:employeeId')
  .get(auth.requiresAdminLogin, ctrlAdmin.showWorker);
router
  .route('/admin/carrots')
  .get(auth.requiresAdminLogin, ctrlAdmin.carrotAnalytics);
router
  .route('/admin/bot')
  .get(auth.requiresAdminLogin, ctrlAdmin.botAnalytics);
// jobs routes
/* GET newjob page. */
router
  .route('/newjob')
  .get(ctrlJobs.newJob)
router
  .route('/api/employee/:workerId')
  .get(ctrlEmployer.showWorker)
router
  .route('/api/isEmailExist')
  .post(ctrlUsers.isEmailExist)
router
  .route('/api/jobs')
  .post(upload.single('coverImage'), ctrlJobs.createJob)
router
  .route('/api/jobs/update/:jobId')
  .post(upload.single('coverImage'), ctrlJobs.updateJob)
router
  .route('/api/jobs/delete/:jobId')
  .get(ctrlJobs.deleteJob)
router
  .route('/api/jobs/mark/:jobId')
  .get(ctrlJobs.markJob)

router
  .route('api/jobs/:jobId')
  .get(ctrlJobs.showJob)

router
  .route('/api/search')
  .get(ctrlJobs.searchJob)

router
  .route('/jobs')
  .get(ctrlJobs.filterJob)

// matches routes

router
  .route('/api/matches/:employerId/:jobId/:workerId')
  .all(ctrlMatches.createMatch);
router
  .route('/api/matches/update/:matchId')
  .all(ctrlMatches.updateMatch);
router
  .route('/api/matches/employed/:matchId')
  .all(ctrlMatches.employedMatch);
router
  .route('/api/matches/delete/:matchId')
  .get(ctrlMatches.deleteMatch);
router
  .route('/api/matches/:jobId/:workerId')
  .all(ctrlMatches.createMatch);
// authentication routes
router
  .route('/api/users/register')
  .post(ctrlUsers.register);
router
  .route('/api/users/login')
  .post(ctrlUsers.login);
router
  .route('/api/users/update')
  .post(upload.single('profilePic'), auth.requiresEmployerLogin, ctrlUsers.updateUser)


//PAYMENT ROUTES
router
  .route('/api/employer/payment')
  .get(auth.requiresEmployerLogin, ctrlPayment.getClientToken);

router.route('/api/employer/payment/checkout').post(auth.requiresEmployerLogin, ctrlPayment.paymentMethod);

module.exports = router;


