var React = require('react');

var Camera = React.createClass({

    getInitialState: function() {
        // var canvas = document.querySelector('#c');
        // var gCtx = canvas.getContext('2d');
        
        return {
            windowWidth: window.innerWidth
        };
    },

    handleResize: function(e) {
        this.setState({windowWidth: window.innerWidth});
    },

    componentDidMount: function(e) {
        window.addEventListener('resize', this.handleResize);
        this.initialize_cam();
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    
    /* other */
    initialize_cam: function() {
        navigator.getMedia = ( navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia );
                            
        navigator.getMedia ({
            video: true,
            audio: false
        },
        this.callbackStreamIsReady, 
        function(err) {
            console.log("The following error occured: " + err);
        });
    },
    
    callbackStreamIsReady: function(stream) {
        v.src = URL.createObjectURL(stream);
        v.play();
        window.requestAnimationFrame(this.draw);        
    },
    
    // draw: function() {
    //     var w = canvas.clientWidth;
    //     var h = canvas.clientHeight;
    //     backBuffer.width = w;
    //     backBuffer.height = h;
    //     var context = canvas.getContext('2d');
    //     context.drawImage(v, 0, 0, 640, 480);
    //     // bCtx.drawImage(v, 0, 0, w, h);
    //     // pixelOperationFunction(w,h);
    //     window.requestAnimationFrame(draw);
    //
    // },

    render: function() {
        return (
            // <div id = "camera">
            //     <div className = "content-page"/>
            //     <video id = "v" />
            //     <canvas id = "c"/>
            React.createElement('div', {id: 'camera'},
                React.createElement('div', {className: 'content-page'},
                    React.createElement('video', {id: 'v', width: 640, height: 480}),
                    React.createElement('canvas', {id: 'c', width: 640, height: 480, style: {display: 'none'}})
                ),
                <div><Button/></div>
            )
        )
    }
    

});

var Button = React.createClass({

    render: function() {
        // var context = canvas.getContext('2d');
        var label = 'Button';
        // alert('hello');
        return (
            React.createElement('div', {className: 'footer-btn'},
                // React.createElement('button', {className: 'button one-button', onclick:'alert("hello")'}, label)
                <button class="button one-button" onClick={this.handleThatEvent}>Snap</button>
            )
        )

    },
    handleThatEvent:function (e) {
        var v = document.querySelector('#v');
        var canvas = document.querySelector('#c');
        var w = canvas.clientWidth;
        var h = canvas.clientHeight;
        var context = canvas.getContext('2d');
        context.drawImage(v, 0, 0, 640, 480);

        var head = /^data:image\/(png|jpeg);base64,/
        var data = canvas.toDataURL('image/jpeg', 1.0).replace(head, '');

        $.ajax
        ({
            url: dest_url,
            type: 'post',
            cache: false,
            success: function()
            {
                loadPage4();
            }

        });

    }

});

module.exports = Camera;