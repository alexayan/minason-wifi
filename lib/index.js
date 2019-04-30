require("@babel/register")({
  presets: ["@babel/preset-react"]
});

const Minason = require("minason");
const App = require("./App.jsx");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const minason = new Minason({
  name: "无码 Wifi",
  desc: "Wifi 无码",
  socket: {
    port: 9002
  },
  global: {
    wifiList: [
      {
        SSID: "Plan N",
        password: "password"
      },
      {
        SSID: "Plan 1/4",
        password: "password"
      }
    ]
  },
  generateView() {
    return ReactDOMServer.renderToString(React.createElement(App, this.global));
  }
});

minason.register("init", async function() {
  this.refresh(true);
});

minason.register("connectWifi", async function(wifi) {
  console.log("connect wifi", wifi);
  try {
    this.wx.showLoading({
      title: "连接中...",
      mask: true
    });
    await this.wx.startWifi();
    const resp = await this.wx.connectWifi(wifi);
    this.wx.hideLoading();
    let message = resp.wifiMsg || "";
    if (message.indexOf("target wifi is already connected") > -1) {
      message = `${wifi.SSID} 已经连接`;
    }
    if (message) {
      this.wx.showToast({
        title: message,
        icon: "none"
      });
    }
  } catch (e) {
    console.error(e);
    this.wx.hideLoading();
  }
});

minason.start();
