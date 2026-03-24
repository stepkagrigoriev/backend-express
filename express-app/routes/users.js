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


let users = [];

router.post('/', function(req, resp) {
	newUser = req.body;
	users.push(newUser);
	resp.status(201).json(newUser);
});

module.exports = router;
