import {ActionType, PagesType, SidebarTypes} from "./store";

const initialState = {
    menu: [
        {menuItem: 'profile', path: '/profileInfo'},
        {menuItem: 'messages', path: '/messages'},
        {menuItem: 'news', path: '/news'},
        {menuItem: 'music', path: '/music'},
        {menuItem: 'settings', path: '/settings'},
        {menuItem: 'friends', path: '/friends'}
    ],
    friends: [
        {name: 'Victor', id: 1},
        {name: 'Sveta', id: 2},
        {name: 'Igor', id: 3}
    ]
}
 const sidebarReducer = (state: SidebarTypes = initialState, action: ActionType) => {
    return state
}
export default sidebarReducer