import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use('/todos/', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log('server running on port 3000 ');
});