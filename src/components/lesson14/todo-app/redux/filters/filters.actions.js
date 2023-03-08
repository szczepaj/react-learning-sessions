import {createAction} from "@reduxjs/toolkit";

export const setStatusFilterAction = createAction('filters/setStatusFilter', status => ({
    payload: { status }
}))

// module/action
// MODULE_ACTION_NAME