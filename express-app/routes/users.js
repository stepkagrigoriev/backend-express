const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    items: [
      {
        "id" : 1,
        "name" : "Степан Григорьев",
      },
      {
        "id" : 2,
        "name" : "Александр Левенских"
      }
    ]
  });
});

module.exports = router;
