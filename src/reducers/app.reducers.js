import { STORE_USER_DATA } from '../actions/app.action';

const initialState = {
    user: false,
    loggedIn: false
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.user,
                loggedIn: !!action.user
            };
    }

    return {
        ...initialState
    };
}

export default appReducer;