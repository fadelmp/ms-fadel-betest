const User  = require('../model/User');
const Repo  = require('../repository/user_repository')

async function getAllUser() {
  
  let data = []
  let message = ""

  user_data = await Repo.getAllUser()
  if (user_data) {
    data = user_data
    message = "Successfully Get User Data"
  } else {
    message = "Failed to Get User Data"
  }

  return {data: data, message: message}
}

async function getByAccountNumber(accountNumber) {
  
  let data = []
  let message = ""

  user_data = await Repo.getByAccountNumber(accountNumber)
  if (user_data) {
    data = user_data
    message = "Successfully Get User Data"
  } else {
    message = "Failed to Get User Data"
  }

  return {data: data, message: message}
}

async function getByIdentityNumber(identityNumber) {
  
  let data = []
  let message = ""

  user_data = await Repo.getByIdentityNumber(identityNumber)
  if (user_data) {
    data = user_data
    message = "Successfully Get User Data"
  } else {
    message = "Failed to Get User Data"
  }

  return {data: data, message: message}
}

async function createUser(userName, accountNumber, emailAddress, identityNumber) {

  let data = []
  let message = ""

  check_account = await Repo.getByAccountNumber(accountNumber)
  if (check_account) {
    return {data: data, message: "Account Number already exists"}
  }

  check_identity = await Repo.getByIdentityNumber(identityNumber)
  if (check_identity) {
    return {data: data, message: "Identity Number already exists"}
  }

  create_user = await Repo.createUser(userName, accountNumber, emailAddress, identityNumber)
  if (create_user) {
    data = create_user
    message = "Successfully Create User Data"
  } else {
    message = "Failed to Create User Data"
  }

  return {data: data, message: message}
}

async function updateUser(id, userName, accountNumber, emailAddress, identityNumber) {

  let data = []
  let message = ""

  check_id = await Repo.getById(id)
  if (!check_id) {
    return {data: data, message: "User Data Not Found"}
  }

  update_user = await Repo.updateUser(id, userName, accountNumber, emailAddress, identityNumber)
  if (update_user) {
    data = update_user
    message = "Successfully Update User Data"
  } else {
    message = "Failed to Update User Data"
  }

  return {data: data, message: message}
}

async function deleteUser(id) {

  let data = []
  let message = ""

  check_id = await Repo.getById(id)
  if (!check_id) {
    return {data: data, message: "User Data Not Found"}
  }

  delete_user = await Repo.deleteUser(id)
  if (delete_user) {
    data = update_user
    message = "Successfully Delete User Data"
  } else {
    message = "Failed to Update User Data"
  }

  return {data: data, message: message}
}

module.exports = {getAllUser, getByAccountNumber, getByIdentityNumber, createUser, updateUser, deleteUser};