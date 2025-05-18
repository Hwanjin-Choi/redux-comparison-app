import { INCREMENT, DECREMENT, ADD_BY_AMOUNT, RESET } from "./action";

// 초기 상태: 애플리케이션이 처음 로드될 때의 상태 값입니다.
const initialState = {
  count: 0,
  // 다른 상태 값들이 있다면 여기에 추가할 수 있습니다.
  // appName: "My Vanilla Redux Counter"
};

// 리듀서 함수: 현재 상태(state)와 액션(action) 객체를 받아서
// 새로운 상태를 반환하는 순수 함수입니다.
// 중요: 절대로 기존 state를 직접 수정하면 안 되고, 항상 새로운 객체를 반환해야 합니다. (불변성 유지)
export function counterReducer(state = initialState, action) {
  // action.type에 따라 다른 상태 변경 로직을 수행합니다.
  switch (action.type) {
    case INCREMENT:
      // 기존 상태를 복사(...state)하고, 변경하려는 값만 새로 할당합니다.
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD_BY_AMOUNT:
      // action.payload로 전달된 값을 사용합니다.
      // 입력값이 문자열일 수 있으므로 Number()로 변환해줍니다.
      return { ...state, count: state.count + Number(action.payload) };
    case RESET:
      return { ...state, count: 0 };
    default:
      // 해당 액션 타입이 없을 경우 기존 상태를 그대로 반환합니다.
      return state;
  }
}
// 만약 여러 개의 리듀서가 있다면, redux의 combineReducers 유틸리티를 사용하여 하나로 합칩니다.
// 예시:
// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer, // 다른 리듀서
// });
// export default rootReducer;

export default counterReducer;
