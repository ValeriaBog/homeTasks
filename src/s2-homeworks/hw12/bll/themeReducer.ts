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
            return {...state, themeId: Number(action.id)}

        default:
            return state
    }
}
type changeThemeIdType ={
    type: 'SET_THEME_ID',
    id: string
}

export const changeThemeId = (id: string): changeThemeIdType => ({type: 'SET_THEME_ID', id}) // fix any
