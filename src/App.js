import React, { useState } from "react";
import "./App.css";
import ReduxApp from "./redux-example/ReduxApp";
import ToolkitApp from "./redux-toolkit-example/ToolkitApp";

function App() {
  const [view, setView] = useState("redux"); // 'redux' 또는 'toolkit'

  return (
    <div className="App">
      <header>
        <h1>Redux vs Redux Toolkit 비교</h1>
        <div className="navigation-buttons">
          <button
            onClick={() => setView("redux")}
            className={view === "redux" ? "active" : ""}
          >
            순수 Redux 예제 보기
          </button>
          <button
            onClick={() => setView("toolkit")}
            className={view === "toolkit" ? "active" : ""}
          >
            Redux Toolkit 예제 보기
          </button>
        </div>
      </header>

      <div className="example-container">
        {view === "redux" ? <ReduxApp /> : <ToolkitApp />}
      </div>
    </div>
  );
}
export default App;
