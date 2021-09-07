# NotionProject

노션 클론 코딩 프로젝트

## 📌 과제 설명

바닐라 JS만을 이용해 노션을 클로닝합니다.
기본적인 레이아웃은 노션과 같으며, 스타일링, 컬러값 등은 원하는대로 커스텀합니다.

![노션 프로젝트](https://user-images.githubusercontent.com/77623643/132018827-2c040670-dbdf-493c-8046-0b7690d30d2c.gif)

</br>

## 👩‍💻 요구 사항과 구현 내용

### 기본 요구사항

- [x] 글 단위를 Document라고 합니다. Document는 Document 여러개를 포함할 수 있습니다.
- [x] 화면 좌측에 Root Documents를 불러오는 API를 통해 루트 Documents를 렌더링합니다.
  - [x] Root Document를 클릭하면 오른쪽 편집기 영역에 해당 Document의 Content를 렌더링합니다.
  - [x] 해당 Root Document에 하위 Document가 있는 경우, 해당 Document 아래에 트리 형태로 렌더링 합니다.
  - [x] Document Tree에서 각 Document 우측에는 + 버튼이 있습니다. 해당 버튼을 클릭하면, 클릭한 Document의 하위 Document로 새 Document를 생성하고 편집화면으로 넘깁니다.
- [x] 편집기에는 기본적으로 저장 버튼이 없습니다. Document Save API를 이용해 지속적으로 서버에 저장되도록 합니다.
- [x] History API를 이용해 SPA 형태로 만듭니다.
  - [x] 루트 URL 접속 시엔 별다른 편집기 선택이 안 된 상태입니다.
  - [x] /documents/{documentId} 로 접속시, 해당 Document 의 content를 불러와 편집기에 로딩합니다.

### 보너스 요구사항

- [ ] 기본적으로 편집기는 textarea 기반으로 단순한 텍스트 편집기로 시작하되, 여력이 되면 div와 contentEditable을 조합해서 좀 더 Rich한 에디터를 만들어봅니다.
- [ ] 편집기 최하단에는 현재 편집 중인 Document의 하위 Document 링크를 렌더링하도록 추가합니다.
- [ ] 편집기 내에서 다른 Document name을 적은 경우, 자동으로 해당 Document의 편집 페이지로 이동하는 링크를 거는 기능을 추가합니다.
- [x] 그외 개선하거나 구현했으면 좋겠다는 부분이 있으면 적극적으로 구현해봅니다!

### 추가 기능 구현

- 자식 document 존재 시 토글 기능
- document 삭제 기능 추가

### 개선해야할 점

- DocumentList Toggle 관련

  - 열리는 토글은 정상 동작하나, 페이지 추가 또는 삭제 시 토글이 다시 닫히는 현상 발생

- 삭제 버튼 기능 관련

  - 자식 document 삭제 시 해당 document의 하위 document가 삭제된 document의 위치로 가지않고, 루트 document로 가는 현상
  - 현재 선택된 문서 삭제 시 editor가 없어지지않고 남아있는 현상(=/documents/로 렌더링이 안되는 문제)

- Document onSelect 관련

  - 이미 선택되어있는 document를 또 선택 시 콘솔창에 오류 발생, 기능은 정상 동작

</br>

## 궁금한 점

- 기본 기능 구현과 동작하는 코드에 초점을 맞춰 프로젝트를 진행했습니다. 아직 미흡한 부분이 많아 계속 버전업해서 완전한 노션에 도전해 볼 예정입니다.
- TodoApp에 비해 컴포넌트를 제대로 쪼개지 못한 것 같습니다. DocumentsPage에서 DocumentList, DocumentListHeader, UserProfile 컴포넌트를 사용하고 이 전체를 DocumentEditPage에서 재사용하는 구조인데 컴포넌트를 잘못 나눈 것 같습니다...
  어떤식으로 나누면 좋을지 궁금합니다!🥲
- DocumentList 트리 view(트리 메뉴) 구현 시 map과 재귀를 사용했는데 더 좋은 방법이 있는지 궁금합니다.

</br>
