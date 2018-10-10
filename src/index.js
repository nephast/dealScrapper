import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { genericError, notFoundError } from './errors';
import { dealsRoute } from './routes/deals';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/deals/:id', dealsRoute);

app.use(notFoundError);
app.use(genericError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});