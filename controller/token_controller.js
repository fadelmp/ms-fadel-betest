const TokenService = require('../service/token_service')
const Response = require('../config/response')

const CheckToken = async(req, res) => {
  
  try {
    const {token} = req.body
    console.log("token")
    console.log(token)
    const checkToken = await TokenService.VerifyToken(token)

    const response = await Response.Success(checkToken.message, checkToken.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed To Check Token (" +err.message+ ")")
    res.status(500).json(response)
  }
  
}

module.exports = {CheckToken}