/**
 * Created by Lukas on 18.03.2015.
 */
var React = require('react');

var MainMenu = React.createClass({

    render: function() {
        return (
            <nav className="main-nav">
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Prizemi
                </div>
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Vstupni hala
                </div>
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Jidelna
                </div>
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Kuchyne
                </div>
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Obývací pokoj
                </div>
                <div className="nav-item">
                    <div className="nav-item-logo"></div>
                    Ložnice
                </div>
            </nav>
        );
    }
});

module.exports = MainMenu;