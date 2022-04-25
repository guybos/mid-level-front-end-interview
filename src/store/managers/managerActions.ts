import { PayloadAction } from "@reduxjs/toolkit";
import { Manager, ManagerRequest } from "../../interfaces/Manager";

export const FETECH_MANAGER_ACTION = 'fetchManagerAction';
export const FETECH_ALL_MANAGER_ACTION = 'fetchAllManagerAction';
export const ADD_MANAGER_ACTION = 'addManagerAction';
export const UPDATE_MANAGER_ACTION = 'updateManagerAction';
export const DELETE_MANAGER_ACTION = 'deleteManagerAction';

export const fetchManagerAction = (request: ManagerRequest): PayloadAction<ManagerRequest> => ({
    type: FETECH_MANAGER_ACTION,
    payload: request
})

export const fetchAllManagerAction = (request?: Manager[]): PayloadAction<Manager[]> => ({
    type: FETECH_ALL_MANAGER_ACTION,
    payload: request!,
})

export const addManagerAction = (request: ManagerRequest): PayloadAction<ManagerRequest> => ({
    type: ADD_MANAGER_ACTION,
    payload: request
})

export const updateManagerAction = (request: ManagerRequest): PayloadAction<ManagerRequest> => ({
    type: UPDATE_MANAGER_ACTION,
    payload: request
})

export const deleteManagerAction = (request: ManagerRequest): PayloadAction<ManagerRequest> => ({
    type: DELETE_MANAGER_ACTION,
    payload: request
})