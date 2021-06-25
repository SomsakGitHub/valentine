const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0.o38lj.mongodb.net/valentine?retryWrites=true&w=majority';

//Connect database.
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.error(err));

module.exports = mongoose;