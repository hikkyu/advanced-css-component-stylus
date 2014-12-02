var plugin = function(){
    return function(style){
        style.define('eval', function (str) {
            return new style.nodes.String(eval(str))
        });
    };
};
module.exports = plugin;