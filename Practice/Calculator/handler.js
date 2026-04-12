const requestHandler = (req, res) => {

    console.log(req.url, req.method, req.headers);


}

exports.requestHandler = requestHandler;