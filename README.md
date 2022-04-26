# wanted_pre_onboarding

[데모 페이지](https://timely-entremet-0bcb68.netlify.app)

## Toggle
![Toggle](https://user-images.githubusercontent.com/87363088/165386508-2aa04a15-cad9-4002-bf5c-b95b812cdc76.gif)

#### 설명
토글버튼은 클릭시마다 on/off 상태를 가지는 것에 중점을 두고 구현했습니다. 둘중 하나만 선택하기위해 radio 버튼을 이용해서 구현했지만, 꼭 라디오 버튼이 아니어도 React의 useState로 상태관리가 가능하기 때문에 굳이 input[type=radio]를 이용할 필요는 없어보입니다. `isBasic`를 선언하고 useState를 통해서 클릭시마다 상태값이 변화도록 설계했습니다.

#### 어려웠던 점
슬라이드 애니메이션을 구현하는데 가장 많은 시간이 할애되었습니다. css의 checked를 이용해서 css만으로 구현을 하고 싶었지만, `isBasic`상태의 변화에 따라 좌우 슬라이드 애니메이션을 구현하는데 어려움을 느껴 추가적인 div를 이용해서 basic상태일때는 translateX(0)을, detail상태일때는 translateX(100%)값을 줘서 상태에 따라 이동하도록 했습니다.

## Tab
![Tab](https://user-images.githubusercontent.com/87363088/165386521-f19ea7db-c690-48cf-b0e6-79868cf8a2c6.gif)

#### 설명
useState를 통해서  `selectedTab`상태를 관리해서 클릭시마다 상태가 변하도록 했습니다. 

#### 어려웠던 점
Toggle가 마찬가지로 슬라이드 애니메이션을 구현하는게 제일 까다로웠고, 탭 메뉴의 index(0, 1, 2..)를 받아와서 translateX(index * 100%)를 통해서 선택된 탭 메뉴의 하단 테두리가 이동하도록 구현했습니다. 

## Slider
![Slider](https://user-images.githubusercontent.com/87363088/165386548-80368a66-9750-4ec6-a5d6-1166df06f40d.gif)

#### 설명
`percentage`상태를 클릭, 드래그 하단 버튼과 바인딩을 하여 각 이벤트에 동작하도록 구현했습니다.


#### 어려웠던 점
Slider의 css를 변경하는게 제일 어려웠습니다. 이번 과제를 통해서 input[type=range]의 css값을 직접 수정해보면서 배울수 있는 좋은 기회였습니다.

## Input
![Input](https://user-images.githubusercontent.com/87363088/165386563-b5671d00-04ac-446c-bbc3-b04f61aeaa05.gif)

#### 설명
이메일의 형식 체크를 위해 정규표현식을 사용했고, 단순하게 아이디여부와 @ 포함, 그리고 도메인을 간단하게 파악하도록 `/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-z]{2,5}){1,2}$/`와 같이 정규표현식을 작성했습니다. 이메일과 이메일 검증을 따로 관리하기 보단 useReducer를 통해서 하나로 관리해서 두개의 상태가 변화에 동시에 반응하도록 설계했습니다.

#### 어려웠던 점


## Dropdown
![Dropdown](https://user-images.githubusercontent.com/87363088/165386569-644643c1-4b11-48a7-a4d9-f9c465c9e208.gif)

#### 설명
`showDropdown`변수를 통해서 dropdown의 펼쳐짐 여부를 결정하는데 중점을 뒀습니다. 또한, 드롭다운이 펼쳐졌을때, 해당 영역 밖의 클릭 이벤트를 통해 드롭다운을 숨기기 위해서 useRef를 통해 아래와 같이 상태를 관리했습니다. 
```js
const useCloseDropdown = (ref, setShowDropdown) => {
  useEffect(() => {
    const outsideDropdownClickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', outsideDropdownClickHandler);
    return () => {
      document.removeEventListener('click', outsideDropdownClickHandler);
    };
  }, [ref, setShowDropdown]);
};
```

#### 어려웠던 점
드롭다운이 펼쳐진 상태에서 드롭다운 밖의 영역을 클릭했을때, 드롭다운을 닫게 하는 것이 제일 까다로웠습니다. useRef훅을 이용해서 구현은 간단하게 할 수 있었지만, 동일한 페이지에서 여러 이벤트가 겹치게 될 경우 어떻게 해결할 수 있을지에 대한 고민이 유익했습니다.

#### 전체적인 총평
대체적으로 css와 애니메이션을 구현하는 데에 많은 부족함을 느꼈고, 온보딩 코스의 제출기간을 늦게 알게되어서 급하게 짜다보니 컴포넌트를 좀더 분해하지 않고 하나에 다 넣다보니 아쉬움이 많이 남는 프로젝트였습니다.
