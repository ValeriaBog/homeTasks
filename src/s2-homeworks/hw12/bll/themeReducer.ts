export type InitStateType={
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
}

type actionType = changeThemeIdType

export const themeReducer = (state = initState, action: actionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}
type changeThemeIdType ={
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
