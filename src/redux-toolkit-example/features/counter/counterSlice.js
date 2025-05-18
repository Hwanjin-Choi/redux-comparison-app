// src/redux-toolkit-example/features/counter/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. createAsyncThunk를 사용하여 비동기 작업을 정의합니다.
// 첫 번째 인자: 액션 타입의 접두사 (prefix). 이 문자열을 기반으로 pending/fulfilled/rejected 액션 타입이 생성됩니다.
//   (예: 'counterToolkit/fetchInitialCountRTK/pending')
// 두 번째 인자: 비동기 로직을 수행하는 "payload creator" 함수. Promise를 반환해야 합니다.
//   - 이 함수는 선택적으로 첫 번째 인자로 `arg` (디스패치 시 전달하는 값),
//     두 번째 인자로 `thunkAPI` 객체 ({ dispatch, getState, rejectWithValue 등 })를 받을 수 있습니다.
export const fetchInitialCountRTK = createAsyncThunk(
  "counterToolkit/fetchInitialCountRTK", // 액션 타입 접두사
  async (arg, thunkAPI) => {
    // thunkAPI.getState() // 현재 스토어 상태 접근 가능
    // thunkAPI.dispatch(...) // 다른 액션 디스패치 가능
    try {
      // 가상 API 호출 (실제로는 fetch, axios 등을 사용)
      const response = await new Promise(
        (resolve, reject) =>
          setTimeout(() => {
            const shouldSucceed = Math.random() > 0.1; // 90% 성공 확률
            if (shouldSucceed) {
              const randomNumber = Math.floor(Math.random() * 200) + 50; // 50~249 사이 랜덤 숫자
              console.log("(RTK) 서버에서 받은 초기 카운트:", randomNumber);
              resolve({ initialCount: randomNumber }); // 성공 시 resolve하는 값이 fulfilled 액션의 payload가 됩니다.
            } else {
              reject(new Error("랜덤 서버 오류 발생!")); // 실패 시 reject
            }
          }, 1500) // 1.5초 딜레이
      );
      return response.initialCount; // Promise가 성공적으로 resolve된 값 (fulfilled 액션의 payload)
    } catch (error) {
      // 에러 발생 시, thunkAPI.rejectWithValue를 사용하여 커스텀 에러 페이로드를 전달할 수 있습니다.
      // 이렇게 하면 rejected 액션의 payload로 error.message가 아닌, 우리가 지정한 값이 전달됩니다.
      return thunkAPI.rejectWithValue(error.message || "알 수 없는 오류");
    }
  }
);

// 초기 상태 정의 (비동기 로직을 위한 status와 error 필드 추가)
const initialState = {
  value: 0,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // 에러 메시지 저장
};

export const counterSlice = createSlice({
  name: "counterToolkit",
  initialState,
  // 동기적인 액션과 리듀서는 여기에 정의
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
    reset: (state) => {
      state.value = 0; // value만 초기화. status나 error는 그대로 둘 수 있음.
      // 혹은 initialState 전체로 리셋할 수도 있음: return initialState;
    },
  },
  // 비동기 액션 (createAsyncThunk로 생성된 액션) 및 외부 액션에 대한 리듀서는 extraReducers에 정의
  // builder 콜백 표기법을 사용하는 것이 권장됩니다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialCountRTK.pending, (state) => {
        // fetchInitialCountRTK 액션이 'pending' 상태일 때 (요청 시작 시)
        state.status = "loading";
        state.error = null; // 로딩 시작 시 에러 메시지 초기화
      })
      .addCase(fetchInitialCountRTK.fulfilled, (state, action) => {
        // fetchInitialCountRTK 액션이 'fulfilled' 상태일 때 (요청 성공 시)
        state.status = "succeeded";
        state.value = action.payload; // action.payload는 fetchInitialCountRTK의 payload creator가 반환한 값
      })
      .addCase(fetchInitialCountRTK.rejected, (state, action) => {
        // fetchInitialCountRTK 액션이 'rejected' 상태일 때 (요청 실패 시)
        state.status = "failed";
        state.error = action.payload || action.error.message; // rejectWithValue를 사용했다면 action.payload, 아니면 action.error.message
      });
  },
});

// 동기 액션 생성자들
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// 셀렉터 함수
export const selectCount = (state) => state.counterToolkit.value;
export const selectStatus = (state) => state.counterToolkit.status;
export const selectError = (state) => state.counterToolkit.error;

export default counterSlice.reducer;
