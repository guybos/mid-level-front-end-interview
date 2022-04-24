import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import EmployeeStore from "./employees/EmployeeStore";
import EmployeeEpics from "./employees/EmployeeEpics";
import ManagerStore from "./managers/managerStore";
import managerEpics from "./managers/managerEpics";

const reducer = combineReducers({
    EmployeeStore,
    ManagerStore,
});

const rootEpic = combineEpics(
    EmployeeEpics,
    managerEpics,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware),
);

epicMiddleware.run(rootEpic);

export type StoreState  = ReturnType<typeof store.getState>;

export const StoreSelector = (state: StoreState) => state;

export default store;