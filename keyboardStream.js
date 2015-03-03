(function(){
    var KeyboardStream = function(element){
        this.keys = [];
        this.keysDown = [];
        this.keysUp = [];

        this._stream = new Stream();
        this.pipe = this._stream.pipe;
        this.subscribe = this._stream.subscribe;

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
        this._stream.read(String.fromCharCode(e.charCode));
    };

    window.KeyboardStream = KeyboardStream;

    var keyEvents = {

    };
})();
