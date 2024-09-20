// write your JS code here
const salary = [{
        name: 'John',
        payable: {
            base: 32500,
            hra: 1200,
            da: 20050
        },
        deduction: {
            pf: 1800,
            tds: 1200
        }
    },
    {
        name: 'Annie',
        payable: {
            base: 33500,
            hra: 1800,
            da: 25050
        },
        deduction: {
            pf: 2200,
            tds: 3200
        }
    }
];

function calculateSalary(salary) {
    return salary.map(employee => {

        const totalPayable = employee.payable.base + employee.payable.hra + employee.payable.da;

        const totalDeduction = employee.deduction.pf + employee.deduction.tds;

        const netSalary = totalPayable - totalDeduction;

        return `Salary of ${employee.name} is ${netSalary}`;
    });
}