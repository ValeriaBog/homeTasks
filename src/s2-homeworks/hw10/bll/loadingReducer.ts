const initState = {
    isLoading: false,
}


type ActionTypes = LoadingActionType

export type InitialStateType = {
    isLoading: boolean
}

export const loadingReducer = (state:InitialStateType  = initState, action: ActionTypes): InitialStateType => { // fix any

    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return  {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
