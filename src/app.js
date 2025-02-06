import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./routes/pricing.js"; 
import { errorHandler }  from "../src/middleware/errorHandler.js";


const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routing
app.use("/api", router);

// Middleware for error handling
app.use(errorHandler);



export default app
