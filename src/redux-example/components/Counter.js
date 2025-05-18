import React, { useState } from "react";
// react-redux에서 제공하는 훅: useSelector는 스토어 상태 조회, useDispatch는 액션 전달
import { useSelector, useDispatch } from "react-redux";
// 액션 생성 함수들을 가져옵니다.
import { increment, decrement, addByAmount, reset } from "../redux/action";

function Counter() {
  // useSelector 훅을 사용하여 스토어의 상태 값에 접근합니다.
  // state는 스토어의 전체 상태 객체를 의미합니다.
  // 여기서는 counterReducer가 루트 리듀서이므로 state 자체가 { count: 0 } 형태입니다.
  const currentCount = useSelector((state) => state.count);

  // useDispatch 훅을 사용하여 dispatch 함수를 가져옵니다.
  // dispatch 함수는 액션 객체를 스토어로 전달하는 역할을 합니다.
  const dispatch = useDispatch();

  // 컴포넌트 내부에서 사용할 로컬 상태 (더할 값 입력용)
  const [amount, setAmount] = useState("2"); // 초기값을 문자열로 설정하여 input과 타입 일치

  const handleAddByAmount = () => {
    // 입력값이 비어있거나 숫자가 아니면 dispatch하지 않도록 처리 (간단한 유효성 검사)
    if (amount.trim() === "" || isNaN(Number(amount))) {
      alert("유효한 숫자를 입력해주세요.");
      return;
    }
    dispatch(addByAmount(amount));
  };

  return (
    <div className="counter-container">
      <h3>순수 Redux 카운터</h3>
      <p>현재 값: {currentCount}</p>
      <div className="button-group">
        <button onClick={() => dispatch(increment())}>1 증가</button>
        <button className="decrement" onClick={() => dispatch(decrement())}>
          1 감소
        </button>
        <button className="reset" onClick={() => dispatch(reset())}>
          초기화
        </button>
      </div>
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="더할 값"
        />
        <button onClick={handleAddByAmount}>입력값 만큼 더하기</button>
      </div>
    </div>
  );
}

export default Counter;
