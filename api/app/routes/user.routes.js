module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new User
    app.post("/signUp", users.create);
  
    // Retrieve a single User with userId
    app.get("/users/:userId", users.findOne);
  
    // Update a User with userId
    app.put("/users/:userId", users.update);
  
    // Delete a User with userId
    app.delete("/users/:userId", users.delete);
  };