/**
 * Created by Lukas on 18.03.2015.
 */
var React = require('react');
var MainMenu = require('./MainMenu');
var Modules = require('./Modules');

var HousedroidConsole = React.createClass({

    render: function() {
        return (
            <div>
                <MainMenu />
                <Modules />
            </div>
        );
    }
});

module.exports = HousedroidConsole;