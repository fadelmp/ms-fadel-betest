const User = require('../model/User');

async function getAllUser() {
  let user = await User.find({})
  return user
}

async function getById(id) {
  let user = await User.findOne({ id })
  return user
}

async function getByAccountNumber(accountNumber) {
  let user = await User.findOne({ accountNumber })
  return user
}

async function getByIdentityNumber(identityNumber) {
  let user = await User.findOne({ identityNumber })
  return user
}

async function createUser(userName, accountNumber, emailAddress, identityNumber) {
  
  let newUser = new User ({userName, accountNumber, emailAddress, identityNumber})
  
  await newUser.save()
  return newUser
}

async function updateUser(id, userName, accountNumber, emailAddress, identityNumber) {
  
  let user = await User.findByIdAndUpdate(id, {
    userName: userName,
    accountNumber: accountNumber,
    emailAddress: emailAddress,
    identityNumber: identityNumber
  })

  return user
}

async function deleteUser(id) {

  let user = await User.deleteOne({ _id: id });
  return user
}

module.exports = {getAllUser, getById, getByAccountNumber, getByIdentityNumber, createUser, updateUser, deleteUser}