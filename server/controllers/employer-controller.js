const mongoose = require('mongoose');
const Job = mongoose.model('Job');
const User = mongoose.model('User');
const Worker = require('../models/worker');
const Match = mongoose.model('Match');
const Notification = mongoose.model('Notification');
const jwt = require('../helper/jwt');
const utils = require('../helper/utils');
const moment = require('moment');
const waterfall = require('async-waterfall');

// GET /employer
module.exports.dashboard = function (req, res, next) {
  console.log('GET Employer dashboard', req.session.userId);
  let user_id = jwt.getCurrentUserId(req);

  var current_user = req.session.user;
  // init stats object for storing site-wide stats to use in nav header
  var stats = {};

  Job.find({ employerId: user_id }, function (err, jobs) {
    if (err) {
      console.log(err);
    }
    // console.log(countJobs(jobs, 'open'))
    let openJobsCount = countJobs(jobs, 'open');
    let urgentJobsCount = countJobs(jobs, 'urgent');
    let completedJobsCount = countJobs(jobs, 'completed');
    Match.find({ employerId: user_id }, function (err, matches) {
      if (err) {
        console.log(err);
      }
      let invitedWorkersCount = countMatches(matches, 'invited');
      let acceptedWorkersCount = countMatches(matches, 'accepted');
      let shortlistedWorkersCount = countMatches(matches, 'shortlisted');;
      let hiredWorkersCount = countEmployedMatches(matches);
      // get all notifications
      Notification.find({ notifieeId: user_id, seen: false }, function (err, notifications) {
        if (err) {
          console.log(err);
          res.render('error');
        }
        console.log('Notifications found');
        let notificationCount = notifications.length;
        // set stats as session variable
        req.session.stats = stats;
        res.json({
          notification: notifications,
          notificationCount: notificationCount,
          jobCount: {
            invitedWorkersCount: invitedWorkersCount,
            hiredWorkersCount: hiredWorkersCount,
            acceptedWorkersCount: acceptedWorkersCount,
            shortlistedWorkersCount: shortlistedWorkersCount,
            openJobsCount: openJobsCount,
            urgentJobsCount: urgentJobsCount,
            completedJobsCount: completedJobsCount
          },
        });
      }).sort({ 'createdAt': -1 });
    });
  });
};

// GET /employer/settings
module.exports.settings = function (req, res, next) {
  // var user_id = req.session.userId;
  let user_id = jwt.getCurrentUserId(req);
  console.log('GET Employer settings', user_id);
  // let user_id1 = '5a94785630c7bf43f8b359ab';
  // console.log('user_id', user_id1);
  User.findById(user_id).exec((err, user) => {
    if (err) {
      console.log(err);
      return res.json({
        message: err.message,
        err: err
      })
    }
    // console.log('User found: ', user);
    if (user) {
      user.password = '';
    }
    res.json({
      user: user
    });
  });
};

// GET /employer/notifications
module.exports.notifications = function (req, res, next) {
  // var current_user_id = req.session.user._id;
  let user_id = jwt.getCurrentUserId(req);

  // console.log('GET notifications', current_user_id);

  Notification
    .find({ notifieeId: user_id })
    .sort({ createdAt: -1 })
    .exec(function (err, notifications) {
      if (err) {
        console.log(err);
      }
      console.log('Notifications found', notifications.length);
      res.locals.notifications = notifications;
      res.format({
        html: function () {
          res.render('employer/notifications', {
            title: 'Jobbunny | Employer > Notifications',
            moment: moment
          });
        }
      });
    });
};

