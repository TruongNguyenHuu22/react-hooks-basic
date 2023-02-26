import "./App.scss";
import ClockFeature from "./features/components/Clock";
import ColorBoxFeature from "./features/components/Color";
import Counter from "./features/components/Counter";
import MagicColorFeature from "./features/components/MagicColor";
import PostFeature from "./features/components/Post";
import TodoFeature from "./features/components/Todo";

function App() {
    return (
        <div className="app">
            <ClockFeature />
            <ColorBoxFeature />
            <MagicColorFeature />
            <TodoFeature />
            <PostFeature />
            <Counter />
        </div>
    );
}

export default App;
