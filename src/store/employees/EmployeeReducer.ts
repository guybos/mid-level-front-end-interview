import { PayloadAction } from "@reduxjs/toolkit";
import { CurrentEmployeeState } from "./EmployeeStore";

const setCurrentEmployeesStoreAction = (state: CurrentEmployeeState, action: PayloadAction<CurrentEmployeeState>) => {
    state.employees = action.payload.employees
};

const setCurrentEmployeeStoreAction = (state: CurrentEmployeeState, action: PayloadAction<CurrentEmployeeState>) => {
    state.currentEmployee = action.payload.currentEmployee
};

const employeeReducers = {
    setCurrentEmployeesStoreAction,
    setCurrentEmployeeStoreAction
};

export default employeeReducers;