import {useEffect, useState, FC } from 'react'

import CompanyTable from "./CompanyTable";
import CompanyFilter from "./CompanyFilter";
import CompanyPageHeader from "./CompanyPageHeader";

import { CompanyType } from '../../types';
import loyaTestData from './../../data/loyaTestData';

const CompanyPage = () => {

    const { companyFilters, companyList, fieldsHeaders } = loyaTestData

    const [tableData, setTableData] = useState<Array<CompanyType>>(companyList);
    const [filter, setFilter] = useState<'all' | 'active' | 'inactive' | 'archive'>('all');
    const [searchValue, setSearchValue] = useState<string>('');


    useEffect(
        () => {
            let filteredCompany: Array<CompanyType> = filter !== 'all' ? companyList.filter(item => item.companyStatus === filter) : companyList;

            let searchResult: Array<CompanyType> = filteredCompany.filter(
                item => item.ownerAccount.toLowerCase().includes(searchValue.toLowerCase())
            );
            
            searchResult.length > 0 ? setTableData(searchResult) : setTableData([]);
            !searchValue && setTableData(filteredCompany);
        },
        [searchValue, filter]
    )

    return (
        <>  
            <CompanyPageHeader searchFunction={setSearchValue}/>
            <CompanyFilter setFilter={setFilter} currentFilter={filter} filters={companyFilters}/>
            <CompanyTable tableData={tableData} fieldsHeaders={fieldsHeaders}/>
        </>
    )
}

export default CompanyPage;