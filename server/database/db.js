import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://admin:123@cluster0.r2zh0le.mongodb.net/form?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;