interface IDomainState {
    domains: IDomain[]
}
interface IDomain {
    id: string
    hostname: string
    ip: string
    port: number
    cycle: number
}