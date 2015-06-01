/**
 * Created by Lukas on 18.03.2015.
 */
var React = require("react");
var LightModule = require("../modules/light/LightModule");
var ThermometerModule = require("../modules/thermometer/ThermometerModule");

var Modules = React.createClass({
    render: function() {
        return (
            <section className="modules">
                <LightModule />
                <LightModule />
                <ThermometerModule />
            </section>
        );
    }
});

module.exports = Modules;