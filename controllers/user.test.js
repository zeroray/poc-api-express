const { index, addUser } = require('./user');

test('It should response that index method is defined', async () => {
    expect(index).toBeDefined();
});

test('It should response that addUser method is defined', async () => {
    expect(addUser).toBeDefined();
});
