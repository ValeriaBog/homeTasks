import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return [...state].sort((a: any, b: any) => a.name > b.name? 1 : -1)
            }else if (action.payload === 'down'){
                return [...state].sort((a: any, b: any) => a.name < b.name? 1 : -1)
            }
            return state
            // need to fix
        }
        case 'check': {
            return state.filter((e: any) => e.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
