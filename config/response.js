async function Success(message, data) { 
  return {
    Success: true,
    Message: message,
    Data: data
  }
}

async function Failed(message) {
  return {
    Success: false,
    Message: message
  }
}

module.exports = {Success, Failed}