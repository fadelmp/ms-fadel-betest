const jwt = require('jsonwebtoken');
const dotenv = require('dotenv/config');

async function VerifyToken(token) {

  // verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded) {
    return {
      data: decoded.user,
      message: "Token is Valid"
    }
  } else {
    return {
      data: {},
      mssage: "Invalid Token"
    }
  }
} 

async function GenerateToken(user_data) {

  let jwtSecretKey = process.env.JWT_SECRET

  const payload = {
    user: {
      id: user_data._id,
      name: user_data.name,
      phone: user_data.phone,
      role: user_data.role,
      timestamp: user_data.created_at
    }
  }

  // Return JWT
  return jwt.sign(
    payload,
    jwtSecretKey,
    {expiresIn: 36000},
    {expiresInt: "1hr"}
  )
}

module.exports = {VerifyToken, GenerateToken}