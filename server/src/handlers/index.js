module.exports.notfound = (req, res, next) => {
  const err = new Error("Route not Found");
  err.status = 404;
  next(err);
};

module.exports.errors = (err, req, res, next) => {
  res
    .status(err.starus || 500)
    .json({ err: err.message || "Something went wrong!" });
};
