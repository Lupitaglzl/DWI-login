const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        const cn = await mongoose.connect('mongodb://localhos:27017/dblogin', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        cn.STATES.connected
        ? console.log('MongoDB conectado')
        : console.log('MongoDB no conectado');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}