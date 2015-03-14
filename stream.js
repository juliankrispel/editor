(function(exports){
    var Stream = function(srcStream, transform, name){
        this.name = name;
        this._subscribers = [];
        this._transform = transform;

        if(typeof srcStream === 'function'){
            srcStream(this);
        }else if(srcStream !== undefined){
            srcStream.pipe(this);
        } 
    };

    Stream.prototype.read = function(data){
        if(this._transform !== undefined){
            this.write(this._transform.call(this, data));
        }else{
            this.write(data);
        }
    };

    Stream.prototype.write = function(data){
        if(this._destStream !== undefined){
            this._subscribers.forEach(function(fn){
                fn(data);
            });
            this._destStream.read(data);
        }
    };

    Stream.prototype.pipe = function(destStream){
        if(typeof destStream === 'function'){
            this._destStream = new Stream(this, destStream);
        }else{
            console.log('pipe', this.name, destStream);
            this._destStream = destStream;
        }
    };

    Stream.prototype.subscribe = function(fn){
        this._subscribers.push(fn);
    };

    Stream.prototype.unsubscribe = function(fn){
        var index = this._subscribers.indexOf(fn);
        if(index > -1){
            this._subscribers.splice(index, 1);
        }
    };

    exports.Stream = Stream;
})(window || module.exports);
