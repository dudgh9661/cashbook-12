const authMiddleWare = (req, res, next) => {
  console.log(req.cookies);
  next();
};

export default authMiddleWare;
