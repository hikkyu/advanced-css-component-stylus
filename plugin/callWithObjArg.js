var plugin = function(){
    return function(stylus){
        var nodes = this.nodes;
        stylus.define('callWithObjArg', function (fn, arg) {
            var params = new nodes.Arguments();
            var oArg = arg.vals;

            for (var i = 0, l = fn.params.nodes.length; i < l; i++) {
                var value = fn.params.nodes[i];
                var val = value;
                if (oArg[value.name]) {
                    val = oArg[value.name].nodes[0];
                }
                params.push(new nodes.Ident(value.name, val));
            }

            return new nodes.Call(fn.name, params);
        });
    };
};
module.exports = plugin;