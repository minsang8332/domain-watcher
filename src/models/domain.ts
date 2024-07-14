import _ from 'lodash'
import { URL } from 'url'
import ElectronStore from "electron-store";
const store = new ElectronStore()
const findAll = (): IDomain[] => {
    let domains = store.get('domains') as IDomain[]
    if (_.isEmpty(domains)) {
        domains = []
    }
    return domains
}
const findOne = (hostname: string): IDomain | undefined => {
    let domainOne: IDomain | undefined
    const domains: IDomain[] = store.get('domains') as IDomain[]
    if (!(domains && domains.length > 0)) {
        return domainOne
    }
    domainOne = domains.find((d: IDomain) => d.hostname == hostname)
    if (_.isNil(domainOne)) {
        return domainOne
    }
    return domainOne
}
const toURL = (domain: IDomain) => {
    const url = new URL('http://127.0.0.1')
    url.protocol = domain.port === 443 ? 'https' : 'http'
    url.hostname = domain.hostname
    return url.origin
}
export default {
    findAll,
    findOne,
    toURL
}