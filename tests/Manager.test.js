const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create a new manager with name, id, email, and phone number', () => {
            const name = 'Isaac';
            const id = 1;
            const email = 'eggroll@panda.com';
            const phoneNum = 5;

            const newEmployee = new Manager(name, id, email, phoneNum);

            expect(newEmployee instanceof Manager).toBe(true);
            expect(newEmployee.name).toEqual('Isaac');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('eggroll@panda.com');
            expect(newEmployee.phoneNum).toEqual(5);
        });
    });
});