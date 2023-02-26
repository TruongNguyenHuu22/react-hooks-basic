import React, { useState } from "react";
import ClockElement from "./ClockElement";

ClockFeature.propTypes = {};

function ClockFeature() {
    const [showClock, setShowClock] = useState(true);

    return (
        <div>
            <h3>useEffect cleanup - ClockElement</h3>
            {showClock && <ClockElement />}
            <button onClick={() => setShowClock(false)}>Hide clock</button>
        </div>
    );
}

export default ClockFeature;
