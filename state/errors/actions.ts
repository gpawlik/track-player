import { createAction } from "@reduxjs/toolkit";

export const setError = createAction<string>("errors/SET");

export const clearError = createAction("errors/REMOVE");
