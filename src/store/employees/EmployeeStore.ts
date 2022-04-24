import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../interfaces/Employee";
import employeeReducers from "./EmployeeReducer";

export interface CurrentEmployeeState{
    currentEmployee?: Employee,
    employees?: Employee[],
};

const initialState: CurrentEmployeeState ={
    employees: [],
};

const employeeSlice = createSlice({
    name: 'CurrentEmployee',
    initialState,
    reducers: employeeReducers,
});

export default employeeSlice.reducer;

export const {
    setCurrentEmployeesStoreAction,
    setCurrentEmployeeStoreAction
} = employeeSlice.actions;