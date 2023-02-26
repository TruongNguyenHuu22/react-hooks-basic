import React, { useState } from "react";
import ClockElement from "./ClockElement";

ClockFeature.propTypes = {};

function ClockFeature() {
    const [showClock, setShowClock] = useState(true);

    return (
        <div className="section-box ">
            <h3>useEffect cleanup - ClockElement</h3>
            <h5>Description: Click Hide clock button to hide clock</h5>
            <h6>
                Technique: Use useEffect hook with clean up to clear Interval
                after unmounting
            </h6>
            {showClock && <ClockElement />}
            <button onClick={() => setShowClock(false)}>Hide clock</button>
        </div>
    );
}

export default ClockFeature;
