import React, { useState } from "react";
import { randomColor } from "../../../helpers";
import "./styles.scss";

const ColorBoxFeature = () => {
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem("CURRENT_COLOR");
        if (initialColor) return initialColor;
        return "deeppink";
    });

    const handleChangeColor = () => {
        const newColor = randomColor(color);

        setColor(newColor);
        localStorage.setItem("CURRENT_COLOR", newColor);
    };

    return (
        <div className="section-box ">
            <h3>UseState - Color Box</h3>
            <h5>Description: </h5>
            <ul>
                <li> Click color box to change random color. </li>
                <li>Even though refresh page, current color will be saved .</li>
            </ul>
            <h6>Technique: Use useState to save color state</h6>
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={handleChangeColor}
            ></div>
        </div>
    );
};

export default ColorBoxFeature;
