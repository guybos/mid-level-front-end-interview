import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store";
import { CurrentEmployeeState } from "./EmployeeStore";

const EmployeeSelector = (state: StoreState) => state.EmployeeStore;

export const currentEmployeeSelector = createSelector([EmployeeSelector],
    (state: CurrentEmployeeState) => state);