import { PayloadAction } from "@reduxjs/toolkit";
import {Epic, StateObservable, ofType, combineEpics} from "redux-observable";
import { mergeMap, from, map } from "rxjs";
import Api from "../../api/Api";
import { StoreState } from "../store";
import { FETECH_MANAGER_ACTION, ADD_MANAGER_ACTION, UPDATE_MANAGER_ACTION, DELETE_MANAGER_ACTION, FETECH_ALL_MANAGER_ACTION } from "./managerActions";
import { setCurrentManagerStoreAction, setCurrentManagersStoreAction} from './managerStore';
import { Manager, ManagerRequest } from "../../interfaces/Manager";
import { ApiError } from "../../utils/GeneralFunctions";

const fetchManagerEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(FETECH_MANAGER_ACTION),
    mergeMap(({payload}: PayloadAction<ManagerRequest>) =>
    from(Api.Management.Get(payload))
    .pipe(
        map(currentManager => setCurrentManagerStoreAction({
            currentManager,  
        })),
        ApiError("Couldn't bring manager")
    ))
);

const fetchAllManagerEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(FETECH_ALL_MANAGER_ACTION),
    mergeMap(({payload}: PayloadAction<Manager[]>) =>
    from(Api.Management.GetAll(payload!))
    .pipe(
        map(managers => setCurrentManagersStoreAction({
            managers,  
        })),
        ApiError("Couldn't bring all managers")
    ))
);

const addManagerEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(ADD_MANAGER_ACTION),
    mergeMap(({payload}: PayloadAction<ManagerRequest>) =>
    from(Api.Management.Add(payload))
    .pipe(
        map(managers => setCurrentManagersStoreAction({
            managers,  
        })),
        ApiError("Couldn't add manager")
    ))
);
const updateManagerEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(UPDATE_MANAGER_ACTION),
    mergeMap(({payload}: PayloadAction<ManagerRequest>) =>
    from(Api.Management.Update(payload))
    .pipe(
        map(managers => setCurrentManagersStoreAction({
            managers,  
        })),
        ApiError("Couldn't update manager")
    ))
);
const deleteManagerEpic: Epic = (action$, state$: StateObservable<StoreState>) => action$.pipe(
    ofType(DELETE_MANAGER_ACTION),
    mergeMap(({payload}: PayloadAction<ManagerRequest>) =>
    from(Api.Management.Delete(payload))
    .pipe(
        map(managers => setCurrentManagersStoreAction({
            managers,  
        })),
        ApiError("Couldn't delete manager")
    ))
);

export default combineEpics(
    fetchManagerEpic,
    fetchAllManagerEpic,
    addManagerEpic,
    updateManagerEpic,
    deleteManagerEpic,
)