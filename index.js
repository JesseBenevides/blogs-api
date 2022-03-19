const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const categoriesRouter = require('./routes/categoriesRouter');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categoriesRouter);

app.use(errorMiddleware);

app.all('*', (_req, res, _next) => (
  res.status(404).json({ message: 'Route not found' })
));

app.listen(3000, () => console.log('ouvindo porta 3000!'));
