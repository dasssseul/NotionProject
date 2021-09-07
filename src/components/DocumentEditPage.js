import { request } from "../utils/api.js";
import { StorageUtils } from "../utils/storage.js";
import Editor from "./Editor.js";
import DocumentsPage from "./DocumentsPage.js";

export default function DocumentEditPage({ $target, initialState }) {
  const $page = document.createElement("div");
  $page.className = "docEditContainer";

  this.state = initialState;

  let documentLocalSaveKey = `temp-document-${this.state.documentId}`;
  const doc = StorageUtils.getItem(documentLocalSaveKey, {
    title: "",
    content: "",
  });

  const documentsPage = new DocumentsPage({
    $target,
    initialState: this.state,
  });

  let timer = null;
  const editor = new Editor({
    $target: $page,
    initialState: doc,
    onEditing: (doc) => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        StorageUtils.setItem(documentLocalSaveKey, {
          ...doc,
          createdAt: new Date(),
        });

        const isNew = this.state.documentId === "new";
        if (isNew) {
          const createdDocument = await request("/documents", {
            method: "POST",
            body: JSON.stringify(doc),
          });
          documentsPage.render();
          history.replaceState(null, null, `/documents/${createdDocument.id}`);
          removeItem(documentLocalSaveKey);

          this.setState({
            documentId: createdDocument.id,
          });
        } else {
          await request(`/documents/${doc.id}`, {
            method: "PUT",
            body: JSON.stringify(doc),
          });
          documentsPage.render();
          StorageUtils.removeItem(documentLocalSaveKey);
        }
      }, 2000);
    },
  });

  this.setState = async (nextState) => {
    if (this.state.documentId !== nextState.documentId) {
      documentLocalSaveKey = `temp-document-${nextState.documentId}`;
      this.state = nextState;
      if (this.state.documentId === "new") {
        const doc = StorageUtils.getItem(documentLocalSaveKey, {
          title: "",
          parent: null,
        });
        this.render();
        editor.setState(doc);
      } else {
        await fetchDocument();
      }
      return;
    }

    this.state = nextState;
    this.render();

    editor.setState(
      this.state.doc || {
        title: "",
        content: "",
      }
    );
  };
  this.render = () => {
    $target.appendChild($page);
  };

  const fetchDocument = async () => {
    const { documentId } = this.state;
    if (documentId !== "new") {
      const doc = await request(`/documents/${documentId}`);
      this.setState({ ...this.state, doc });
    }
  };
}
