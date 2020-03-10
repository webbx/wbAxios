<h1 align="center">Welcome to cancelrequest 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/webbx/cancelRequest#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/webbx/cancelRequest/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/webbx/cancelRequest/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/webbx/cancelrequest" />
  </a>
</p>

> use it you can cancel your axios request when you want to stop request

### 🏠 [Homepage](https://github.com/webbx/cancelRequest#readme)

## Install

```sh
npm install wbaxios --save-dev
```

## Start

```sh
npm run start
```

## Import

```javascript
import wbAxios from 'wbaxios';
```

## Use

#### init(baseUrl, headerConfig)
```javascript
wbAxios.init('https://www.fastmock.site/mock/654a6d890e9e4da4fb45f4a2a1180afb/testMock', {'x-token': 'this is a token'});
```

#### get()
```javascript
wbAxios.get('/test');
```

#### cancel()
```javascript
wbAxios.cancel('/test');
```

## Demo

http://localhost:2020

## Author

👤 **Bowang816**

* Website: https://www.wangboweb.site
* Github: [@webbx](https://github.com/webbx)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/webbx/cancelRequest/issues). You can also take a look at the [contributing guide](https://github.com/webbx/cancelRequest/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Bowang816](https://github.com/webbx).<br />
This project is [ISC](https://github.com/webbx/cancelRequest/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
