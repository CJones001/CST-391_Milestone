import express, {Request, Response} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './middleware/logger.middleware';
import FoodRouter from './foods/foods.routes';
import RestaurantRouter from './restaurants/restaurant.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

// enable all CORS request
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if (process.env.NODE_ENV == 'development') {
  // add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the Food Delivery API</h1>');
});

// adding router middleware
app.use('/', [FoodRouter, RestaurantRouter]);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
