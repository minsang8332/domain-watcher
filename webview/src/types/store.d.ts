interface IAppState {
    drawer: boolean
    modal: boolean
    modalProps: IAppModalProps
    menu: boolean
    menuProps: IAppMenuProps
}
interface IDomainState {
    domains: IDomain[]
}
interface IDomain {
    // minsang8332.shop
    hostname: string
    // [80, 443]
    port: number[]
    // curl 반복 주기
    cicle: number
}