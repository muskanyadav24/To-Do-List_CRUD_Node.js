
// const express = require("express");
// const router = express.Router();

// const {
//     home,
//     addTodo,
//     updateTodo,
//     deleteTodo
// } = require("../controllers/todoController");

// // Routes
// router.get("/", home);
// router.post("/addTodo", addTodo);
// router.post("/update/:id", updateTodo);
// router.get("/delete/:id", deleteTodo);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
    home,
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");

router.get("/", home);
router.post("/addTodo", addTodo);
router.post("/update/:id", updateTodo);
router.get("/delete/:id", deleteTodo);

module.exports = router;
