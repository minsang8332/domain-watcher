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
const findByHostname = (hostname: string): IDomain | false => {
    const domains: IDomain[] = store.get('domains') as IDomain[]
    if (!(domains && domains.length > 0)) {
        return false
    }
    const domain = domains.find((d: IDomain) => d.hostname == hostname)
    if (_.isNil(domain)) {
        return false
    }
    return domain
}
const insertOne = (domainForm: IDomainForm) => {
    if (findByHostname(domainForm.hostname)) {
        return false
    }
    let domains = store.get('domains') as IDomain[]
    if (_.isEmpty(domains)) {
        domains = []
    }
    const id = commonUtils.randomHex()
    if (domains.find((d: IDomain) => d.id == id)) {
        return false
    }
    const domain: IDomain = {
        id,
        hostname: domainForm.hostname,
        port: domainForm.port,
        ips: domainForm.ips ?? [],
        cycle: 10000
    }
    domains.push(domain)
    store.set('domains', domains)
    return true
}
const updateOne = (domainForm: IDomainForm) => {
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
    domain.ips = domainForm.ips ?? []
    domain.cycle = domainForm.cycle ?? 10000
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
const toURL = (domain: IDomain) => {
    const url = new URL('http://127.0.0.1')
    url.protocol = domain.port === 443 ? 'https' : 'http'
    url.hostname = domain.hostname
    return url.origin
}
export default {
    findAll,
    findById,
    findByHostname,
    insertOne,
    updateOne,
    deleteOne,
    toURL
}