interface IDomain {
    id: string
    hostname: string
    ip?: string
    port?: number
}
interface IDomainForm extends IDomain {
    id?: string
}