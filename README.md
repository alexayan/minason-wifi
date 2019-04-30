> connect wifi

## Intro

微信小程序连接 Wifi

## Minason

Minason 基于微信小程序微信小程序提供的 [局域网通信](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startLocalServiceDiscovery.html) 能力，用于构建线下场景的小程序微服务。

开发者可以编写服务器端代码，在服务器端生成自定义的小程序 UI，调用小程序的 Api，搭配 [Minason client](https://github.com/alexayan/minason-client) 小程序客户端，自由的创建和发布小程序服务。

用户可以使用 [Minason client](https://github.com/alexayan/minason-client) 小程序客户端，使用当前局域网内部可发现的小程序微服务。

Minason server 当前是一个快速开发完成的玩具项目，只是验证了可行性，不能用于生产环境。

## Usage

`node lib/index.js`

## Reference

[Minason server](https://github.com/alexayan/minason-server)<br/>
[Minason client](https://github.com/alexayan/minason-client)

## License

MIT © [alexayan](https://github.com/alexayan)
