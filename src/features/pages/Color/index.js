import React, { useState } from "react";
import "./styles.scss";

const getRandomColor = () => {
    const colorList = ["deeppink", "green", "yellow", "black", "blue"];
    const index = Math.trunc(Math.random() * colorList.length);
    return colorList[index];
};

const ColorBox = () => {
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem("CURRENT_COLOR");
        if (initialColor) return initialColor;
        return "deeppink";
    });

    const handleChangeColor = () => {
        const newColor = getRandomColor();

        setColor(newColor);
        localStorage.setItem("CURRENT_COLOR", newColor);
    };

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleChangeColor}
        ></div>
    );
};

export default ColorBox;
