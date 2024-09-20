const employee = [{
        id: 1,
        name: "John",
        days: 25,
        salaryId: 2
    },
    {
        id: 2,
        name: "Josh",
        days: 29,
        salaryId: 1
    }
];

const salary = [{
        salaryId: 1,
        gross: {
            base: 58000,
            hra: 15000
        },
        deduction: {
            tds: 5000,
            pf: 1500
        }
    },

    {
        salaryId: 2,
        gross: {
            base: 88000,
            hra: 25000
        },
        deduction: {
            tds: 10000,
            pf: 1500
        }
    }
];

function calculateSalary() {
    employee.forEach(emp => {
        let empSalary = salary.find(s => s.salaryId === emp.salaryId);
        let grossSalary = empSalary.gross.base + empSalary.gross.hra;
        let totalDeductions = empSalary.deduction.tds + empSalary.deduction.pf;
        let netSalary = grossSalary - totalDeductions;
        let onedaysalary = netSalary / 31;
        let a = onedaysalary.toFixed(2);
        let dayssalary = emp.days * a;

        console.log(`Employee: ${emp.name}`);
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`TotalDeductions: ${totalDeductions}`);
        console.log(`net salary: ${netSalary}`);
        console.log(`onedaysalary: ${a}`);
        console.log(`daysSalary: ${dayssalary}`);
    });
}
calculateSalary();