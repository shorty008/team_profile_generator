const Employee = require('../lib/Employee');

// create an employee object

test('create a new Employee object', () => {
    const employee = new Employee('Jane', 2468, 'jane.doe@acne.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test ('gets employee name', () => {
    const  employee = new Employee('Jane', 2468, 'jane.doe@acne.com');

    expect(employee.getName()).toEqual(expact.any(String));
});

test ('gests employee id', () => {
    const  employee = new Employee('Jane', 2468, 'jane.doe@acne.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

test ('gets employee email', () => {
    const  employee = new Employee('Jane', 2468, 'jane.doe@acne.com');

    expect(employee.getEmail()).toEqual(expact.any(String));
});

test ('gets employee role', () => {
    const  employee = new Employee('Jane', 2468, 'jane.doe@acne.com');

    expect(employee.getRole()).toEqual('Employee');
});