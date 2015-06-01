/**
 * Created by Lukas on 18.03.2015.
 */
var React = require('react');

var ThermometerModule = React.createClass({

    setNewLevel: function(e) {
        this.setState({ targetLevel: e.target.dataset.level });
    },

    setTargetLevel: function(e) {
        var targetLevel = e.target.dataset.level;

        this.setState({
            targetLevel: targetLevel,
            mode: this.state.currentLevel > targetLevel ? "cooling" : "heating"
        });
    },

    getScaleClasses: function() {
        return "thermometer-scale" + " " + this.state.mode;
    },

    getScaleLevelClasses: function(level) {
        var activeClasses = "";
        if (level <= this.state.currentLevel)
            activeClasses += "currentLevel";

        if (this.state.currentLevel != this.state.targetLevel) {
            if (level <= this.state.targetLevel && level > this.state.currentLevel)
                activeClasses += " targetLevel";

            if (level >= this.state.targetLevel && level <= this.state.currentLevel)
                activeClasses += " targetLevel";
        }

        return activeClasses;
    },

    getInitialState: function() {
        return {
            currentLevel: 4,
            targetLevel: 4,
            newLevel: null,
            mode: "cooling"
        };
    },
/*
    componentDidMount: function() {
        //ThreadStore.addChangeListener(this._onChange);
        //UnreadThreadStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        //ThreadStore.removeChangeListener(this._onChange);
       // UnreadThreadStore.removeChangeListener(this._onChange);
    },
*/
    render: function() {
        return (
            <div className="module">
            <svg
                id="svg3336"
                viewBox="0 0 420 512"
                version="1.1">
                <defs
                    id="defs3346" />
                <g
                    id="g3338" />
                <path
                    id="path3340"
                    d="m 293.479,382.5675 c 14.1,11.284 23.695,28.764 23.695,48.496 0,33.843 -27.648,60.897 -61.471,60.897 -33.28,0 -60.877,-27.065 -60.877,-60.897 0,-19.743 9.021,-37.222 23.675,-48.496 l 0,-324.752 c 0,-20.859 16.906,-37.776 37.212,-37.776 l 0,0 c 20.869,0 37.765,16.916 37.765,37.776 l 0,324.752 z m -26.481,28.2 0,-114.442 0,-13.005 0,-29.297 0,-12.4 0,-25.354 0,-12.441 0,-26.481 0,-12.4 0,-23.122 0,-12.421 0,-29.87 c 0,-6.195 -5.09,-11.284 -11.294,-11.284 l 0,0 c -5.632,0 -10.711,5.079 -10.711,11.284 0,0 -0.004,19.92067 0,29.881 0.002,4.14033 0.008,8.28067 0.01,12.421 0.003,7.70733 0,23.122 0,23.122 l 0,12.4 0,26.481 0,12.441 0,67.06 0,13.005 0,114.442 c -7.895,3.942 -12.974,11.817 -12.974,21.442 0,12.964 10.742,23.664 23.685,23.664 13.537,0 24.238,-10.701 24.238,-23.664 -0.01,-9.636 -5.642,-17.521 -12.954,-21.463 z" />
                <g
                    id="g4152">
                    <rect
                        id="rect3377-1"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="123.22363" />
                    <rect
                        id="rect3377-1-5"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="186.10286" />
                    <rect
                        id="rect3377-1-5-3"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="154.66328" />
                    <rect
                        id="rect3377-1-5-31"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="217.5425" />
                    <rect
                        id="rect3377-1-5-5"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="248.9821" />
                    <rect
                        id="rect3377-1-5-2"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="280.42172" />
                    <rect
                        id="rect3377-1-5-7"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="311.86133" />
                    <rect
                        id="rect3377-1-5-32"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="343.30096" />
                    <rect
                        id="rect3377-1-5-1"
                        width="63.612366"
                        height="6.0597882"
                        x="224.19382"
                        y="374.74057" />
                </g>
                <g className={this.getScaleClasses()}>
                    <path
                        className={this.getScaleLevelClasses(9)}
                        id="path4179"
                        d="m 267.0025,123.23045 0,-23.9325 c 0,-6.19499 -5.09,-11.28399 -11.294,-11.28399 l 0,0 c -5.632,0 -10.711,5.079 -10.711,11.28399 l 0,23.9435 z"
                        data-level="9"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <path
                        className={this.getScaleLevelClasses(0)}
                        id="path4179-1"
                        d="m 267.00311,410.7675 0,-30.03299 -21.99821,-0.014 0,30.067 c -7.89616,3.942 -12.9759,11.817 -12.9759,21.442 0,12.964 10.74357,23.664 23.68846,23.664 13.53898,0 24.24154,-10.701 24.24154,-23.664 -0.01,-9.636 -5.64282,-17.521 -12.95589,-21.463 z"
                        data-level="0"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(1)}
                        y="349.36545"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196"
                        data-level="1"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(2)}
                        y="317.92438"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-3"
                        data-level="2"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(3)}
                        y="286.48334"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-0"
                        data-level="3"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(4)}
                        y="255.04227"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-09"
                        data-level="4"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(5)}
                        y="223.60121"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-6"
                        data-level="5"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(6)}
                        y="192.16014"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-4"
                        data-level="6"
                        onClick={this.setTargetLevel}/>
                    <rect
                        className={this.getScaleLevelClasses(7)}
                        y="160.7191"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-35"
                        data-level="7"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                    <rect
                        className={this.getScaleLevelClasses(8)}
                        y="129.27803"
                        x="245.00591"
                        height="25.372702"
                        width="21.988201"
                        id="rect4196-2"
                        data-level="8"
                        onClick={this.setTargetLevel}
                        onTouchEnd={this.setTargetLevel}
                    />
                </g>
            </svg>
            </div>
        );
    }
});

module.exports = ThermometerModule;