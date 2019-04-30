const React = require("react");
const radium = require("radium");

const styles = {
  list: {
    padding: "20px",
    item: {
      margin: "20px",
      background: "#fff",
      border: "1rpx solid rgba(0, 0, 0, 0.1)",
      borderRadius: "6px",
      boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.05)",
      height: "44px",
      paddingLeft: "10px",
      paddingRight: "10px",
      color: "rgba(0, 0, 0, 0.9)",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      desc: {
        flex: "1 1 auto"
      },
      connect: {
        fontSize: "14px",
        color: "#1AAD16",
        flex: "0 0 auto"
      }
    }
  }
};

module.exports = radium(props => {
  const { wifiList = [] } = props;
  return (
    <>
      <div className="list" style={[styles.list]}>
        {wifiList.map(item => {
          const args = encodeURI(JSON.stringify([item]));
          return (
            <div className="item" key={item.SSID} style={[styles.list.item]}>
              <div style={[styles.list.item.desc]}>{item.SSID}</div>
              <div
                className="connect"
                style={[styles.list.item.connect]}
                data-tap="connectWifi"
                data-args={args}
              >
                点击连接
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});
