angular.module('templates-app', ['account/account.tpl.html', 'dashboard/dashboard.tpl.html', 'experience/experience.tpl.html', 'login/login.tpl.html', 'register/register.tpl.html', 'skills/skills.tpl.html']);

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
    "    <div class=\"col-md-3\">\n" +
    "      <h3>\n" +
    "        Requested Skills\n" +
    "      </h3>\n" +
    "      <div ng-repeat=\"skill in skills\">\n" +
    "        <div ng-repeat=\"set in skill.sets\">\n" +
    "        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "            <span class=\"label label-success\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i></span> <span class=\"label label-danger\"></span><i class=\"icon-remove-sign\"></i>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
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

angular.module("experience/experience.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("experience/experience.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"filter\">Filter:</label>\n" +
    "        <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "    </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"filter\">Sort:</label>\n" +
    "        <select ng-model=\"sortOrder\" class=\"form-control\">\n" +
    "            <option value=\"\">Chronological</option>\n" +
    "            <option value=\"months\">Tenure</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "      <h3>\n" +
    "        Requested Skills\n" +
    "      </h3>\n" +
    "      <div ng-repeat=\"skill in skills\">\n" +
    "        <div ng-repeat=\"set in skill.sets\">\n" +
    "        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "            <span class=\"label label-success\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i></span> <span class=\"label label-danger\"></span><i class=\"icon-remove-sign\"></i>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <h1 class=\"page-header\">\n" +
    "          Experience <span class=\"label label-info\">{{totalTenure}}</span>\n" +
    "      </h1>\n" +
    "      <p>\n" +
    "      </p>\n" +
    "      <div ng-repeat=\"exp in experience | orderBy:sortOrder:true | filter:searchText\">\n" +
    "        <p>\n" +
    "        <h3>{{exp.company.title}}</h3>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "        <h4><span ng-repeat=\"title in exp.titles\">{{title.title}}<span ng-show=\" ! $last \">, </span></span></h4>\n" +
    "        <h5><span class=\"label label-default\">{{exp.startDate}} - {{exp.endDate}}</span> <span class=\"label label-info\">{{exp.tenure}}</span></h5>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "        <ul>\n" +
    "          <li ng-repeat=\"achievement in exp.achievements\">{{achievement.title}}</li>\n" +
    "        </ul>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <button button-toggle=\"active btn-success\" class=\"btn btn-default btn-xs\" ng-repeat=\"skill in exp.skills\" ng-model=\"skill\"></button> \n" +
    "        </p>\n" +
    "      </div>\n" +
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

angular.module("skills/skills.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("skills/skills.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"filter\">Filter:</label>\n" +
    "        <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "    </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"filter\">Sort:</label>\n" +
    "        <select ng-model=\"sortOrder\" class=\"form-control\">\n" +
    "            <option value=\"value[0].title\">Alphabetical</option>\n" +
    "            <option value=\"rating\">Proficiency</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "      <h3>\n" +
    "        Requested Skills\n" +
    "      </h3>\n" +
    "      <div ng-repeat=\"skill in skills\">\n" +
    "        <div ng-repeat=\"set in skill.sets\">\n" +
    "        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "            <span class=\"label label-success\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i></span> <span class=\"label label-danger\"></span><i class=\"icon-remove-sign\"></i>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <h1 class=\"page-header\">\n" +
    "        Skills \n" +
    "      </h1>\n" +
    "      <div ng-repeat=\"skill in skills\">\n" +
    "        <p>\n" +
    "        <h3><span ng-repeat=\"category in skill.categories\">{{category.title}}<span ng-show=\" ! $last \">, </span></span></h4>\n" +
    "        </p>\n" +
    "        <div ng-repeat=\"set in skill.sets | orderBy:sortOrder:true | filter:searchText\">\n" +
    "            <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "        <button class=\"btn btn-default\" button-toggle=\"active btn-success\" ng-repeat=\"value in set.value\" ng-model=\"value\"></button>\n" +
    "        </div>\n" +
    "            <div class=\"col-md-3\">\n" +
    "        <rating value=\"set.rating\" max=\"5\" readonly=\"true\"></rating>{{set.rating}}\n" +
    "            </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "</div>\n" +
    "");
}]);
