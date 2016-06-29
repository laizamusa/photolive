var React = require('react');   

var Camera = React.createClass({

    getInitialState: function() {
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

    render: function() {
        return (
            // <div id = "camera">
            //     <div className = "content-page"/>
            //     <video id = "v" />
            //     <canvas id = "c"/>
            React.createElement('div', {id: 'camera'},
                React.createElement('div', {className: 'content-page'},
                    React.createElement('video', {id: 'v', width: 960, height: 720}),
                    React.createElement('canvas', {id: 'c', width: 960, height: 720, style: {display: 'block'}}),
                    React.createElement('canvas', {id: 'mainframe', width: 960, height: 720, style: {display: 'block'}, src:'../../image/sample.png'})
                ),
                <div><Button/></div>
            )
        )
    }
    

});

var Button = React.createClass({

    render: function() {
        var label = 'Button';
        return (
            React.createElement('div', {className: 'footer-btn'},
                <button class="button one-button" onClick={this.handleThatEvent}>Snap</button>
            )
        )

    },
    handleThatEvent:function (e) {
        var MainFrame = '../../image/sample.png';
        var v = document.querySelector('#v');
        var canvas = document.querySelector('#c');
        var w = canvas.clientWidth;
        var h = canvas.clientHeight;
        var context = canvas.getContext('2d');

        // context.drawImage(v, 0, 0, w, h);
        // var head = /^data:image\/(png|jpeg);base64,/
        // var data = canvas.toDataURL('image/jpeg', 1.0).replace(head, '');
        //
        // var imageObj2 = new Image();
        // imageObj2.onload = function (){
        //     context.drawImage(imageObj2, 0, 0, w, h);
            // var imageObj1 = new Image();
            // imageObj1.onload = function (){
            //     // imageObj1.style.objectFit = "cover";
            //     context.drawImage(imageObj1, 0, 0, w, h);
            // };
            // imageObj1.src = canvas.toDataURL();
        // };
        // console.log(location.origin+"/photolive/image/sample.png");
        // imageObj2.src = MainFrame;
    }

});

module.exports = Camera;