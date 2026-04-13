const sumRequestHandler = (req, res) => {

    console.log("I am in sum request handler", req.url, req.method)

}

exports.sumRequestHandler = sumRequestHandler;