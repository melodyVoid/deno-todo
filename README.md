# deno-todo

oak 框架开发的 Todo REST API

1. 克隆本项目到本地

```
git clone git@github.com:melodyVoid/deno-todo.git
```

2. 启动

```
deno run -A app.ts
```

可用 [postman](https://www.postman.com/) 或者 [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)，来测试 Todo REST API，项目中的 todo.rest 可以用来测试。

**遇到的问题：**

下载 oak 依赖时，有个包下载不下来

```
Download https://raw.githubusercontent.com/pillarjs/path-to-regexp/v6.1.0/src/index.ts
error: Uncaught Http: error sending request for url (https://raw.githubusercontent.com/pillarjs/path-to-regexp/v6.1.0/src/index.ts): error trying to connect: tcp connect error: Connection refused (os error 111)
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendAsync ($deno$/ops/dispatch_json.ts:98:10)
    at async processImports ($deno$/compiler.ts:736:23)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
    at async processImports ($deno$/compiler.ts:753:7)
```
原因是raw.githubusercontent.com受到DNS污染。

请查看 👉 https://denocn.org/detail/5ecb1f880016fb4600e91aba
