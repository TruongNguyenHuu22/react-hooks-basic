import "./App.scss";
import ClockFeature from "./features/components/Clock";
import ColorBoxFeature from "./features/components/Color";
import PostFeature from "./features/components/Post";
import TodoFeature from "./features/components/Todo";

function App() {
    return (
        <div className="app">
            <ClockFeature />
            <ColorBoxFeature />
            <TodoFeature />
            <PostFeature />
        </div>
    );
}

export default App;
