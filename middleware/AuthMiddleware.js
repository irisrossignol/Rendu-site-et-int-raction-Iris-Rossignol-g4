import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
    
    const token = req.headers["x-access-token"];

    if (!token) {
        res.status(401).json({ error: "No token provided" });
    }

//Verification du token
jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    //verifie le token avec la cle secrete qui l'a créé
    if(err) {
        console.log("token invalide", err);
        res.status(401).json({ error: "No token provided" });
}

req.user = decodedToken;

next();
});
};

export { authenticateToken };