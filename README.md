# Redux vs Redux Toolkit 비교 학습 프로젝트

## 📖 프로젝트 목적

본 프로젝트는 팀원들이 Redux와 Redux Toolkit(RTK)의 개념을 이해하고, 두 방식의 차이점을 실제 코드를 통해 비교하며 학습할 수 있도록 돕기 위해 제작되었습니다.

**주요 목표:**

- Redux의 핵심 개념(Store, Action, Reducer, Dispatch)과 필요성을 이해합니다.
- 전통적인 방식의 Redux (Vanilla Redux) 코드 작성법을 익힙니다.
- Redux Toolkit이 기존 Redux의 어떤 불편함을 개선하고, 어떻게 더 효율적인 상태 관리를 지원하는지 파악합니다.
- `redux-thunk`를 사용한 비동기 처리 방식과 RTK의 `createAsyncThunk`를 사용한 비동기 처리 방식을 비교하며 학습합니다.
- 실제 작동하는 예제를 통해 각 코드의 구조, 보일러플레이트 양, 개발 편의성 등을 직접 비교 체험합니다.

## ✨ 주요 기능 및 학습 내용

본 프로젝트는 간단한 "카운터" 예제를 두 가지 방식으로 구현하여 다음 내용을 학습할 수 있도록 구성되어 있습니다.

1.  **UI를 통한 예제 전환:**

    - 화면 상단의 버튼을 통해 "순수 Redux 예제"와 "Redux Toolkit 예제"를 쉽게 전환하며 비교할 수 있습니다.

2.  **순수 Redux (Vanilla Redux) 예제:**

    - **상태 관리:** 숫자 카운터 (증가, 감소, 입력값만큼 더하기, 초기화)
    - **Redux 구성:**
      - `actions.js`: 액션 타입 정의 및 액션 생성자 함수
      - `reducers.js`: 초기 상태 정의 및 리듀서 함수 (상태 변경 로직)
      - `store.js`: `createStore`를 사용한 스토어 생성
    - **비동기 처리:**
      - `redux-thunk` 미들웨어 적용
      - Thunk 함수를 사용하여 가상의 서버로부터 초기 카운트 값을 비동기적으로 가져오는 기능

3.  **Redux Toolkit (RTK) 예제:**
    - **상태 관리:** 동일한 숫자 카운터 기능
    - **RTK 구성:**
      - `counterSlice.js`: `createSlice`를 사용하여 액션과 리듀서를 한 번에 정의 (보일러플레이트 대폭 감소, Immer를 통한 불변성 관리)
      - `store.js`: `configureStore`를 사용한 스토어 설정 (DevTools, Thunk 미들웨어 기본 포함)
    - **비동기 처리:**
      - `createAsyncThunk` 유틸리티를 사용하여 비동기 데이터(초기 카운트 값) 가져오기
      - `extraReducers`를 통해 비동기 액션의 상태(pending, fulfilled, rejected) 관리

## 🚀 시작하기

프로젝트를 로컬 환경에서 실행하고 학습하려면 다음 단계를 따르세요.

1.  **저장소 복제 (Clone):**

    ```bash
    git clone [https://github.com/사용자이름/저장소이름.git](https://github.com/사용자이름/저장소이름.git)
    cd redux-comparison-app
    ```

    _(위 URL은 실제 GitHub 저장소 주소로 변경해주세요.)_

2.  **의존성 설치:**

    ```bash
    npm install
    # 또는
    # yarn install
    ```

3.  **개발 서버 실행:**
    ```bash
    npm start
    # 또는
    # yarn start
    ```
    애플리케이션이 `http://localhost:3000`에서 실행됩니다. 브라우저에서 해당 주소로 접속하세요.

## 🔍 학습 포인트 및 관찰 사항

- **폴더 구조 비교:** `redux-example` 폴더와 `redux-toolkit-example` 폴더의 구조를 비교해보세요. (액션/리듀서 분리 vs. slice 통합)
- **코드의 양:** 동일한 기능을 구현하는 데 필요한 코드의 양이 얼마나 다른지 확인해보세요. (특히 액션 타입, 액션 생성자, 리듀서 부분)
- **스토어 설정:** `createStore`와 `applyMiddleware` (순수 Redux) vs. `configureStore` (RTK)의 차이점을 살펴보세요.
- **리듀서 작성 방식:** 순수 Redux에서 불변성을 지키기 위해 `...state` (스프레드 문법)를 사용하는 방식과, RTK의 `createSlice` 내에서 Immer 덕분에 상태를 직접 수정하는 것처럼 보이는 코드의 차이를 느껴보세요.
- **비동기 처리 방식:** `redux-thunk`를 직접 사용하는 방식과 RTK의 `createAsyncThunk`를 사용하는 방식의 코드 복잡도와 편의성을 비교해보세요. (액션 타입 자동 생성, 로딩 상태 관리 등)
- **타입스크립트 (적용 시):** 만약 타입스크립트를 함께 사용한다면, RTK가 타입 추론 및 타입 안정성 면에서 얼마나 더 편리한지 경험해볼 수 있습니다. (이 README는 JavaScript 기준이지만, RTK는 TS와 매우 잘 맞습니다.)

## 🛠️ 사용된 주요 기술

- React
- Redux
- React-Redux
- Redux Thunk
- Redux Toolkit (@reduxjs/toolkit)

---

이 README 파일이 팀원들의 Redux 학습 여정에 도움이 되기를 바랍니다!
