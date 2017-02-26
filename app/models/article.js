// Example model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: String,
    text: String,
    author: String,
    peroid: { type: Date, default: Date.now },
    finished: { type: Boolean, default: false }
});

todoSchema.virtual('date')
    .get(function() {
        return this._id.getTimestamp();
    });

mongoose.model('todoModel', todoSchema);