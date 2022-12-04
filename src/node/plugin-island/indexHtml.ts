import { Plugin } from "vite";
import { readFile } from 'fs/promises'
import { CLIENT_ENTRY_PATH, DEFAULT_HTML_PATH } from "../constants";

export function pluginIndexHtml(): Plugin {
  return {
    name: 'island:index-html',
    apply: "serve",
    // 插入入口 script 标签
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: `/@fs/${CLIENT_ENTRY_PATH}`,
            },
            injectTo: "body",
          },
        ],
      };
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // 1. 读取template.html内容
          let content = await readFile(DEFAULT_HTML_PATH, 'utf-8')
          try {
            content = await server.transformIndexHtml(
              req.url,
              content,
              req.originalUrl
            )
            // 2. 响应 HTML 浏览器
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html")
            res.end(content)
          } catch (e) {
            return next(e);
          }
        })
      }
    }
  }
}