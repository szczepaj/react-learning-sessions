export const FilterActions = {
    SET_STATUS: 'filters/setStatusFilter'
}

export const setStatusFilterAction = status => ({
    type: FilterActions.SET_STATUS,
    payload: { status }
})

// module/action
// MODULE_ACTION_NAME