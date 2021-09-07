export default function UserProfile({ $target, initialState }) {
  const $userInfo = document.createElement("div");
  $userInfo.className = "userInfo";
  $target.appendChild($userInfo);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $userInfo.innerHTML = `<h3><img src="/src/images/notionLogo.png"> ${this.state.name}의 Notion</h3>
        `;
  };

  this.render();
}