// GET /employer/jobs
module.exports.jobsList = function (req, res, next) {
  console.log('GET Employer jobsList');
  // var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);
  var job_type = req.query.jobType;
  var job_status = req.query.jobStatus;
  var job_industry = req.query.jobIndustry;
  res.locals.jobType = req.query.jobType;
  // get employer's joblist
  Job.find({ employerId: user_id }, function (err, jobs) {
    var tmpJobsList = jobs;
    // console.log('tmpJobsList', tmpJobsList);
    var filters = [];
    if (err) {
      console.log(err);
      res.redirect('/employer')
    }
    if (job_type) {
      tmpJobsList = filterJobs(tmpJobsList, 'jobType', job_type)
      filters.push({ jobType: job_type });
    }
    if (job_industry) {
      tmpJobsList = filterJobs(tmpJobsList, 'jobIndustry', job_industry)
      filters.push({ jobIndustry: job_industry });
    }
    if (job_status) {
      tmpJobsList = filterJobs(tmpJobsList, 'jobStatus', job_status)
      filters.push({ jobStatus: job_status });
    }
    res.locals.jobFilters = filters;
    res.locals.jobsCount = tmpJobsList.length;

    // add data for UI
    var jobsList = [];
    Match.find({ employerId: user_id }).exec(function (err, matches) {
      if (err) {
        console.log(err);
        error = err;
      }
      console.log('>>>>>>>>>>', matches.length);
      var tmp_job, job_clone, match;
      // append these matches to jobsList to access in UI
      for (j in tmpJobsList) {
        tmp_job = tmpJobsList[j];
        job_clone = JSON.parse(JSON.stringify(tmp_job));
        job_clone.invited = [];
        job_clone.applied = [];
        job_clone.shortlisted = [];
        matches_list = _filterMatchesForJob(matches, tmp_job._id)
        console.log(matches_list)
        for (m in matches_list) {
          match = matches_list[m];
          switch (match.matchStatus) {
            case 'invited':
              job_clone.invited.push(match);
              break;
            case 'applied':
              job_clone.applied.push(match);
              break;
            case 'shortlisted':
              job_clone.shortlisted.push(match);
              break;
            default:
              break;
          }
        }
        // console.log(job_clone);
        jobsList.push(job_clone);
      }
      console.log('jobsList', jobsList);

      res.send({
        title: 'Jobbunny | Employer > Jobs',
        jobs: jobsList,
        moment: moment,
      })
      return false;
    });
  });
};

// GET /employer/jobs/new
module.exports.newJob = function (req, res, next) {
  console.log('Creating new job');
  res.locals.jobProfile = req.query.profile;

  res.status(200).render('employer/newjob', { title: 'Jobbunny | Employer > Jobs' });
}

module.exports.showJobWithId = function (req, res) {
  console.log("i am in show job")
  var job_id = req.params.jobId;
  // var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);

  console.log('GET job with _id: ' + job_id);

  Job
    .findById(job_id)
    .exec(function (err, job) {
      if (err) {
        console.log("Job not found: ", err)
        // res.locals.error = 'Page not found';
        // res.status(400).render('error');
      }
      console.log('Found job: ', job._id);
      Match.find({ employerId: user_id, jobId: job._id }, function (err, matches) {
        if (err) {
          console.log("error", err);
        }
        res.locals.pendingInvitationWorkersCount = 0;
        res.locals.pendingAcceptanceWorkersCount = countMatches(matches, 'matched');
        res.locals.shortListedWorkersCount = countMatches(matches, 'shortlisted');
        res.locals.declinedWorkersCount = countMatches(matches, 'declined');
        console.log("current_user", current_user, job)
        _appendMatchesMetricsToJob(job, current_user, req, function (err, job_with_stats) {
          if (err) {
            console.log(err);
          }
          res.send({
            status: 1,
            job: job_with_stats,
            message: "successfully retrieved"
          })
          return false;
          // console.log(job_with_stats);
          // res.status(200).render('employer/showJob', {
          //   job: job_with_stats,
          //   moment: moment,
          //   title: 'Jobbunny | Employer > Job',
          //   message: req.flash('message'),
          //   error: req.flash('error')
          // });
        });
      });
    });
}
// GET /employer/jobs/:jobId
module.exports.showJob = function (req, res, next) {
  console.log("i am in show job")
  var job_id = req.params.jobId;
  var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);

  console.log('GET job with _id: ' + job_id);

  Job
    .findById(job_id)
    .exec(function (err, job) {
      if (err) {
        console.log("Job not found: ", err)
        return res.status(500).send({
          message: "Something went wrong!"
        })
        // res.locals.error = 'Page not found';
        // res.status(400).render('error');
      }
      if (!job) {
        return res.status(404).send({
          message: "Job not found"
        })

      }
      console.log('Found job: ', job);
      Match.find({ employerId: user_id, jobId: job._id }, function (err, matches) {
        if (err) {
          console.log(err);
        }
        res.locals.pendingInvitationWorkersCount = 0;
        res.locals.pendingAcceptanceWorkersCount = countMatches(matches, 'matched');
        res.locals.shortListedWorkersCount = countMatches(matches, 'shortlisted');
        res.locals.declinedWorkersCount = countMatches(matches, 'declined');
        _appendMatchesMetricsToJob(job, current_user, req, function (err, job_with_stats) {
          if (err) {
            console.log(err);
          }
          res.send({
            status: 1,
            job: job_with_stats,
            message: "successfully retrieved"
          })
          return false;
          // console.log(job_with_stats);
          // res.status(200).render('employer/showJob', {
          //   job: job_with_stats,
          //   moment: moment,
          //   title: 'Jobbunny | Employer > Job',
          //   message: req.flash('message'),
          //   error: req.flash('error')
          // });
        });
      });
    });
}

