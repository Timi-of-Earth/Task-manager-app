const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        minlength: [3, 'Must be at least 3 characters'],
        maxlength: [20, 'Cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);