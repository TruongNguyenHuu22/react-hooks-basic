import useMagicColor from "../../../hooks/useMagicColor";
import "./styles.scss";

const MagicColorFeature = () => {
    const { color } = useMagicColor();

    return (
        <div className="section-box">
            <h3>custom hook - Magic Color Box</h3>
            <h5>
                Description: The color box will be changed random color after 1
                second
            </h5>
            <h6>Technique: Use customHook to return color</h6>
            <div
                className="magic-color-box"
                style={{ backgroundColor: color }}
            ></div>
        </div>
    );
};

export default MagicColorFeature;
