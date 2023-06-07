const express = require('express');
const app = express();
const config = require('./config/config');
const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(config.PORT, () => {
  console.log(`TopSellingProducts app listening on port ${config.PORT}`);
});

module.exports = app;