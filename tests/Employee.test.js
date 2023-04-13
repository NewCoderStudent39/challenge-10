const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create a new employee with name, id, and email', () => {
            const name = 'Isaac';
            const id = 1;
            const email = 'eggroll@panda.com';

            const newEmployee = new Employee(name, id, email);

            expect(newEmployee instanceof Employee).toBe(true);
            expect(newEmployee.name).toEqual('Isaac');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('eggroll@panda.com');
        });
    });
});