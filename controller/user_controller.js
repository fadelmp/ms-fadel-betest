const UserService = require('../service/user_service')
const Response = require('../config/response')

const getAllUser = async(req, res) => {
  
  try {
    const getUser   = await UserService.getAllUser()
    const response  = await Response.Success(getUser.message, getUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Get User Data")
    res.status(500).json(response)
  }
}

const getByAccountNumber = async(req, res) => {

  try {
    const {accountNumber} = req.params
    const getUser   = await UserService.getByAccountNumber(accountNumber)
    
    const response  = await Response.Success(getUser.message, getUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Get User Data")
    res.status(500).json(response)
  }

}

const getByIdentityNumber = async(req, res) => {

  try {
    const {identityNumber} = req.params
    const getUser   = await UserService.getByIdentityNumber(identityNumber)
    
    const response  = await Response.Success(getUser.message, getUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Get User Data")
    res.status(500).json(response)
  }

}

const createUser = async(req, res) => {

  try {
    const {userName, accountNumber, emailAddress, identityNumber} = req.body
    const createUser  = await UserService.createUser(userName, accountNumber, emailAddress, identityNumber)
    
    const response  = await Response.Success(createUser.message, createUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Create User Data")
    res.status(500).json(response)
  }

}

const updateUser = async(req, res) => {

  try {
    const {id, userName, accountNumber, emailAddress, identityNumber} = req.body
    const updateUser  = await UserService.updateUser(id, userName, accountNumber, emailAddress, identityNumber)
    
    const response  = await Response.Success(updateUser.message, updateUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Update User Data")
    res.status(500).json(response)
  }

}

const deleteUser = async(req, res) => {

  try {
    const {id} = req.body
    const deleteUser  = await UserService.deleteUser(id)
    
    const response  = await Response.Success(deleteUser.message, deleteUser.data)
    res.status(200).json(response)
  } catch (err) {
    const response = await Response.Failed("Failed to Delete User Data")
    res.status(500).json(response)
  }

}

module.exports = {getAllUser, getByAccountNumber, getByIdentityNumber, createUser, updateUser, deleteUser}