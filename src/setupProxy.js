const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://10.150.151.102:8000",
      changeOrigin: true,
    })
  );
};
