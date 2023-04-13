const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create a new engineer with name, id, email, and GitHub', () => {
            const name = 'Isaac';
            const id = 1;
            const email = 'eggroll@panda.com';
            const gitHub = 'EggRollCoding';

            const newEmployee = new Engineer(name, id, email, gitHub);

            expect(newEmployee instanceof Engineer).toBe(true);
            expect(newEmployee.name).toEqual('Isaac');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('eggroll@panda.com');
            expect(newEmployee.gitHub).toEqual('EggRollCoding');
        });
    });
});