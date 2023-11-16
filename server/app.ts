import  express  from "express"
import morgan from "morgan"
import cors from 'cors'
import tasksroutes from './routes'

const app = express();

app.use(cors({
    origin: 'http://localhost:8100'
}));
app.use(morgan("dev"));
app.use(express.json());


app.use("/api", tasksroutes);

export default app;