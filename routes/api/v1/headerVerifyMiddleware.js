const verifyApiHeaderToken = (req, res, next) => {
    const apitoken = req.get('apitoken');
    if (apitoken){
        if (apitoken === process.env.API_TOKEN){
        return next();
    } else {
        sendUnauthorized(res);
    }
    }else{

    }
}

const sendUnauthorized = (res) => {
    res.status(401).json({"error":"Recurso no autorizdo!"});
}

module.exports = {
    verifyApiHeaderToken,
}