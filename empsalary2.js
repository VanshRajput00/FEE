let employees = [{
        id: 1,
        name: 'John',
        days: 30,
        salaryID: 2,
    },
    {
        id: 2,
        name: 'Josh',
        days: 28,
        salaryId: 1,
    }
]
let salary = [{
        salaryId: 1,
        gross: {
            base: 50000,
            hra: 15000,
        },
        deducation: {
            tds: 5000,
            pf: 1500,
        }
    },
    {
        salaryId: 2,
        gross: {
            base: 60000,
            hra: 18000,
        },
        deducation: {
            tds: 6000,
            pf: 1800,
        }
    }
]
console.log(employees[0].salaryID);
let c = employees[0].salaryID;
let d = employees[1].salaryID;
salary.forEach((ele) => {
    if (ele.salaryId == c) {
        let gross = ele.gross.base + ele.gross.hra;
        let deducation = ele.deducation.tds + ele.deducation.pf;

        let x = (gross - deducation) / 31;
        console.log("salary = ", Math.floor(x) * 28);
        console.log("josh")
    }
})
salary.forEach((ele) => {
    if (ele.salaryId == d) {
        let gross = ele.gross.base + ele.gross.hra;
        let deducation = ele.deducation.tds + ele.deducation.pf;

        let x = (gross - deducation) / 31;
        console.log("salary = ", Math.floor(x) * 30);
        console.log("john")
    }
})