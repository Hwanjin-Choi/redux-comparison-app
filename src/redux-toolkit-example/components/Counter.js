import React, { useState } from "react";
// react-redux 훅 사용
import { useSelector, useDispatch } from "react-redux";
// counterSlice.js에서 export한 액션 생성 함수와 셀렉터 함수를 가져옵니다.
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount, // 셀렉터 함수 사용
} from "../features/counter/counterSlice";

function Counter() {
  // useSelector를 사용하여 스토어 상태를 가져옵니다.
  // 직접 경로를 지정하는 대신, slice 파일에 정의된 셀렉터 함수(selectCount)를 사용하는 것이 좋습니다.
  // const currentCount = useSelector(state => state.counterToolkit.value); // 직접 접근 방식
  const currentCount = useSelector(selectCount); // 셀렉터 함수 사용 방식 (권장)

  const dispatch = useDispatch();
  const [amount, setAmount] = useState("2"); // 입력값은 문자열로 관리

  const handleIncrementByAmount = () => {
    if (amount.trim() === "" || isNaN(Number(amount))) {
      alert("유효한 숫자를 입력해주세요.");
      return;
    }
    // 액션 생성 함수 incrementByAmount에 payload로 amount 값을 전달합니다.
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="counter-container">
      <h3>Redux Toolkit 카운터</h3>
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
        <button onClick={handleIncrementByAmount}>입력값 만큼 더하기</button>
      </div>
    </div>
  );
}

export default Counter;
