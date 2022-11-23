export type CompanyType = {
    id: number
    companyName: string
    companyLogo: string
    visitorsCounter: number
    transactionsCounter: number
    companyStatus: 'active' | 'inactive' | 'archive' 
    ownerAccount: string
}

export type TableFieldsHeadersType = {
    name?: string
    value: string
}

export type TableDataType = {
    [key: string]: string | number | boolean 
}

export type CompanyFilterType = {
    name: string
    value: 'all' | 'active' | 'inactive' | 'archive' 
}

export type AdminPanelsNavType = {
    id: number
    name: string
}

export type LoyaDataType = {
    companyList: Array<CompanyType>
    companyFilters: Array<CompanyFilterType>
    fieldsHeaders: Array<TableFieldsHeadersType>
    adminPanelNav: Array<AdminPanelsNavType>
}