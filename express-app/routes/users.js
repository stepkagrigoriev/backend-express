const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send(users);
});

router.get('/:id', function(req, res, next) {
	id = parseInt(req.params["id"]);
	let user = users.find(u => u.id === id);
	if (user === undefined) {
		res.status(404).json();
	} else {
		res.status(201).json(user);
	}
});

let users = [{
        "id" : 1,
        "name" : "Степан Григорьев",
      },
      {
        "id" : 2,
        "name" : "Александр Левенских"
      }
];

router.post('/', function(req, res) {
	newUser = req.body;
	users.push(newUser);
	res.status(201).json(newUser);
});

module.exports = router;
