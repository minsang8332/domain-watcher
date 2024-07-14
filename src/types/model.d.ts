interface IDomain {
    // minsang8332.shop
    hostname: string
    // [80, 443]
    port: number
    // 반복 주기
    cycle: number
    subs?: IDomain[]
}