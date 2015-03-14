(function(){
    var KeyboardStream = function(element){
        this.keys = [];
        this.keysDown = [];
        this.keysUp = [];

        this._stream = new Stream();
        this._stream.name = 'KeyboardStream';
        this.pipe = this._stream.pipe.bind(this._stream);
        this.subscribe = this._stream.subscribe.bind(this._stream);

        document.addEventListener('keyup', this.onKeyUp.bind(this));
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keypress', this.onKeyPress.bind(this));
    };

    KeyboardStream.prototype.onKeyUp = function(e){

    };

    KeyboardStream.prototype.onKeyDown = function(e){

    };

    KeyboardStream.prototype.onKeyPress = function(e){
        e.preventDefault();
        console.log('hey', this._stream);
        this._stream.read.apply(this._stream, [String.fromCharCode(e.charCode)]);
    };

    window.KeyboardStream = KeyboardStream;

    var keyEvents = {

    };
})();
