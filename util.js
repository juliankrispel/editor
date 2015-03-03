(function(){
    window.inherit = function(parent, child){
        var obj = parent;
        for(var key in child){
            obj[key] = child[key];
        }
        return obj;
    };
})();
