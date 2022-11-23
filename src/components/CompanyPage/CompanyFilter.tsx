
import { FC } from 'react';
import { CompanyFilterType } from './../../types';
import Button from 'react-bootstrap/Button';

type OwnProps = {
    setFilter: (status: 'all' | 'active' | 'inactive' | 'archive') => void
    currentFilter: string
    filters: Array<CompanyFilterType>
}

const CompanyFilter: FC<OwnProps> = ({setFilter, currentFilter, filters}) => {
    return (
        <div className={['elementContainer', 'padding-container'].join(' ')}>
            { filters.map( (item: CompanyFilterType, index: number) => {
                    let activeButtonStyle = item.value === currentFilter ? 'active' : '';
                    return(<Button bsPrefix={'btn-filter'} key={index} className={activeButtonStyle} onClick={() => setFilter(item.value)}>{item.name}</Button>)
                }) 
            }
        </div>
    )
}

export default CompanyFilter;