define(function(require, exports, module) {

    var Helper = require("../helper");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    Helper.registerPlugin("cloudcms-link", moduleId);

});
