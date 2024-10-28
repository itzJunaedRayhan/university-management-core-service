import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import routes from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Testing routes:
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully...');
});

//  Application Routes:
app.use('/api/v1', routes);

// global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
