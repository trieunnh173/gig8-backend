module.exports.getHomePage = async (req, res, app) => {
  return app.render(req, res, "/home");
}
