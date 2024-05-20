import React from 'react';
import {ActionType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogues-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogues} from "./Dialogues";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



// export const DialoguesContainer = (props: ReduxStore) => {
//     const state = props.store.getState().dialoguesReducer
//     const onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     const onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (
//         <Dialogues updateNewMessageBody={onNewMessageChange}
//                    sendMessage={onSendMessageClick}
//                    dialoguesPage={state}
//         />
//     );
// };

const mapStateToProps = (state: AppStateType) => {
    return {
        dialoguesPage: state.dialoguesReducer,
        isAuth: state.authReducer.isAuth
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

// const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogues)
