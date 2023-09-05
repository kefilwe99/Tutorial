const setTodo = (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    res.status(200).json({message: 'Set todo'})
  }