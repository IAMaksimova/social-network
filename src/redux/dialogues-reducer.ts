import {ActionType, DialoguesPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogues: [
        {name: 'Dima', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Victor', id: 3},
        {name: 'Valera', id: 4}
    ],
    messages: [
        {message: 'Hello', id: 1},
        {message: 'Aloha how are you', id: 2},
        {message: 'Privet', id: 3},
        {message: 'Salo', id: 4}
    ],
    newMessageBody: 'hehehe'
}

const dialoguesReducer = (state: DialoguesPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY : {
            return {...state, newMessageBody: action.payload}
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return  {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: state.messages.length + 1, message: body}],
            }
        }
        default : {
            return state
        }
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE, payload: ''})
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, payload: body})


export default dialoguesReducer