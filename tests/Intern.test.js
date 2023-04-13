const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('Should create a new intern with name, id, email, and school', () => {
            const name = 'Isaac';
            const id = 1;
            const email = 'eggroll@panda.com';
            const school = 'University of Arizona';

            const newEmployee = new Intern(name, id, email, school);

            expect(newEmployee instanceof Intern).toBe(true);
            expect(newEmployee.name).toEqual('Isaac');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('eggroll@panda.com');
            expect(newEmployee.school).toEqual('University of Arizona');
        });
    });
});