export interface Manager{
    id:number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    ip_address: string,
}

export interface ManagerRequest{
    manager: Manager,
    all: Manager[],
}