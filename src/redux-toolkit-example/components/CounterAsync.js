// src/redux-toolkit-example/components/Counter.js
import React, { useState, useEffect } from "react"; // useEffect 추가
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
  selectStatus, // status 셀렉터 추가
  selectError, // error 셀렉터 추가
  fetchInitialCountRTK, // createAsyncThunk로 만든 비동기 액션 임포트
} from "../features/counter/counterSlice";

function Counter() {
  const currentCount = useSelector(selectCount);
  const status = useSelector(selectStatus); // 비동기 작업 상태
  const error = useSelector(selectError); // 비동기 작업 에러 메시지

  const dispatch = useDispatch();
  const [amount, setAmount] = useState("2");

  // 컴포넌트 마운트 시 초기 카운트 값 비동기적으로 가져오기
  useEffect(() => {
    // 이미 로딩 중이거나 성공/실패한 상태가 아니라면 (최초 로딩 시)
    if (status === "idle") {
      dispatch(fetchInitialCountRTK());
    }
  }, [status, dispatch]); // status가 변경될 때마다 (예: 초기화 후 재시도) 또는 dispatch 함수가 변경될 때 실행

  const handleIncrementByAmount = () => {
    if (amount.trim() === "" || isNaN(Number(amount))) {
      alert("유효한 숫자를 입력해주세요.");
      return;
    }
    dispatch(incrementByAmount(amount));
  };

  let content;

  if (status === "loading") {
    content = <p>데이터 로딩 중...</p>;
  } else if (status === "succeeded") {
    content = <p>현재 값: {currentCount}</p>;
  } else if (status === "failed") {
    content = (
      <p style={{ color: "red" }}>에러: {error || "알 수 없는 오류"}</p>
    );
  } else {
    // 'idle'
    content = <p>현재 값: {currentCount} (초기 상태)</p>;
  }

  return (
    <div className="counter-container">
      <h3>Redux Toolkit 카운터 (createAsyncThunk 적용)</h3>
      {content}
      <div className="button-group">
        <button
          onClick={() => dispatch(increment())}
          disabled={status === "loading"}
        >
          1 증가
        </button>
        <button
          className="decrement"
          onClick={() => dispatch(decrement())}
          disabled={status === "loading"}
        >
          1 감소
        </button>
        <button
          className="reset"
          onClick={() => dispatch(reset())}
          disabled={status === "loading"}
        >
          카운트 초기화
        </button>
      </div>
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          aria-label="더할 값"
          disabled={status === "loading"}
        />
        <button
          onClick={handleIncrementByAmount}
          disabled={status === "loading"}
        >
          입력값 만큼 더하기
        </button>
      </div>
      <div className="button-group" style={{ marginTop: "10px" }}>
        <button
          onClick={() => dispatch(fetchInitialCountRTK())}
          disabled={status === "loading"}
        >
          초기값 다시 가져오기 (RTK)
        </button>
      </div>
    </div>
  );
}

export default Counter;
