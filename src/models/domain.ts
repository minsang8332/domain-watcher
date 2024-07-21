import _ from 'lodash'
import { URL } from 'url'
import ElectronStore from "electron-store";
import commonUtils from '@/tools/common';
const store = new ElectronStore()
const findAll = (): IDomain[] => {
    let domains = store.get('domains') as IDomain[]
    if (_.isEmpty(domains)) {
        domains = []
    }
    return domains
}
const findById = (id: string): IDomain | false => {
    const domains: IDomain[] = store.get('domains') as IDomain[]
    if (!(domains && domains.length > 0)) {
        return false
    }
    const domain = domains.find((d: IDomain) => d.id == id)
    if (_.isNil(domain)) {
        return false
    }
    return domain
}
const findByHostname = (hostname: string): IDomain[] | false => {
    const domains: IDomain[] = store.get('domains') as IDomain[]
    if (!(domains && domains.length > 0)) {
        return false
    }
    const filtered = domains.filter((d: IDomain) => d.hostname == hostname)
    if (_.isNil(filtered)) {
        return false
    }
    return filtered
}
const insertOne = (domainForm: IDomainForm) => {
    let domains = store.get('domains') as IDomain[]
    if (_.isEmpty(domains)) {
        domains = []
    }
    if (domains.find((d: IDomain) => d.hostname == domainForm.hostname && d.port == domainForm.port)) {
        return false
    }
    const id = commonUtils.randomHex()
    if (domains.find((d: IDomain) => d.id == id)) {
        return false
    }
    const domain: IDomain = {
        id,
        hostname: domainForm.hostname,
        ip: domainForm.ip,
        port: domainForm.port,
    }
    domains.push(domain)
    store.set('domains', domains)
    return true
}
const updateOne = (domainForm: IDomainForm) => {
    if (_.isNil(domainForm.id)) {
        return false
    }
    let domain = findById(domainForm.id)
    if (!domain) {
        return false
    }
    const domains = store.get('domains') as IDomain[]
    if (_.isEmpty(domains)) {
        return false
    }
    domain.hostname = domainForm.hostname
    domain.port = domainForm.port
    domain.ip = domainForm.ip
    store.set('domains', domains)
    return true
}
const deleteOne = (id: string) => {
    if (!findById(id)) {
        return false
    }
    let domains = store.get('domains') as IDomain[]
    if (!(domains && domains.length > 0)) {
        return false
    }
    domains.filter((d: IDomain) => d.id != id)
    store.set('domains', domains)
}
const clear = () => {
    store.set('domains', [])
}
const toURL = (ip: string, port: number) => {
    const url = new URL('http://127.0.0.1')
    url.protocol = port === 443 ? 'https' : 'http'
    url.port = _.toString(port)
    url.hostname = ip
    return url.origin
}
export default {
    findAll,
    findById,
    findByHostname,
    insertOne,
    updateOne,
    deleteOne,
    clear,
    toURL
}