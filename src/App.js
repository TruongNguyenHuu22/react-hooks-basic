import "./App.scss";
import ColorBox from "./features/components/Color";
import TodoFeature from "./features/components/TodoList";

function App() {
    return (
        <div className="app">
            <ColorBox />
            <TodoFeature />
        </div>
    );
}

export default App;
