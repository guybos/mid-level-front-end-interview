import { PayloadAction } from "@reduxjs/toolkit";
import { CurrentManagerState } from "./managerStore";

const setCurrentManagersStoreAction = (state: CurrentManagerState, action: PayloadAction<CurrentManagerState>) => {
    state.managers = action.payload.managers
};

const setCurrentManagerStoreAction = (state: CurrentManagerState, action: PayloadAction<CurrentManagerState>) => {
    state.currentManager = action.payload.currentManager
};

const employeeReducers = {
    setCurrentManagersStoreAction,
    setCurrentManagerStoreAction
};

export default employeeReducers;