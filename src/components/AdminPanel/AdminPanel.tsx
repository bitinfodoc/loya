import Image from 'react-bootstrap/Image';

import AdminPanelItem from './AdminPanelItem'
import { AdminPanelsNavType } from '../../types';
import admin from './../../media/admin.svg'
import loyaTestData from '../../data/loyaTestData'


const AdminPanel = () => {

    const { adminPanelNav } = loyaTestData;

    return (
        <>
            <div className={'panel-title'}> 
                <Image src={admin} alt={'Админ панель'}/> <span>Админпанель</span>
            </div>
            {adminPanelNav.map((item: AdminPanelsNavType) => <AdminPanelItem item={item} key={item.id}/>)}
        </>
    )
}

export default AdminPanel