import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect("mongodb+srv://ishita2125it1027:h81mI8MpUNEfNbdT@cluster0.up0zfdv.mongodb.net/ishita?retryWrites=true&w=majority");
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running, ' + err);
            process.exit();
        })

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

