import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store"; // RTK 방식으로 생성한 스토어를 가져옵니다.
import Counter from "./components/Counter"; // 카운터 UI 컴포넌트

function ToolkitApp() {
  return (
    // Provider 컴포넌트로 감싸고, store prop으로 생성한 RTK 스토어를 전달합니다.
    <Provider store={store}>
      <div>
        {/* <h2>Redux Toolkit 예제</h2> App.js에서 이미 제목을 표시하므로 주석 처리 */}
        <Counter />
      </div>
    </Provider>
  );
}

export default ToolkitApp;
