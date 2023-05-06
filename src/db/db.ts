import mongoose from "mongoose"
import endpoint from '../endpoints.config';


export const connectDB = () => {
    mongoose
        .connect(endpoint.DatabaseURL)
        .then(resp => {
            console.log('Success>>>')
        })
        .catch(err => {
            console.log('Error>>>', err)
        })
}

