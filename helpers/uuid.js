// Import the 'uuid' module
const { v4: uuidv4 } = require('uuid');

// Generate a new UUID
const generateUUID = () => {
  return uuidv4();
};

// Export the generateUUID function
module.exports = generateUUID;