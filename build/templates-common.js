angular.module('templates-common', ['com/codeboxsystems/angular/ui/BootstrapModal/tpl/bootstrap-modal.tpl.html']);

angular.module("com/codeboxsystems/angular/ui/BootstrapModal/tpl/bootstrap-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("com/codeboxsystems/angular/ui/BootstrapModal/tpl/bootstrap-modal.tpl.html",
    "<div class=\"modal-header\"> <h3>{{modalOptions.headerText}}</h3> </div> <div class=\"modal-body\"> <p>{{modalOptions.bodyText}}</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn\" \n" +
    "data-ng-click=\"modalOptions.close()\">{{modalOptions.closeButtonText}}</button> <button class=\"btn btn-primary\" \n" +
    "data-ng-click=\"modalOptions.ok();\">{{modalOptions.actionButtonText}}</button> </div>\n" +
    "");
}]);
