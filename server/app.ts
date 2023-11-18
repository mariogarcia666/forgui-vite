import  express  from "express"
import morgan from "morgan"
import cors from 'cors'
import tasksroutes from './routes'

const session = require('express-session')
const app = express();

app.use(cors({
    origin: 'http://localhost:8100'
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/api", tasksroutes);
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));

export default app;