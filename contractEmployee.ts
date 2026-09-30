// Author: Gamaliel Azali
// Course: Front-end Frameworks
// Assignment: 1
// Date: September 28, 2026

   import { Employee } from './employee.ts';
   import type { IEmployee } from './iEmployee.ts';

      export class ContractEmployee extends Employee implements IEmployee {
          public hours:   number;
        public hourlyRate:   number;

       constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number, hours: number, hourlyRate: number) {
           super(ssn, lastName, firstName, address, rank, age);
            this.hours = hours;
           this.hourlyRate = hourlyRate;
    }

          calculateCompensation(): number {
              if (this.hours > 40) {
            const overtimeHours: number = this.hours - 40;
            return (40 * this.hourlyRate) + (overtimeHours * this.hourlyRate * 1.5);
        }
                return this.hours * this.hourlyRate;
    }

          
    displayInformation(): string {
           return `Contract Employee: ${this.firstName} ${this.lastName}, Rank ${this.rank}, Compensation ${this.calculateCompensation()}`;
    
    
        }

        saveEmployee(): void {
           const ageOk: boolean =    this.validateAge();
            const rankOk: boolean =   this.validateRank();
        const ssnOk: boolean =     this.validateSSN();

                 if (ageOk && rankOk && ssnOk) {
             console.log('Contract employee saved');
                  } else {
                   console.log('Contract employee not saved');
        
        }
    
    }


}