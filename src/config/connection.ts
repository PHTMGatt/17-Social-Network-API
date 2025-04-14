// config/connection.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log success or errors
mongoose.connection.on('connected', () => console.log('Mongoose connected to MongoDB'));
mongoose.connection.on('error', (err) => console.error(err));

module.exports = mongoose;
