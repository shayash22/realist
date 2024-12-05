import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import {DATABASE} from "./config.js";
import authRoutes from "./routes/auth.js";

//Here express have been invoked. (All the functionality of express will be avaialble in the app varialble.)
const app = express();

//Data Base
mongoose.connect(DATABASE).then(() =>console.log('db_connected')).catch((err) =>console.log(err));



//Apply middleware. whenever we want to apply a middleware, we need to use "use" function (It acts as a bridge between the request and response cycles in a web application.)
app.use(express.json());
// morgan help us to see GET /api 200 2.072 ms - 33
app.use(morgan("dev"));
app.use(cors());

//Routes middleware
app.use('/api', authRoutes);

//We are creatubg a very first route and see how we can send some kind of a response.
// In get funciton, first argument is URL. Second arugument is callback function.
// This call back function all has request and response object.
// Express work as a Request resoponse handler.


app.listen(8000, () => console.log("server_running_on_port_8000"));