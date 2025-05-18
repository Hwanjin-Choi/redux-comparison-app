import { configureStore } from "@reduxjs/toolkit";
// 위에서 만든 카운터 슬라이스의 리듀서를 가져옵니다.
import counterReducerFromSlice from "../features/counter/counterSlice";

// configureStore: Redux 스토어를 생성하고 설정하는 함수입니다.
// createStore보다 더 많은 기능을 기본적으로 제공하며, 개발 경험을 향상시킵니다.
// - Redux DevTools Extension 자동 연동
// - Thunk 미들웨어 기본 포함 (비동기 로직 처리용)
// - 실수로 상태를 직접 변경하는 것을 감지하는 미들웨어 등 포함 (개발 모드에서)
export const store = configureStore({
  // reducer: 스토어의 루트 리듀서를 설정합니다.
  // 여러 슬라이스의 리듀서들을 객체 형태로 전달하면 자동으로 combineReducers를 수행합니다.
  reducer: {
    // 'counterToolkit'이라는 이름으로 counterReducerFromSlice를 등록합니다.
    // 이 이름은 컴포넌트에서 useSelector(state => state.counterToolkit.value) 처럼 상태에 접근할 때 사용됩니다.
    counterToolkit: counterReducerFromSlice,
    // 다른 슬라이스가 있다면 여기에 추가합니다.
    // user: userSlice.reducer,
    // posts: postsSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // 커스텀 미들웨어 추가 시
  // devTools: process.env.NODE_ENV !== 'production', // 프로덕션 환경에서 DevTools 비활성화
});
