
export function jsonResponseHandler(req, res) {
  return function(err, result) {
    if(err) {
      console.error(err)
      res.status(err.statusCode || 500).send({message: err.message})
    } else {
      res.send(result)
    }
  }
}