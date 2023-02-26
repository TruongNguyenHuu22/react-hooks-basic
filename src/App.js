import "./App.scss";
import ColorBox from "./features/components/Color";
import TodoFeature from "./features/components/Todo";

function App() {
    return (
        <div className="app">
            <ColorBox />
            <TodoFeature />
        </div>
    );
}

export default App;
