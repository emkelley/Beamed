const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async event => {
  return {
    statusCode,
    headers,
    body: 'Pong'
  }
}
