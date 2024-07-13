import _ from 'lodash'
import ElectronStore from "electron-store";
const store = new ElectronStore()
const findAll = () => {
    let domains = store.get('domains')
    if (_.isEmpty(domains)) {
        domains = []
    }
    return domains
}
const findOne = (name = null) => {
    let domainOne = false
    const domains: any = store.get('domains')
    if (!(domains && domains.length > 0)) {
        return domainOne
    }
    domainOne = domains.find((d: any) => d.name == name)
    if (_.isNil(domainOne)) {
        return domainOne
    }
    return domainOne
}
export default {
    findAll,
    findOne
}