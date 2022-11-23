
import { FC } from 'react';
// import { CompanyFilterType } from '../../types';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import search from './../../media/search.svg';

import SearchString from './../Forms/SearchString'

type OwnProps = {
    searchFunction: (status: string) => void
}

const CompanyPageHeader: FC<OwnProps> = ({searchFunction}) => {
    return (
        
        <div className={['d-flex', 'justify-content-between', 'padding-container'].join(' ')}>

            <SearchString 
                searchId={'companySearch'} 
                searchTitle={'Напишите название компании для поиска'} 
                searchPlaceholder={'поиск компании'} 
                onChangeFunction={searchFunction}
            />

            <Button bsPrefix={'btn-add'} title={'Добавьте новую компанию'}>Создать компанию</Button>

        </div>
    )
}

export default CompanyPageHeader;