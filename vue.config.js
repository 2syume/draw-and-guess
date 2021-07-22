module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/draw-and-guess/" : "/",
  pwa: {
    name: "BGMNA你画我猜词库",
    themeColor: "#f0969d",
    appleMobileWebAppCapable: "yes",
  },
};
