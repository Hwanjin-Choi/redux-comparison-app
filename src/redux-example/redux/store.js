import { createStore } from "redux"; // Redux 라이브러리에서 createStore 함수를 가져옵니다.
import counterReducer from "./reducer"; // 위에서 정의한 리듀서를 가져옵니다.

// 스토어 생성: createStore 함수에 리듀서를 인자로 전달하여 스토어를 만듭니다.
// 애플리케이션 전체에서 단 하나의 스토어만 사용합니다.
const store = createStore(
  counterReducer, // 루트 리듀서를 전달합니다.
  // Redux DevTools Extension을 사용하기 위한 설정 (선택 사항이지만 매우 유용합니다)
  // 브라우저에 Redux DevTools 확장 프로그램이 설치되어 있어야 합니다.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
