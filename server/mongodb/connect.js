import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log('Error', err));
}

export default connectDB