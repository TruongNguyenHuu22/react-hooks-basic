import useMagicColor from "../../../hooks/useMagicColor";
import "./styles.scss";

const MagicColorFeature = () => {
    const { color } = useMagicColor();

    return (
        <>
            <h3>custom hook - Magic Color Box</h3>
            <div className="color-box" style={{ backgroundColor: color }}></div>
        </>
    );
};

export default MagicColorFeature;
