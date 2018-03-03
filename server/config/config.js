let devSetting = function () { };


devSetting.SITE_URL = 'http://localhost:4200/';
devSetting.SECRET = process.env.SECRET_KEY;
devSetting.MAIL_API_USER = '3f84163041d190';
devSetting.MAIL_API_KEY = '6ef6472c613581';
devSetting.LIMIT = process.env.LIMIT;
devSetting.ALLOWED_IMAGE_FILES = ["jpg", "png", "jpeg"];
module.exports = devSetting;