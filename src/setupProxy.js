const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com",
      chargeOrigin: true,
    })
  );
};