// GET /employer/jobs/:jobId/edit
module.exports.editJob = function (req, res, next) {
  var jobId = req.params.jobId;
  console.log('GET job with _id: ' + jobId);
  res.locals.jobProfile = 'advanced';
  Job
    .findById(jobId)
    .exec()
    .then((job) => {
      console.log('Found job: ', job._id);
      res.json({
        message: 'Job updated successful'
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'Job not found'
      })
    });
}

// GET /employer/workers?jobId=123
module.exports.workersList = function (req, res, next) {
  console.log('GET Employer workersList');

  var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);

  var gender_type = req.query.gender;
  var match_status = req.query.matchStatus;
  var job_id = req.query.jobId;
  // show workers list when job_id is present
  if (job_id) {
    Job
      .findById(job_id)
      .exec(function (err, job) {
        if (err) {
          console.log(err);
          req.flash('error', 'Job not found');
          res.status(400).render('employer/workersList', {
            title: 'Jobbunny | Employer > Workers',
            moment: moment
          });
        }
        res.locals.job = job;
        // get all workers invited/shortlisted/hired by the employer
        Match.find({ employerId: user_id, jobId: job_id }, function (err, matches) {
          if (err) {
            console.log(err);
            res.redirect('/employer')
          }
          // get associated workers from the matches
          var tmpWorkersList = _getWorkersListFromMatchesList(matches);
          var filters = [];

          if (gender_type) {
            tmpWorkersList = filterWorkers(tmpWorkersList, 'gender', gender_type)
            filters.push({ gender: gender_type });
          }
          if (match_status) {
            tmpWorkersList = filterWorkers(tmpWorkersList, 'matchStatus', match_status)
            filters.push({ matchStatus: match_status });
          }
          // console.log(tmpWorkersList.length);
          res.locals.workerFilters = filters;
          res.locals.workersCount = tmpWorkersList.length;
          res.status(200).render('employer/workersList', {
            title: 'Jobbunny | Employer > Workers',
            workers: tmpWorkersList,
            moment: moment
          });
        });
      });
  }
  // else show nothing
  else {
    res.status(200).render('employer/workersList', {
      title: 'Jobbunny | Employer > Workers',
      workers: [],
      moment: moment
    });
  }
};

// GET /employer/invite/workers
module.exports.inviteWorkers = function (req, res, next) {
  console.log('GET Employer invite workersList');
  var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);

  var job_id = req.params.jobId;

  Job
    .findById(job_id)
    .exec(function (err, job) {
      if (err) {
        console.log(err);
        res.redirect('/employer')
      }
      console.log('Job found :' + job._id);
      res.locals.job = job;
      getMatchedWorkers(job, function (err, workers) {
        if (err) {
          console.log(err);
          res.redirect('/employer')
        }
        console.log(workers);
        var tmpWorkersList = workers;
        // console.log(tmpWorkersList.length);
        res.locals.workersCount = tmpWorkersList.length;
        res.status(200).render('employer/inviteWorkers', {
          title: 'Jobbunny | Employer > Workers',
          workers: tmpWorkersList,
          moment: moment
        });
      });
    })
};

