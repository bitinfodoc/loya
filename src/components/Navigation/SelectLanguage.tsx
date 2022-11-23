import Image from 'react-bootstrap/Image';
import arrow from './../../media/arrow.svg'

const SelectLanguage = () => {

    return (
        <div role={'button'} title={'Выберите язык'} >
        Ru <Image src={arrow} alt={'Выберите язык'} />
        </div>
    )
}

export default SelectLanguage;