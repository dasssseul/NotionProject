export default function DocumentList({
  $target,
  initialState,
  onSelect,
  onCreate,
  onRemove,
}) {
  const $documentList = document.createElement("div");
  $documentList.className = "docList";
  $target.appendChild($documentList);

  // tree menu 만들기 : map + 재귀
  const createTreeView = (document) => {
    return document
      .map(
        ({ id, title, documents }) => `
      <li data-id=${id} class="documentItem">${
          documents.length > 0
            ? `<span class="hasChild">${title}</span>`
            : `${title}`
        }
      <button class="createDoc"><i class="fas fa-folder-plus"></i></button>
      <button class="removeDoc"><i class="fas fa-trash-alt"></i></button>
      ${
        documents.length > 0
          ? `<ul class="hasChildUl">${createTreeView(documents)}</ul>`
          : ""
      }
      </li>`
      )
      .join("");
  };

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $documentList.innerHTML = `<ul id="root">${createTreeView(
      this.state
    )}</ul>`;
  };

  this.render();

  $documentList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    if ($li) {
      const { id } = $li.dataset;
      const $button = e.target.closest("button");
      if (e.target.className === "documentItem") {
        onSelect(id);
      } else if (e.target.className === "hasChild") {
        onSelect(id);
        e.target.parentElement
          .querySelector(".hasChildUl")
          .classList.toggle("active");
        e.target.classList.toggle("hasChildDown");
      } else if ($button.className === "createDoc") {
        onCreate(id);
      } else if ($button.className === "removeDoc") {
        onRemove(id);
      }
    }
  });
}
