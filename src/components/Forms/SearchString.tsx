import { FC } from 'react';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

import search from './../../media/search.svg';

type OwnPropsType = {
    searchId: string
    searchTitle: string
    searchPlaceholder: string
    accent?: 'light' | 'dark'
    onChangeFunction?: (value: string) => void
}

const SearchString: FC<OwnPropsType> = ({searchId, searchTitle, searchPlaceholder, accent, onChangeFunction}) => {


    let color = accent ? [accent, '-search'].join('') : 'light-search';

    return(
        <div className={[color, 'search-string-container'].join(' ')}>
            <label htmlFor={searchId} role={'button'} className={'on-input-search-label'}><Image src={search} alt={searchTitle} title={searchTitle}/></label>
            <Form.Control bsPrefix={'search-string'} id={searchId} type="input" placeholder={searchPlaceholder} onChange={(input) => onChangeFunction && onChangeFunction(input.target.value)}/>
        </div>
    )
}

export default SearchString;