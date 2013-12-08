angular.module('templates-app', ['account/account.tpl.html', 'dashboard/dashboard.tpl.html', 'login/login.tpl.html', 'logout/logout.tpl.html', 'register/register.tpl.html']);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-4 col-md-4\">\n" +
    "        <h1 class=\"page-header\">Account Settings </h1>\n" +
    "        <form role=\"form\">\n" +
    "            <legend>Change Password</legend>                \n" +
    "                <p ng-class=\"{'alert alert-danger': feedback.success == false, 'alert alert-success': feedback.success == true }\">{{feedback.message}}</p>\n" +
    "\n" +
    "                <div class=\"form-group\" ng-class=\"{{feedback.errClass}}\">\n" +
    "                    <label class=\"control-label\">Current Password</label>\n" +
    "                    <input ng-model=\"currPass\" class=\"form-control\" type=\"password\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{{feedback.errClass}}\">\n" +
    "                    <label class=\"control-label\">New Password</label>\n" +
    "                    <input ng-model=\"newPass\" class=\"form-control\" type=\"password\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{{feedback.errClass}}\">\n" +
    "                    <label class=\"control-label\">Confirm New Password</label>\n" +
    "                    <input ng-model=\"confirmPass\" class=\"form-control\" type=\"password\">\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "            <button class=\"btn btn-success\" name=\"submit\" type=\"Submit\" ng-click=\"changePassword()\">Submit</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <h1 class=\"page-header\">\n" +
    "        Dashboard \n" +
    "      </h1>\n" +
    "      <p>\n" +
    "        Stuff goes here.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-offset-4 col-sm-4\">\n" +
    "        <h1 class=\"page-header\">Login</h1>\n" +
    "        <form role=\"form\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"username\">Username</label>\n" +
    "                <input type=\"username\" class=\"form-control\" id=\"username\" ng-model=\"username\" placeholder=\"Enter username\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"password\">Password</label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"password\" ng-model=\"password\" placeholder=\"Enter password\">\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-default\" id=\"login\" ng-click=\"login()\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("logout/logout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("logout/logout.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-offset-4 col-sm-4\">\n" +
    "        <h1 class=\"page-header\">Logout</h1>\n" +
    "        <p>Logging you out...</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/register.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-4 col-md-4\">\n" +
    "        <h1 class=\"page-header\">Register</h1>\n" +
    "        <form role=\"form\">\n" +
    "            <legend>Register New User</legend>                \n" +
    "                <p ng-class=\"{'alert alert-danger': feedback.success == false, 'alert alert-success': feedback.success == true }\">{{feedback.message}}</p>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"username\">Username</label>\n" +
    "                <input type=\"username\" class=\"form-control\" id=\"username\" ng-model=\"username\" placeholder=\"Enter username\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"password\">Password</label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"password\" ng-model=\"password\" placeholder=\"Enter password\">\n" +
    "            </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{{feedback.errClass}}\">\n" +
    "                    <label class=\"control-label\">Confirm Password</label>\n" +
    "                    <input ng-model=\"confirmPass\" class=\"form-control\" type=\"password\">\n" +
    "                </div>\n" +
    "            <button class=\"btn btn-default\" id=\"register\" ng-click=\"register()\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
