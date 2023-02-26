import useClock from "../../../../hooks/useClock";

function ClockElement() {
    const { timeString } = useClock();

    return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default ClockElement;
