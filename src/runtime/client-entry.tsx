import { createRoot } from 'react-dom/client';
import { App } from './App';
import siteData from 'island:site-data';
import { BrowserRouter } from 'react-router-dom';

// 浏览器端入口文件，用于渲染主题组建
function renderInBrowser() {
  console.log(siteData);
  const containerEl = document.getElementById('root');
  if (!containerEl) {
    throw new Error('#root element not found');
  }
  createRoot(containerEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

renderInBrowser();
