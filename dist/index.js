"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _errors = require("./errors");

var _deals = require("./routes/deals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use('/deals/:id', _deals.dealsRoute);
app.use(_errors.notFoundError);
app.use(_errors.genericError);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});