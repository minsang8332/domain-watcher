interface IDomain {
    id: string
    hostname: string
    port: number
    cycle: number
    ips?: string[]
}
interface IDomainForm extends IDomain {r
    cycle?: number
}