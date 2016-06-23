// var React = require('react');
import React from "react";
import Footer from "./Footer";
import Camera from "./Camera";
import Header from "./Header";

class Layout extends React.Component{
// var Layout = React.createClass( {
    render() {
        return (

            <div>
            <Header />
            <Camera />
            <Footer />
            </div>

    )
    }

}

module.exports = Layout;

// ReactDOM.render(
//     React.createElement(Layout, null),
//     document.getElementById('root')
// );
