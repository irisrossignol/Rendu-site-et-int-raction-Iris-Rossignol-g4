import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {

  const token = req.headers["x-access-token"];


  if (!token || token === "null" || token === "undefined") {

   return res.status(401).json({ error: "No token provided" });
  }


  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {

    if (err) {
      console.log("token invalide", err);
      return res.status(401).json({ error: "No token provided" });
    }

    req.user = decodedToken;

    next();
  });
};

export { authenticateToken };
