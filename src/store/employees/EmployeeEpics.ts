import { PayloadAction } from "@reduxjs/toolkit";
import {Epic, StateObservable, ofType, combineEpics} from "redux-observable";
import { mergeMap, from, map } from "rxjs";
import Api from "../../api/Api";
import { StoreState } from "../store";
import { FETECH_EMPLOYEE_ACTION, ADD_EMPLOYEE_ACTION, UPDATE_EMPLOYEE_ACTION, DELETE_EMPLOYEE_ACTION, FETCH_ALL_EMPLOYEES_ACTION } from "./EmployeeActions";
import { setCurrentEmployeeStoreAction, setCurrentEmployeesStoreAction} from './EmployeeStore';
import { Employee, EmployeeRequest } from "../../interfaces/Employee";
import {ApiError} from "../../utils/GeneralFunctions";

const fetchEmployeeEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(FETECH_EMPLOYEE_ACTION),
    mergeMap(({payload}: PayloadAction<EmployeeRequest>) =>
    from(Api.Employees.Get(payload))
    .pipe(
        map(currentEmployee => setCurrentEmployeeStoreAction({
            currentEmployee,  
        })),
        ApiError("Couldn't bring employee")
    ))
);

const fetchAllEmployeeEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(FETCH_ALL_EMPLOYEES_ACTION),
    mergeMap(({payload}: PayloadAction<Employee[]>)  =>
    from(Api.Employees.GetAll(payload!))
    .pipe(
        map(employees => setCurrentEmployeesStoreAction({
            employees,  
        })),
        ApiError("Couldn't bring  all employees")
    ))
);
const addEmployeeEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(ADD_EMPLOYEE_ACTION),
    mergeMap(({payload}: PayloadAction<EmployeeRequest>) =>
    from(Api.Employees.Add(payload))
    .pipe(
        map(employees => setCurrentEmployeesStoreAction({
            employees,  
        })),
        ApiError("Couldn't add employee")
    ))
);
const updateEmployeeEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(UPDATE_EMPLOYEE_ACTION),
    mergeMap(({payload}: PayloadAction<EmployeeRequest>) =>
    from(Api.Employees.Update(payload))
    .pipe(
        map(employees => setCurrentEmployeesStoreAction({
            employees,  
        })),
        ApiError("Couldn't update employee")
    ))
);
const deleteEmployeeEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(DELETE_EMPLOYEE_ACTION),
    mergeMap(({payload}: PayloadAction<EmployeeRequest>) =>
    from(Api.Employees.Delete(payload))
    .pipe(
        map(employees => setCurrentEmployeesStoreAction({
            employees,  
        })),
        ApiError("Couldn't delete employee")
    ))
);

export default combineEpics(
    fetchEmployeeEpic,
    fetchAllEmployeeEpic,
    addEmployeeEpic,
    updateEmployeeEpic,
    deleteEmployeeEpic,
)