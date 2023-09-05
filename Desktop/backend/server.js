const express = require ('express');
const port = 3030 ;
const app = express ();

app.use(express.json())
app.use(express.urlencoded({extended: false}))


const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);
app.use('/api/todos', require('./routes/todoRoutes'))


app.listen (port, () => {
console.log(`Server started on port http://localhost:${port}`);

});


