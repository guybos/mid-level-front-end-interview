import { createSlice } from "@reduxjs/toolkit";
import { Manager } from "../../interfaces/Manager";
import managerReducers from "./managerReducers";

export interface CurrentManagerState{
    currentManager?: Manager,
    managers?: Manager[],
};

const initialState: CurrentManagerState ={
    managers: [],
};

const managerSlice = createSlice({
    name: 'CurrentManager',
    initialState,
    reducers: managerReducers,
});

export default managerSlice.reducer;

export const {
    setCurrentManagersStoreAction,
    setCurrentManagerStoreAction,
} = managerSlice.actions;