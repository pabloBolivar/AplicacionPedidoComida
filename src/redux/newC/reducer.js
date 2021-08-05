const INITIAL_STATE = { error: null, localization: { latitude: 0, longitude: 0 } }
//
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case A:
            return {1};
        case E:
            return {0};
        default: return state
    }
}