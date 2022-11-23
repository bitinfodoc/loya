import { FC } from 'react';
import { AdminPanelsNavType } from './../../types';

type OwnPropsType = {
    item: AdminPanelsNavType
}

const AdminPanelItem: FC<OwnPropsType> = ({item}) => {

    let itemClass = item.id === 0 ? 'panel-nav-item active' : 'panel-nav-item'
    return(
        <div className={itemClass} role={'button'} title={item.name}>
            {item.name}
        </div>
    )
}

export default AdminPanelItem;