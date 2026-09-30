// Author: Gamaliel Azali
// Course: Front-end Frameworks
// Assignment: 1
// Date: September 28, 2026

import { FullTimeEmployee } from './fullTimeEmployee.ts';
import { ContractEmployee } from './contractEmployee.ts';

const fullTime: FullTimeEmployee = new FullTimeEmployee('123-456-789', 'Azali', 'Gamaliel', '10 Main Street', 3, 25, 52000, 2000, 12);
const contract: ContractEmployee = new ContractEmployee('987-654-321', 'Smith', 'John', '22 King Street', 2, 40, 45, 30);

fullTime.saveEmployee();
console.log(fullTime.displayInformation());

contract.saveEmployee();
console.log(contract.displayInformation());

const badEmployee: ContractEmployee = new ContractEmployee('12345', 'Doe', 'Jane', '5 Queen Street', 9, 14, 20, 25);




badEmployee.saveEmployee();