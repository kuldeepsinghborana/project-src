let devSetting = function () { };


devSetting.SITE_URL = 'http://localhost:4200/';
devSetting.SECRET = process.env.SECRET_KEY;
devSetting.MAIL_API_USER = '3f84163041d190';
devSetting.MAIL_API_KEY = '6ef6472c613581';

devSetting.BRAINTREE_MERCHANT_ID = '63fx8429457h347r';
devSetting.PUBLIC_KEY = 'pvgmyy347ptrm4c5';
devSetting.PRIVATE_KEY = '892573e01000aea0a9fd92c5d3eb3845';

devSetting.LIMIT = process.env.LIMIT;
devSetting.ALLOWED_IMAGE_FILES = ["jpg", "png", "jpeg"];

module.exports = devSetting;

