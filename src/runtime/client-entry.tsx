import { createRoot } from "react-dom/client";
import { App } from "./App";

// 浏览器端入口文件，用于渲染主题组建
function renderInBrowser() {
  const containerEl = document.getElementById("root");
  if (!containerEl) {
    throw new Error("#root element not found");
  }
  createRoot(containerEl).render(<App />);
}

renderInBrowser();
