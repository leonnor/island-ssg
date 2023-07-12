import { renderToString } from 'react-dom/server';
import { App } from './App';

// 服务端入口，把组件代码渲染为 HTML 字符串

export function render() {
  return renderToString(<App />);
}
