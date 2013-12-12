angular.module('templates-app', ['account/account.tpl.html', 'education/education.tpl.html', 'experience/experience.tpl.html', 'hireme/hireme.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'portfolio/portfolio.tpl.html', 'register/register.tpl.html', 'skills/skills.tpl.html']);

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

angular.module("education/education.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("education/education.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\" disabled>\n" +
    "                    <option value=\"value[0].title\">Alphabetical</option>\n" +
    "                    <option value=\"rating\">Proficiency</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <div ng-repeat=\"edu in education | filter:searchText\">\n" +
    "        <div class=\"panel panel-default\" ng-repeat=\"value in edu.value\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">{{value.facility}}</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <h4>{{value.title}}</h4>\n" +
    "                </p>\n" +
    "                <p>{{value.startDate}} - {{value.endDate}}</p>\n" +
    "                <p>{{value.description}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("experience/experience.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("experience/experience.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\">\n" +
    "                    <option value=\"\">Chronological</option>\n" +
    "                    <option value=\"months\">Tenure</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "            <div class=\"panel panel-default\" ng-repeat=\"exp in experience | orderBy:sortOrder:true | filter:searchText\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">{{exp.company.title}}</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <h4><span ng-repeat=\"title in exp.titles\">{{title.title}}<span ng-show=\" ! $last \">, </span></span></h3>\n" +
    "                    <p class=\"tenure\">{{exp.startDate}} - {{exp.endDate}} | {{exp.tenure}}</p>\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                    <ul>\n" +
    "                        <li ng-repeat=\"achievement in exp.achievements\">{{achievement.title}}</li>\n" +
    "                    </ul>\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                    <button button-toggle=\"active btn-primary\" class=\"btn btn-default btn-xs pill-spacer\" ng-repeat=\"skill in exp.skills\" ng-model=\"skill\"></button> \n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("hireme/hireme.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("hireme/hireme.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\" disabled>\n" +
    "                    <option value=\"value[0].title\">Alphabetical</option>\n" +
    "                    <option value=\"rating\">Proficiency</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Contact Info</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <p>\n" +
    "                I am currently available for part-time freelance web development and front end consulting. The best way to contact me is by <a href=\"mailto:hire.rob.layton@gmail.com\" target=\"_blank\" width=\"33%\">email</a>.\n" +
    "                </p>\n" +
    "                        <p><a href=\"https://docs.google.com/document/d/1Iqkc-8_73aZsBJZyE4bMCEJtVsgQcXAJXdlBDHu26bc/pub\" target=\"_blank\" class=\"btn btn-primary btn-sm pull-right\" role=\"button\">Resume</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Social Networks</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <table class=\"table\">\n" +
    "                    <tr>\n" +
    "                            <td><a href=\"https://github.com/roblayton\" target=\"_blank\">Github</a>\n" +
    "                        <td><a href=\"http://beknown.com/roblayton\" target=\"_blank\">Monster</a></td>\n" +
    "                        <td><a href=\"http://www.linkedin.com/in/roblayton\" target=\"_blank\">LinkedIn</a></td>\n" +
    "                    </td>\n" +
    "                    <tr>\n" +
    "                        <td><a href=\"http://www.twitter.com/roblayton\" target=\"_blank\">Twitter</td>\n" +
    "                        <td><a href=\"http://www.facebook.com/robertblascolayton\" target=\"_blank\">Facebook</td>\n" +
    "                        <td><a href=\"http://roblayton.tumblr.com\" target=\"_blank\">Tumblr</td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\" disabled>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\" disabled>\n" +
    "                    <option value=\"value[0].title\">Alphabetical</option>\n" +
    "                    <option value=\"rating\">Proficiency</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <div class=\"panel-group\" id=\"accordion\">\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n" +
    "                            Identity\n" +
    "                        </a>\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "                <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <p>\n" +
    "                        I am the Director of Web Engineering at Adcade, a freelance Sr. Web Developer, and Front End Consultant. My primary focus is front end web development, but i also specialize in back end development, deployment, and management. \n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                        I'm currently working with a tech startup where I am the direct supervisor to a team of 4 web engineers. My daily responsibilities involve strategic planning, mentoring, hands-on development, writing automated tests, performing code reviews, managing product releases, leading scrum meetings, and communicating and carrying out JAD sessions with other department leads.\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                        Professionally, my number one passion is working with teams of developers. Outside of work, my passions include rock climbing, bouldering, playing the guitar, digital illustration, photography, electrical engineering, and archery. I'm 28 years old. I love NY.\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                        I built this portfolio using <a href=\"http://angularjs.org/\" target=\"_blank\">AngularJS</a>.\n" +
    "                        </p>\n" +
    "                        <p><a href=\"https://docs.google.com/document/d/1Iqkc-8_73aZsBJZyE4bMCEJtVsgQcXAJXdlBDHu26bc/pub\" target=\"_blank\" class=\"btn btn-primary btn-sm pull-right\" role=\"button\">Resume</a></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n" +
    "                            Daily Workload\n" +
    "                        </a>\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "                <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <div workload id=\"chart_div\" style=\"width:400; height:300\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h4 class=\"panel-title\">\n" +
    "                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n" +
    "                            Current Reads\n" +
    "                        </a>\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "                <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n" +
    "                    <div class=\"panel-body\">\n" +
    "                        <ul>\n" +
    "                            <li><strong>The Lean Startup</strong> by Eric Ries</li>\n" +
    "                            <li><strong>Succeeding with Agile: Software Development</strong> by Mike Cohn</li>\n" +
    "                            <li><strong>Test Driven JavaScript Development</strong> by David Flanagan</li>\n" +
    "                            <li><strong>Social Engineering: The Art of Human Hacking</strong> by Christopher Hadnagy</li>\n" +
    "                            <li><strong>Service Design Patterns</strong> by Robert Daigneau</li>\n" +
    "                            <li><strong>Building Web Reputation Systems</strong> by Randy Farmer and Bryce Glass</li>\n" +
    "                            <li><strong>Visualize This: The FlowingData Guide to Design, Visualization and Statistics</strong> by Nathan Yau</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-offset-4 col-sm-4\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Login</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
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
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("portfolio/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("portfolio/portfolio.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\" disabled>\n" +
    "                    <option value=\"value[0].title\">Alphabetical</option>\n" +
    "                    <option value=\"rating\">Proficiency</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <div ng-repeat=\"p in portfolio | filter:searchText\">\n" +
    "            <div class=\"panel panel-default\" ng-repeat=\"value in p.value\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">{{value.title}}</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <p>{{value.description}}</p>\n" +
    "                    <p><a href=\"{{value.link}}\" target=\"_blank\">{{value.link}}</a></p>\n" +
    "                <p>\n" +
    "                <button button-toggle=\"active btn-success\" class=\"btn btn-default btn-xs\" ng-repeat=\"skill in p.skills\" ng-model=\"skill\"></button> \n" +
    "                </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
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
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <input ng-model=\"searchText\" class=\"form-control\">\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "                <select ng-model=\"sortOrder\" class=\"form-control\">\n" +
    "                    <option value=\"value[0].title\">Alphabetical</option>\n" +
    "                    <option value=\"rating\">Proficiency</option>\n" +
    "                </select>\n" +
    "                <span class=\"input-group-addon\">\n" +
    "                    <span class=\"glyphicon glyphicon-sort\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title\">Requested Skills</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <div ng-hide=\"isActiveSkill()\">\n" +
    "                <div class=\"alert alert-warning\">\n" +
    "                    <strong>Looking for a consultant?</strong> Select desired skills as you browse to store them in this panel for easy viewing.\n" +
    "                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <p></p>\n" +
    "                <div ng-repeat=\"skill in skills\">\n" +
    "                    <div ng-repeat=\"set in skill.sets\">\n" +
    "                        <div ng-repeat=\"value in set.value\" ng-show=\"value.active\" ng-click=\"remove(value)\" class=\"pointer\">\n" +
    "                                <p class=\"sidebar-spacer\">\n" +
    "                                <span class=\"label label-success stored\">{{value.title}} <i class=\"icon-star\"> {{set.rating}}</i> <button type=\"button\" class=\"close stored\" data-dismiss=\"alert\" aria-hidden=\"true\"><strong>x</strong></button></span>\n" +
    "                                </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"isActiveSkill()\">\n" +
    "                <a href=\"\" clip-copy=\"copySkills()\" clip-click=\"copyLink()\">Copy to clipboard</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "        <div ng-repeat=\"skill in skills\">\n" +
    "            <div class=\"panel panel-default\" ng-repeat=\"category in skill.categories\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">{{category.title}}</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "\n" +
    "                    <div ng-repeat=\"set in skill.sets | orderBy:sortOrder:true | filter:searchText\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-5\">\n" +
    "                                <p>\n" +
    "                                <button class=\"btn btn-default btn-sm\" button-toggle=\"active btn-primary\" ng-repeat=\"value in set.value\" ng-model=\"value\"></button>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <rating value=\"set.rating\" max=\"5\" readonly=\"true\"></rating>{{set.rating}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
