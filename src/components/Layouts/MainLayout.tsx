import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNavbar from './MainNavbar';
import AdminPanel from '../AdminPanel/AdminPanel';
import CompanyPage from './../CompanyPage/CompanyPage';

const MainLayout = () => {

    return (
        <>
            
            <MainNavbar />
            <Container>
             
            <Row>
                <Col sm={'12'} lg={'2'} xl={'2'} className={'sidebar-main'}>
                    <AdminPanel />
                </Col>
                <Col sm={'12'} lg={'8'} xl={'8'} >
                    <div className={'main-container'}>
                        <CompanyPage />
                    </div>
                </Col>
                <Col sm={'12'} lg={'2'} xl={'2'}>
                    
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default MainLayout;