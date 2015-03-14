(function(exports){
    var OperationStream = function(stream){
        this._stream = new Stream(stream, this.transformOperations, 'OperationsStream');
        this.read = this._stream.read.bind(this._stream);
        this.pipe = this._stream.pipe.bind(this._stream);
        this.subscribe = this._stream.subscribe.bind(this._stream);
    };


    OperationStream.prototype.transformOperations = function(data){
        console.log('boing', data);
        return data;
    };

    exports.OperationStream = OperationStream;
})(window || module.exports);
