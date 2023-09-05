const asyncHanlder = require('express-async-handler');

const getTodos = asyncHanlder(async (req, res) => {
  res.status(200).json({message: 'Get todos'})
});

const setTodo = (req , res) => {
    res.status(200).json({message: 'Set todo'})
}

const updateTodo = (req , res) => {
    res.status(200).json({message: `update todo ${req.params.id}`})
}
const deleteTodo = (req , res) => {
    res.status(200).json({message: `Delete todo ${req.params.id}`})
}

module.exports = {
    getTodos,
    setTodo,
    updateTodo,
    deleteTodo,
}
