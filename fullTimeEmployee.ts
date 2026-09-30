// Author: Gamaliel Azali
// Course: Front-end Frameworks
// Assignment: 1
// Date: September 28, 2026

    import { Employee } from './employee.ts';
    import type { IEmployee } from './iEmployee.ts';

        export class FullTimeEmployee extends Employee implements IEmployee {
        public salary: number;
        public bonus: number;
        public overtimeHours: number;

        constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number, salary: number, bonus: number, overtimeHours: number) {
        super(ssn, lastName, firstName, address, rank, age);
           this.salary = salary;
           this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }

          private calculateSalary(): number {
        const hourlyRate: number = this.salary / 40;
        let multiplier: number = 0;

               if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            multiplier = 1.25;
        } else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            multiplier = 1.5;
        } else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            multiplier = 1.75;
        } else if (this.overtimeHours > 30) {
            multiplier = 2;
        }

        return hourlyRate * this.overtimeHours * multiplier;
    }

               calculateCompensation(): number {
    return this.salary + this.bonus + this.calculateSalary();
    }

    displayInformation(): string {
        return `Full Time Employee: ${this.firstName} ${this.lastName}, Rank ${this.rank}, Compensation ${this.calculateCompensation()}`;
    }

    saveEmployee(): void {
        const ageOk: boolean = this.validateAge();
        const rankOk: boolean = this.validateRank();
        const ssnOk: boolean = this.validateSSN();

            if (ageOk && rankOk && ssnOk) {
            console.log('Full time employee saved');
        } else {
            console.log('Full time employee not saved');
          }
      
      
      
        } 
      
     


}