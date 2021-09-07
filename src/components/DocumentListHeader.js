export default function DocumentListHeader({ $target, onCreate }) {
  const $documentListHeader = document.createElement("div");
  $documentListHeader.className = "docListHeader";
  $target.appendChild($documentListHeader);

  this.render = () => {
    $documentListHeader.innerHTML = `
      <h4><i class="fas fa-file-alt"></i> 페이지 목록</h4>
      <button class="createDoc">+ 페이지 추가</button>
      `;
  };

  this.render();

  $documentListHeader.addEventListener("click", (e) => {
    const { className } = e.target;
    if (className === "createDoc") {
      onCreate();
    }
  });
}