module.exports.sendinvite = (req, res) => {
  let user_id = jwt.getCurrentUserId(req);
  let email = req.body.email;
  waterfall([
    function (callback) {
      let filter = {
        email: req.body.email
      }
      User.find(filter, function (err, result) {
        if (result && result.length > 0) {
          callback('Already Registered with Us');
        } else {
          callback(null);
        }
      });
    },
    function (callback) {
      utils.getCurrentUser(req).then(user => {
        callback(null, user);
      }).catch(err => {
        callback(err);
      });
    },
    function (user, callback) {
      // console.log('second function user', user);
      let email = req.body.email;
      let referenceNumber = user.referenceNumber;
      // let username = data.name ? data.name : '';
      let subject = 'Invitation For Create Account';
      let pageName = 'homepage/register/' + referenceNumber;
      let fileName = 'invitation';
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
          content = content.replace("{USERNAME}", " ");
          content = content.replace("{YEAR}", year);
          content = content.replace("{referralCode}", user.referenceNumber);

          utils.sendEmail(email, subject, content, function (err, result) {
            if (err) {
              callback('PLEASE_TRY_AGAIN');
            }
            if (result) {
              // callback(null, result);
              let response = {
                status: 200,
                message: "SUCCESS",
                // userId: user._id
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
  ], (err) => {
    if (err) {
      let response = {
        message: err,
        status:400
      }
      return res.status(400).json(response);
    }
  });
}


Object.getPrototypeOf(moment()).toBSON = function () {
  return this.toDate();
};

var getMatchedWorkers = async function (job, callback) {
  var query = {}
  var applicationKey

  var applied_users_raw = await Match.find({ 'jobId': job['_id'] });
  var applied_users = []
  for (x = 0; x < applied_users_raw.length; x++) {
    applied_users.push(applied_users_raw[x]['worker']['_id'])
  }


  //console.log(users);

  console.log('GSFGHJGSJHGHJSGS')

  switch (job['jobType']) {
    case 'Part-time':
      applicationKey = "Part-timer." + job['jobIndustry']

      var startDate = moment(job['startDate'])
      var endDate = moment(job["endDate"])

      if (startDate.isBefore(endDate)) {
        query[applicationKey + ".dateStart"] = { "$lte": startDate.toDate() }
      }

      if (endDate.isAfter(startDate)) {
        query[applicationKey + ".dateEnd"] = { "$gte": endDate.toDate() }
      }

      var workdays = job['workPeriod']
      switch (workdays) {
        case "Weekend":
          query[applicationKey + ".preferred_workdays"] = "Weekend"
          break;

        case "Weekdays":
          query[applicationKey + ".preferred_workdays"] = "Weekdays"
          break;

        case "Both":
        //no need to put this filter

        default:
          break;
      }

      break;

    case 'Full-time':
      applicationKey = "Full-timer." + job['jobIndustry']
      var startDate = moment(job['startDate'])//.toDate()
      console.log('primt me')
      console.log(typeof startDate)
      query[applicationKey + ".dateStart"] = { "$lte": startDate.toDate() }

      break;
  }

  query[applicationKey + ".preferred_location"] = job['workRegion']
  query[applicationKey] = { '$exists': true }

  var match_query = { "$or": [{ '_id': { '$in': applied_users } }, query] }

  console.log(JSON.stringify(query))
  //return {'filter': query, 'project'  : {  }]\
  var pipeline = [
    { "$match": match_query },
    { "$addFields": { 'application': '$' + applicationKey } },
    {
      "$lookup":
        {
          "from": "matches",
          "localField": "_id",
          "foreignField": "worker._id",
          "as": "matches"
        }
    },
    //{ "$addFields": { 'match' : { "$arrayElemAt": [ "$match", 0 ] } }},
    //
    /*{
       "$addFields":
         {
           "match":
             {
               "$cond": { "if": { "$eq" :[ "$match.jobId" , job['_id'].toString() ] }, then: "$match", else: null }
             }
         }
    },
    { "$unwind" : {"path": "$match", "preserveNullAndEmptyArrays": true} },
    /*{ "$match" : {
                   "$or" : [
                     { "match" : { "$exists" : false } }, 
                     { "match.jobId" : job['_id'].toString() }
                    ]
                   }
    }*/
  ]
  console.log(JSON.stringify(pipeline))
  Worker.aggregate(pipeline, function (err, data) {
    var workers = []
    console.log(data.length);
    for (l = 0; l < data.length; l++) {
      var item = data[l]
      var matches = item['matches']
      for (k = 0; k < matches.length; k++) {
        var match = matches[k]
        if (match['jobId'] == job['_id']) {
          item['match'] = match;
          break;
        }
      }

      workers.push(item);

    }

    callback(err, workers)
    //}
  });
}


// GET /employer/workers/:workerId
module.exports.showWorker = function (req, res, next) {
  var worker_id = req.params.workerId;
  console.log('GET worker with _id: ' + worker_id);
  var current_user = req.session.user;
  let user_id = jwt.getCurrentUserId(req);

  var job_id = req.query.jobId;
  res.locals.jobId = job_id;

  var notification_id = req.query.notificationId; // get notificationId from URL
  if (notification_id) { // update seen: true and update session stats
    _seenNotification(notification_id);
    if (req.session.stats && req.session.stats.notificationsCount > 0) {
      req.session.stats.notificationsCount = req.session.stats.notificationsCount - 1;
    }
  }

  Worker
    .findById(worker_id)
    .exec(function (err, worker) {
      if (err) {
        console.log("worker not found: ", err)
        res.locals.error = 'Page not found';
        res.status(400).render('error');
      }

      console.log('Found worker: ', worker._id);
      // append matches related to the worker for UI
      Match.find({ employerId: user_id, jobId: job_id }, function (err, matches) {
        if (err) {
          console.log("matches not found: ", err)
          res.status(400).render('error');
        }
        console.log(matches.length)
        var worker_clone = JSON.parse(JSON.stringify(worker));
        worker_clone.matches = [];
        for (i in matches) {
          var match = matches[i]
          match.worker._id == worker_id && worker_clone.matches.push(match);
        }
        console.log(worker_clone);
        res.status(200).render('employer/showWorker', {
          title: 'Jobbunny | Employer > Worker',
          worker: worker_clone,
          message: req.flash('message'),
          error: req.flash('error')
        });
      })
    });
}

// HELPER methods
var countJobs = function (jobs_list, job_status) {
  var count = jobs_list.filter(function (job) {
    return job.jobStatus == job_status
  }).length;
  return count;
}

var countMatches = function (matches_list, match_status) {
  var count = matches_list.filter(function (match) {
    return match.matchStatus == match_status
  }).length;
  return count;
}

var countEmployedMatches = function (matches_list) {
  var count = matches_list.filter(function (match) {
    return match.employed == true
  }).length;
  return count;
}

// var _workerMatchStatusForJob = function(job, callback) {

// }

// returns job object with these metrics added to the object:
// { invited: [invited workers], applied: [applied workers], shortlisted: [shortlisted workers] }
var _appendMatchesMetricsToJob = function (job, current_user, req, callback) {
  // add each job's invited, shortlisted matches
  let user_id = jwt.getCurrentUserId(req);

  var tmp_matches, error;
  var jobsList = [];
  Match.find({ employerId: user_id, jobId: job._id }).exec(function (err, matches) {
    if (err) {
      console.log(err);
      error = err;
    }
    console.log('>>>>>>>>>>', matches.length);
    var job_clone, match;
    // append these matches to jobsList to access in UI
    job_clone = JSON.parse(JSON.stringify(job));
    job_clone.invited = [];
    job_clone.applied = [];
    job_clone.shortlisted = [];
    for (m in matches) {
      match = matches[m];
      switch (match.matchStatus) {
        case 'invited':
          job_clone.invited.push(match.worker);
          break;
        case 'applied':
          job_clone.applied.push(match.worker);
          break;
        case 'shortlisted':
          job_clone.shortlisted.push(match.worker);
          break;
        default:
          break;
      }
    }
    callback(error, job_clone);
  });
}

// returns array of JSON; list of filtered jobs
var filterJobs = function (jobs, filter_type, filter_query) {
  var jobsList = [];
  for (i in jobs) {
    var job = jobs[i];
    job[filter_type] == filter_query && jobsList.push(job);
  }
  return jobsList;
}

// list of filtered workers
var filterWorkers = function (workers, filter_type, filter_query) {
  var workersList = [];
  for (i in workers) {
    var worker = workers[i];
    worker[filter_type] == filter_query && workersList.push(worker);
  }
  return workersList;
}

var _filterMatchesForJob = function (matches, job_id) {
  var matches_list = [], match;
  for (i in matches) {
    match = matches[i];
    match.jobId == job_id && matches_list.push(match);
  }
  return matches_list;
}

var _getWorkersListFromMatchesList = function (matches) {
  var match, worker;
  var workersList = [];
  for (m in matches) {
    match = matches[m];
    worker = match.worker;
    worker.match = { _id: match._id, status: match.matchStatus }
    workersList.push(match.worker);
  }
  return workersList;
}

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
