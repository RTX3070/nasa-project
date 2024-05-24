// Imports
const mongoose = require('mongoose');

const planetSchema = mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
        default: 'Kepler'
    }
});

module.exports = mongoose.model('Planet', planetSchema);