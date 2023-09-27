const UserManager = require('../src/helpers/userManager');

test('Agrega un usuario correctamente', () => {
  const userManager = new UserManager();
  userManager.addUser({ id: 1, name: 'Alice' });

  const users = userManager.getAllUsers();
  expect(users.length).toBe(1);
  expect(users[0].name).toBe('Alice');
});

test('Elimina un usuario correctamente', () => {
  const userManager = new UserManager();
  userManager.addUser({ id: 1, name: 'Alice' });
  userManager.addUser({ id: 2, name: 'Bob' });

  userManager.deleteUser(1);

  const users = userManager.getAllUsers();
  expect(users.length).toBe(1);
  expect(users[0].name).toBe('Bob');
});

test('Obtiene un usuario correctamente', () => {
  const userManager = new UserManager();
  userManager.addUser({ id: 1, name: 'Alice' });

  const user = userManager.getUser(1);
  expect(user).toBeDefined();
  expect(user.name).toBe('Alice');
});

test('Obtiene todos los usuarios correctamente', () => {
  const userManager = new UserManager();
  userManager.addUser({ id: 1, name: 'Alice' });
  userManager.addUser({ id: 2, name: 'Bob' });

  const users = userManager.getAllUsers();
  expect(users.length).toBe(2);
});