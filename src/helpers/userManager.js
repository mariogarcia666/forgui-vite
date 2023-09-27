class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  deleteUser(userId) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUser(userId) {
    return this.users.find(user => user.id === userId);
  }

  getAllUsers() {
    return this.users;
  }
}

module.exports = UserManager;