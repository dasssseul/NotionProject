import DocumentEditPage from "./DocumentEditPage.js";
import { initRouter } from "../utils/router.js";

export default function App({ $target }) {
  const documentEditPage = new DocumentEditPage({
    $target,
    initialState: {
      documentId: "new",
      title: "",
      content: "",
    },
  });

  this.route = () => {
    const { pathname } = window.location;
    if (pathname.indexOf("/documents/") === 0) {
      const [, , documentId] = pathname.split("/");
      documentEditPage.setState({ documentId });
    }
  };

  this.route();

  initRouter(() => this.route());
}
