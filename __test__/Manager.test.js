const Manager = require('../lib/Manager');

test('create an Manager object', () =>{
    const manager = new Manager('Jane', 2468, 'jane.doe@ance.com', 1234);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role',() =>{
    const manager = new Manager('Jane', 2468, 'jane.doe@ance.com', 1234);

    expect(manager.getRole()).toEqual('Manager');
})