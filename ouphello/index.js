define(function(require, exports, module) {
    var Helper = require("./ouphello/helper.js");
    
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin("ouphello", moduleId);
});
