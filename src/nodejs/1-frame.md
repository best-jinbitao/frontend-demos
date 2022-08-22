# 框架

## Express
Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。Node界最老牌的Web框架，最成熟，生态最好。提供了基础的请求上下文封装，路由，中间件，模板引擎接口，静态资源服务。麻雀虽小，五脏俱全。很方便的进行扩展，许多流行的开发框架都基于Express构建。

## Koa
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。Express原班人马打造，定义为下一代Web开发框架。仅提供一个请求上下文，中间件机制，没有捆绑任何中间件。通过利用async/await，让你写出更优雅的代码。方便开发者针对自身需求开发自定义框架。

## hapi.js
hapi.js(读音是应该是happy js~~)是由walmart(沃尔玛) 技术团队开发的web框架，Hapi 是一个用来构建基于 Node.js 的应用和服务的富框架，使得开发者把重点放在便携可重用的应用逻辑而不是构建架构。内建输入验证、缓存、认证和其他 Web 应用开发常用的功能。没有中间件，但提供了强大的插件机制。

## Restify
Restify 是一个 Node.JS 模块，可以让你创建正确的 REST web services。它借鉴了很多 express 的设计，因为它是 node.js web 应用事实上的标准 API，提供了handle的链式调用及插件机制。

## Fastify
Fastify，快速并且低开销的 web 框架，专为 Node.js 平台量身打造，Fastify号称是最快的Nodejs web框架，在Json输出的场景下，通过Json Schema序列化为Json数据，可以达到原生JSON.stringify 2倍的性能，在极端情况下可达到10倍速。采用对象池，将请求上下文包装对象进行复用。使用trie树存储路由，查找效率更高（在大量有路由的情况下）。Fastify提供了强大的插件机制，通过插件可以分割路由及中间件。

## Egg.js
Egg.js 为企业级框架和应用而生，我们希望由 Egg.js 孕育出更多上层框架，帮助开发团队和开发人员降低开发和维护成本。eggjs是由阿里推出的一款web企业级框架，提供了完整的Web开发所需的组件，使用koa作为底层。使用了约定大于配置的理念，提供强大的插件机制，方便扩展。

## ThinkJS
ThinkJS 是一款面向未来开发的 Node.js 框架，整合了大量的项目最佳实践，让企业级开发变得更简单、高效。从 3.0 开始，框架底层基于 Koa 2.x 实现，兼容 Koa 的所有功能。thinkjs是由360推出的，基于koa开发，借鉴了Thinkphp的一些理念，降低了开发者的使用难度，使用了类是很多php框架的默认路由，使用了继承和钩子方法来重用逻辑。

## SailsJs
Sails.js是遵循“约定之上的配置”原则的Node.js MVC（模型-视图-控制器）框架。 它受到流行的Ruby on Rails Web框架的启发，可让您快速构建REST API，单页应用程序和实时（基于WebSockets）应用程序。 它充分利用了代码生成器，使您可以减少编写代码的时间来构建应用程序，尤其是那些通常可以被脚手架打折的通用代码。Sailsjs可以算最早开始做集成度很高的框架，底层基于express，Nodejs上的Rails。

## NestJs
NestJs 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 TypeScript（但仍然允许开发人员使用纯 JavaScript 编写代码）并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。NestJs的主要卖点是TypeScript的完全支持。大量的使用装饰器，代码看起来清爽多了。orm采用TypeORM，使用类型加装饰器，代码比一般的orm整洁得多。

## AdonisJs
AdonisJs，是一个服务端渲染的MVC框架，它是 Laravel （PHP框架）的一个 NodeJS 版本。