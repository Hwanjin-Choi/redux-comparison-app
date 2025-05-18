redux-comparison-app/
├── public/
├── src/
│ ├── App.css // 기본 App 스타일 (수정)
│ ├── App.js // 메인 앱 (예제 선택 기능 추가)
│ ├── index.js // React 앱 진입점
│ │
│ ├── redux-example/ // 순수 Redux 예제 폴더
│ │ ├── components/
│ │ │ └── Counter.js // 순수 Redux용 카운터 컴포넌트
│ │ ├── redux/
│ │ │ ├── actions.js // 액션 타입 및 액션 생성자
│ │ │ ├── reducers.js // 리듀서
│ │ │ └── store.js // Redux 스토어 설정
│ │ └── ReduxApp.js // 순수 Redux 예제 진입점 (Provider 설정)
│ │
│ └── redux-toolkit-example/ // Redux Toolkit 예제 폴더
│ ├── components/
│ │ └── Counter.js // RTK용 카운터 컴포넌트
│ ├── features/
│ │ └── counter/
│ │ └── counterSlice.js // 카운터 슬라이스 (액션, 리듀서 통합)
│ ├── app/
│ │ └── store.js // RTK 스토어 설정
│ └── ToolkitApp.js // RTK 예제 진입점 (Provider 설정)
│
└── package.json
