import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import SearchString from './../Forms/SearchString';
import SelectLanguage from '../Navigation/SelectLanguage';

import burger from '../../media/burger.svg';
import avatar from '../../media/avatar.png';
import faq from '../../media/faq.svg';
import api from '../../media/api.svg';
import talk from '../../media/talk.svg';
import dots from '../../media/dots.svg';

const MainNavbar = () => {
    return (
        // <Navbar bg="light" expand="xxl">
        <Navbar bsPrefix={"loya-header"} className={'navbar'} expand="xxl">
        <Container bsPrefix={'container d-flex justify-content-between'}>

            <div className={'d-flex justify-content-between align-items-center elementContainer'}>
                <div>
                    <Image src={burger} alt={'Главное меню'} className={'burger'} role={'button'} title={'Главное меню'} />
                </div>

                <Navbar.Brand bsPrefix={'navbar-brand-main'} href="#home">Loya Boss</Navbar.Brand>
                    
            </div>


            <div className={'headerElementContainer d-flex justify-content-between align-items-center'}>
                <SearchString 
                    searchId={'globalSearch'} 
                    searchTitle={'Напишите имя или телефон для поиска'} 
                    searchPlaceholder={'поиск по номеру телефона, имени'}
                    accent={'dark'}
                    />
                <SelectLanguage />
                {/* <div className={'d-flex justify-content-between elementContainer align-items-center'}> */}
                <div className={'elementContainer'}>
                    <span ><Image src={faq} alt={'Вопросы и ответы'} role={'button'} title={'Вопросы и ответы'} /></span>
                    <span ><Image src={talk} alt={'Обсуждения'} role={'button'} title={'Обсуждения'}/></span>
                    <span ><Image src={api} alt={'API'} role={'button'} title={'API'}/></span>            
                </div>
                <div className={'elementContainer'}>
                    <span><Image src={avatar} role={'button'} alt={'Ваш профиль'} title={'Ваш профиль'}/></span>               
                    <span><Image src={dots} role={'button'} alt={'Упарвление аккаунтом'} title={'Упарвление аккаунтом'}/></span> 
                </div>  
            </div>



      </Container>
    </Navbar>
    )
}

export default MainNavbar;