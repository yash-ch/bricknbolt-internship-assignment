import './css/App.css';
import Header from "./components/header";
import MainBody from "./components/MainBody";
import BottomList from "./components/BottomList";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainBody/>
            <BottomList/>
        </div>
    );
}

export default App;
