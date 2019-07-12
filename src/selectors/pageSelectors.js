import { createSelector } from "reselect";

export const getPage = state => state.page || {}

export const getCurrentPage = createSelector(
    getPage,
    (page) => page.current
);