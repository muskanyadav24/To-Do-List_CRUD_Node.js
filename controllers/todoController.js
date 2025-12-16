
// // Temporary todos array
// const todos = [];

// // Home Page
// const home = (req, res) => {
//     res.render('index', { todos });
// };

// // Add Todo
// const addTodo = (req, res) => {
//     todos.push({ title: req.body.title });
//     res.redirect('/');
// };

// // Update Todo
// const updateTodo = (req, res) => {
//     const id = parseInt(req.params.id);
//     if (!isNaN(id) && todos[id]) {
//         todos[id].title = req.body.title;
//     }
//     res.redirect('/');
// };


// // Delete Todo
// const deleteTodo = (req, res) => {
//     const id = req.params.id;
//     todos.splice(id, 1);
//     res.redirect('/');
// };


// module.exports = {
//     home,
//     addTodo,
//     updateTodo,
//     deleteTodo
// };


const todos = [];

const home = (req, res) => {
    res.render("index", { todos });
};

const addTodo = (req, res) => {
    todos.push({ title: req.body.title });
    res.redirect("/");
};

const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    if (!isNaN(id) && todos[id]) {
        todos[id].title = req.body.title;
    }
    res.redirect("/");
};

const deleteTodo = (req, res) => {
    todos.splice(req.params.id, 1);
    res.redirect("/");
};

module.exports = {
    home,
    addTodo,
    updateTodo,
    deleteTodo
};
