const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(400).json({ status: "error", msg: "no token found" });
  }

  const token = req.headers["authorization"].replace("Bearer ", "");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);

      req.decoded = decoded;
      next();

      /**
       * const user = await User.findById(req.userData.userId);
       * if (!user) return res.status(400).send({ error: 'User not found' });

       // Ensure the user is only editing their own information
       * if (user._id.toString() !== req.userData.userId) {
       * return res.status(403).send({ error: 'Unauthorized action' });
       */
    } catch (error) {
      console.error(error.message);
      return res.status(401).json({ status: "error", msg: "unauthorized" });
    }
  } else {
    return res.status(403).json({ status: "error", msg: "missing token" });
  }
};

module.exports = { authUser };
