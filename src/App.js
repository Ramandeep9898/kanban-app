import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";
import { SideBar } from "./components/Sidebar/SideBar";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-container">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
