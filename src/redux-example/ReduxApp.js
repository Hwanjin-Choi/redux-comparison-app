import React from "react";
import { Provider } from "react-redux"; // react-redux에서 Provider를 가져옵니다.
import store from "./redux/store"; // 위에서 생성한 Redux 스토어를 가져옵니다.
import Counter from "./components/Counter"; // 카운터 UI 컴포넌트

function ReduxApp() {
  return (
    // Provider 컴포넌트로 감싸고, store prop으로 생성한 스토어를 전달합니다.
    // 이렇게 하면 Counter 컴포넌트 및 그 하위 컴포넌트들이 스토어에 접근할 수 있게 됩니다.
    <Provider store={store}>
      <div>
        {/* <h2>순수 Redux 예제</h2> App.js에서 이미 제목을 표시하므로 주석 처리 */}
        <Counter />
      </div>
    </Provider>
  );
}

export default ReduxApp;
