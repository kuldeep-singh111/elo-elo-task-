
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {

    // const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    const token = req.cookies.token;


    if (!token) {
        return res.status(401).json({ message: "Token is not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        // console.log(decoded)
        // console.log(req.user) /// ar vha puri hi problem solve hogi yaar!
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token!' });
    }

    // jwt.verify(token, "kuldeep", (err, decoded) => {
    //     if (err) {
    //         console.error("JWT Verification Error:", err); 
    //         return res.status(403).json({ message: "Invalid or expired token" });
    //     }

    //     req.user = decoded; // Attach decoded data to the request object
    //     next(); // Proceed to the next middleware or route
    // });
};

module.exports = { authentication };
