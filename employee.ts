// Author: Gamaliel Azali
// Course: Front-end Frameworks
// Assignment: 1
// Date: September 28, 2026

export abstract class Employee {
    public ssn: string;
    public lastName: string;
    public firstName: string;
    public address: string;
    public rank: number;
    public age: number;

        constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number) {
        this.ssn = ssn;
          this.lastName =   lastName;
            this.firstName =   firstName;
          this.address =  address;
          this.rank =   rank;
         this.age =   age;
    }

    protected validateAge(): boolean {
        if (this.age < 16) {
            console.log('Age must be greater than or equal to 16');
            return false;
        }
        return true;
    }
  



    protected validateRank(): boolean {
        if (this.rank < 1 || this.rank > 5) {
            console.log('Rank must be between 1 and 5 inclusive');
            return false;
        }
        return true;
    }

        protected validateSSN(): boolean {
        if (this.ssn.length !== 11) {
            console.log('SSN must match the pattern ###-###-###');
            return false;
        }

        if (this.ssn[3] !== '-' || this.ssn[7] !== '-') {
            console.log('SSN must match the pattern ###-###-###');
            return false;
        }

        return true;
    }
}