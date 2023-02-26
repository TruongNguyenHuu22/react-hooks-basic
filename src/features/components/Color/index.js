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
        <>
            <h3>UseState - Color Box</h3>
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={handleChangeColor}
            ></div>
        </>
    );
};

export default ColorBoxFeature;
