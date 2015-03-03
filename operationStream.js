(function(exports){
    var OperationStream = function(stream){
        this._stream = new Stream(stream, this.transformOperations);
        this.read = this._stream.read;
        this.pipe = this._stream.pipe;
        this.subscribe = this._stream.subscribe;
    };


    OperationStream.prototype.transformOperations = function(data){
        console.log('boing', data);
        return data;
    };



    exports.OperationStream = OperationStream;
})(window || module.exports);
