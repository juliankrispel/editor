(function(exports){
    var Stream = function(srcStream, transform){
        console.log('trans', transform);
        if(typeof srcStream === 'function'){
            srcStream(this);
        }else if(srcStream !== undefined){
            srcStream.pipe(this);
        } 
        this._subscribers = [];
        this._transform = transform;
    };

    Stream.prototype.read = function(data){
        console.log('transform', this._transform, data);
        if(this._transform !== undefined){
            this.write(this._transform.apply(this, data));
        }else{
            this.write(data);
        }
    };

    Stream.prototype.write = function(data){
        if(this._destStream !== undefined){
            this._subscribers.forEach(function(fn){
                fn(data);
            });
            this._destStream.read(data, t);
        }
    };

    Stream.prototype.pipe = function(destStream){
        console.log('pipe', destStream);
        if(typeof destStream === 'function'){
            this._destStream = new Stream(this, destStream);
        }else{
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
