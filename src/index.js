import express from 'express';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(5000);
