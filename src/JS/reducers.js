import Task from "../components/Task"
import { ADDTASK, COMPLETETASK, DELETETASK, EDITTASK, FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from "./actionTypes"

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
        // case FILTER_DONE:
        //     return {
        //         ...state, myTasks: state.myTasks.filter((el) => el.isDone === true)
        //     }
        // case FILTER_NOT_DONE:
        //     return {
        //         ...state, myTasks: state.myTasks.filter((el) => el.isDone === false)
        //     }
        // case FILTER_ALL:
        //     return {
        //         ...state, myTasks: state.myTasks.push(...state.myTasks, state.myTasks.isDone === false)
        //     }
        case EDITTASK:
            return {
                ...state, myTasks: state.myTasks.map((el) => el.description)
            }


        default:
            return state
    }
}

export default reducers;