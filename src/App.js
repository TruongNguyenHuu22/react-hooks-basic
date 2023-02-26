import "./App.scss";
import ColorBox from "./features/components/Color";
import PostFeature from "./features/components/Post";
import TodoFeature from "./features/components/Todo";

function App() {
    return (
        <div className="app">
            <ColorBox />
            <TodoFeature />
            <PostFeature />
        </div>
    );
}

export default App;
