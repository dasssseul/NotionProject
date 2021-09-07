import { request } from "../utils/api.js";
import DocumentList from "./DocumentList.js";
import DocumentListHeader from "./DocumentListHeader.js";
import UserProfile from "./UserProfile.js";
import { push } from "../utils/router.js";

export default function DocumentsPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "docListContainer";

  this.state = [];
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  new UserProfile({
    $target: $page,
    initialState: { name: "다슬" },
  });

  new DocumentListHeader({
    $target: $page,
    onCreate: async () => {
      const createdDoc = await request(`/documents`, {
        method: "POST",
        body: JSON.stringify({
          title: "새로운 문서",
          parent: null,
        }),
      });
      push(`/documents/${createdDoc.id}`);
      this.render();
    },
  });

  const documentList = new DocumentList({
    $target: $page,
    initialState: [],
    onSelect: async (id) => {
      push(`/documents/${id}`);
    },
    onCreate: async (id) => {
      const createdDoc = await request(`/documents`, {
        method: "POST",
        body: JSON.stringify({
          title: "새로운 문서",
          parent: id,
        }),
      });
      push(`/documents/${createdDoc.id}`);
      this.render();
    },
    onRemove: async (id) => {
      if (confirm("문서를 삭제하시겠습니까?")) {
        await request(`/documents/${id}`, {
          method: "DELETE",
        });
        history.replaceState(null, null, `/`);
        this.render();
      }
      return;
    },
  });

  const documentsPage = async () => {
    const documents = await request("/documents");
    documentList.setState(documents);
  };

  this.render = async () => {
    await documentsPage();
    $target.appendChild($page);
  };

  this.render();
}
