export interface Employee{
    id:number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    ip_address: string,
}

export interface EmployeeRequest{
    employee: Employee,
    all: Employee[],
}