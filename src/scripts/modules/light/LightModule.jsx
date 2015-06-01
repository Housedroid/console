/**
 * Created by Lukas on 18.03.2015.
 */
var React = require('react');

var LightModule = React.createClass({
    getScaleClasses: function(scale) {
        var isLevelOn = (this.state.intensity / 25) >= scale;
        return isLevelOn ? "on" : "off";
    },

    dimmLight: function(e) {
        e.preventDefault();
        //this.setState({ intensity: e.target.dataset.level*25, preventTurningOff: true });
        var touchedLevel = e.changedTouches[0].target;
        if (touchedLevel) {
            console.log(touchedLevel.dataset.level);
        }
        console.log(e.targetTouches);
    },

    switchLight: function() {
        if (!this.state.preventTurningOff) {
            var intensity = this.state.intensity ? 0 : 100;
            this.setState({intensity: intensity});
        }
        this.setState({preventTurningOff: false});
    },

    getInitialState: function() {
        return {
            intensity: 0
        };
    },

    render: function() {
        return (
            <div className="module light">
                <svg version="1.1" id="Layer_1" x="0px" y="0px"
                    viewBox="0 -12 512 536" enable-background="new 0 0 512 512" className="primary-fill" onClick={this.switchLight} onTouchEnd={this.switchLight}>
                    <path className={this.getScaleClasses(4)}
                        d="M160,106.75c3.344,0,6.75-0.563,10.125-1.688l128-42.656
                        c16.75-5.594,25.813-23.719,20.219-40.469S294.719-4,277.875,1.688l-128,42.688c-16.75,5.563-25.813,23.688-20.25,40.469
                        C134.125,98.25,146.594,106.75,160,106.75z"
                        data-level="4"
                    />

                    <path className={this.getScaleClasses(3)} d="M129.625,180.813c-5.563-16.781,3.5-34.906,20.25-40.5l192-64c16.875-5.688,34.906,3.5,40.469,20.25
                    c5.594,16.75-3.469,34.875-20.219,40.469l-192,64c-3.375,1.125-6.781,1.656-10.125,1.656
                    C146.594,202.688,134.125,194.188,129.625,180.813z"
                        data-level="3"
                    />

                    <path className={this.getScaleClasses(2)} d="M192.281,336h63.094c0.625-3.75,0.813-7.625,0-11.563
                    c-3.594-18.094-11.375-34.563-22.313-48.375l129.063-43.031c16.75-5.594,25.813-23.719,20.219-40.469
                    c-5.563-16.75-23.594-25.875-40.469-20.25l-192,64c-13.75,4.594-22.719,17.875-21.813,32.375
                    c0.906,14.469,11.438,26.531,25.688,29.375C173.125,301.906,188.063,316.781,192.281,336z"
                        data-level="2"
                    />

                    <path className={this.getScaleClasses(1)} d="M352,262
                    c-50.875,0-92.25,39.906-95.375,90H192c-17.688,0-32,14.313-32,32v32c0,17.688,14.313,32,32,32v32c0,17.688,14.313,32,32,32h64
                    c17.688,0,32-14.313,32-32v-32c17.688,0,32-14.313,32-32v-32c0-17.281-13.719-31.125-30.844-31.75
                    C323.969,337.438,336.375,326,352,326c17.688,0,32-14.313,32-32S369.688,262,352,262z"
                        data-level="1"
                    />
                </svg>
            </div>
        );
    }
});

module.exports = LightModule;