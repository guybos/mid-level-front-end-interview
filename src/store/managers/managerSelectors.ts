import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store";
import { CurrentManagerState } from "./managerStore";

const ManagerSelector = (state: StoreState) => state.ManagerStore;

export const currentManagerSelector = createSelector([ManagerSelector],
    (state: CurrentManagerState) => state);