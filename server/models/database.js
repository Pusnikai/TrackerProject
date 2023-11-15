const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Not connecting :('));
db.once('open', function() {
    console.log('Connected :)')
});

(async() => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('  [Connected to MongoDB]');
    } catch (error) {
        console.error('*Error connecting to MongoDB:', error.message);
    }
})();

require('./track');