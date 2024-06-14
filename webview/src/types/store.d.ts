interface IAppState {
    drawer: boolean
    modal: boolean
    modalProps: IAppModalProps
    menu: boolean
    menuProps: IAppMenuProps
}
interface IDiaryState {
    diaries: IDiary[]
}
interface IAppMenuProps {
    path: string | null
    isDir: boolean
    pageX: number
    pageY: number
    items?: IAppMenuItem[]
}
interface IAppMenuItem {
    name: string
    icon: string
    color: string
    desc: string
    shortcut: string
    cb?: () => void
}
interface IAppModalProps {
    message: string | string[] | null
    ok: (() => void) | null
}
interface IDiary {
    path: string
    isDir: boolean
    createdAt: number
    updatedAt: number
}
interface IDiaryWithPreview extends IDiary {
    preview: string
}
