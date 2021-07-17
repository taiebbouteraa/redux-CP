import { ADDTASK, COMPLETETASK, DELETETASK, EDIT } from "./actionTypes"

const inisialState = {
    myTasks: [{
        id: Math.random(),
        description: 'To Do 1',
        isDone: true,
    },
    {
        id: Math.random(),
        description: 'To Do 2',
        isDone: false,
    },
    {
        id: Math.random(),
        description: 'To Do 3',
        isDone: false,
    }]
}

const reducers = (state = inisialState, { type, payload }) => {
    switch (type) {
        case DELETETASK:
            return {
                ...state, myTasks: state.myTasks.filter((el) => el.id !== payload)
            }
        case COMPLETETASK:
            return {
                ...state, myTasks: state.myTasks.map((el) => el.id === payload ? { ...el, isDone: !el.isDone } : el)
            }
        case ADDTASK:
            return {
                ...state, myTasks: [...state.myTasks, payload]
            }
        case EDIT:
            return {
                ...state, myTasks: state.myTasks.map((el) => (el.id === payload.id ? payload : el))
            }


        default:
            return state
    }
}

export default reducers;