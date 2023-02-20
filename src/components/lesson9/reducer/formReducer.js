
export const formReducer = (state, action) => {
    switch(action.type) {
        case 'increment_age':
            return {
                ...state,
                age: state.age + 1
            }
        case 'decrement_age':
            return {
                ...state,
                age: state.age - 1
            }
        case 'name_change':
            return {
                ...state,
                name: action.name
            }
    }


    return state
}