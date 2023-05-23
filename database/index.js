const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://coco:coco@cluster0.ya6eeax.mongodb.net/todos?retryWrites=true&w=majority')
  .then(() => console.log('Connected to DB !'));
