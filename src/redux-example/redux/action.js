export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_BY_AMOUNT = "ADD_BY_AMOUNT";
export const RESET = "RESET";

// 액션 생성 함수: 액션 객체를 반환하는 함수입니다.
// 컴포넌트에서는 이 함수들을 호출하여 액션을 디스패치합니다.
export function increment() {
  // type은 필수로 지정해야 합니다.
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function addByAmount(amount) {
  // payload는 액션에 필요한 추가 데이터를 전달할 때 사용합니다.
  return {
    type: ADD_BY_AMOUNT,
    payload: amount,
  };
}

export function reset() {
  return { type: RESET };
}
