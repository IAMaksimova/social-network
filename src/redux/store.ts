

export type PagesType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebar: SidebarTypes
}
//profilePage
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: UserProfileType | null
    status: string
}
export type PostsType = {
    message: string
    likeCounter: number
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        [key: string] : string | null
        // "facebook": "facebook.com"
        // "website": null
        // "vk": "vk.com/dimych"
        // "twitter": "https://twitter.com/@sdf"
        // "instagram": "instagra.com/sds"
        // "youtube": null
        // "github": "github.com"
        // "mainLink": null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

//dialoguePage
export type DialoguesPageType = {
    dialogues: DialogueType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type DialogueType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

//sidebar
export type SidebarTypes = {
    menu: MenuType[]
    friends: FriendsType[]
}

export type MenuType = {
    menuItem: string
    path: string
}

export type FriendsType = {
    id: number
    name: string
}

export type ActionType = {
    type: string
    payload: any
}

//store
export type StoreRootType = {
    _state: PagesType
    getState: () => PagesType
    _callSubscriber: (state: PagesType) => void
    addPost: () => void
    fixedNewPostText: (newPostText: string) => void
    subscribe: (observer: (state: PagesType) => void) => void
    dispatch: (action: ActionType) => void
}



