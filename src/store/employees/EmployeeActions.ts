import { PayloadAction } from "@reduxjs/toolkit";
import { EmployeeRequest } from "../../interfaces/Employee";

export const FETECH_EMPLOYEE_ACTION = 'fetchEmployeeAction';
export const FETCH_ALL_EMPLOYEES_ACTION = 'fetchAllEmployeeAction'
export const ADD_EMPLOYEE_ACTION = 'addEmployeeAction';
export const UPDATE_EMPLOYEE_ACTION = 'updateEmployeeAction';
export const DELETE_EMPLOYEE_ACTION = 'deleteEmployeeAction';

export const fetchEmployeeAction = (request: EmployeeRequest): PayloadAction<EmployeeRequest> => ({
    type: FETECH_EMPLOYEE_ACTION,
    payload: request
})

export const fetchAllEmployeeAction = () => ({
    type: FETCH_ALL_EMPLOYEES_ACTION,
})

export const addEmployeeAction = (request: EmployeeRequest): PayloadAction<EmployeeRequest> => ({
    type: ADD_EMPLOYEE_ACTION,
    payload: request
})

export const updateEmployeeAction = (request: EmployeeRequest): PayloadAction<EmployeeRequest> => ({
    type: UPDATE_EMPLOYEE_ACTION,
    payload: request
})

export const deleteEmployeeAction = (request: EmployeeRequest): PayloadAction<EmployeeRequest> => ({
    type: DELETE_EMPLOYEE_ACTION,
    payload: request
})