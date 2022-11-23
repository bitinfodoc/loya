import { LoyaDataType } from '../types';
import companyLogo from './../media/company_logo.svg'

const loyaTestData: LoyaDataType = {
    adminPanelNav: [
        {id: 0, name: 'Компании'},
        {id: 1, name: 'Активность'},
        {id: 2, name: 'Финансы'},
        {id: 3, name: 'Клиенты'},
        {id: 4, name: 'Менеджеры'},
    ],
    companyFilters: [
        { name: 'все', value: 'all'},
        { name: 'активные', value: 'active'},
        { name: 'неактивные', value: 'inactive'},
        { name: 'в архиве', value: 'archive'},
    ],
    fieldsHeaders: [
        { name: 'logo', value: 'Лого'},
        { name: 'companyName', value: 'Название компании'},
        { name: 'visitors', value: 'Посетителей'},
        { name: 'transactions', value: 'Транзакции'},
        { name: 'settings', value: 'Управление'},
        { name: 'auth', value: ''},
    ],
    companyList: [
        {
            id: 1,
            companyName: 'Компания трёх медведей',
            companyLogo: companyLogo,
            visitorsCounter: 2564,
            transactionsCounter: 376,
            companyStatus: 'active',
            ownerAccount: 'Три медведя',
        },
        {
            id: 2,
            companyName: 'Куриная ферма двух медведей',
            companyLogo: companyLogo,
            visitorsCounter: 1468,
            transactionsCounter: 136,
            companyStatus: 'active',
            ownerAccount: 'Курица',
        }, 
        {
            id: 3,
            companyName: 'Компания медведицы',
            companyLogo: companyLogo,
            visitorsCounter: 1468,
            transactionsCounter: 136,
            companyStatus: 'active',
            ownerAccount: ' Медведица',
        }, 
        {
            id: 4,
            companyName: 'Компания рыжей лисы',
            companyLogo: companyLogo,
            visitorsCounter: 1468,
            transactionsCounter: 136,
            companyStatus: 'archive',
            ownerAccount: 'Рыжая лиса',
        },        
        {
            id: 5,
            companyName: 'Компания медведей',
            companyLogo: companyLogo,
            visitorsCounter: 2789,
            transactionsCounter: 312,
            companyStatus: 'inactive',
            ownerAccount: 'Медведи',
        },
        {
            id: 6,
            companyName: 'Компания горного орла',
            companyLogo: companyLogo,
            visitorsCounter: 2789,
            transactionsCounter: 312,
            companyStatus: 'inactive',
            ownerAccount: 'Горный орёл',
        },
        {
            id: 7,
            companyName: 'Компания четырёх медведей',
            companyLogo: companyLogo,
            visitorsCounter: 2789,
            transactionsCounter: 312,
            companyStatus: 'inactive',
            ownerAccount: 'Четыре медведя',
        },
        {
            id: 8,
            companyName: 'Компания серого волка',
            companyLogo: companyLogo,
            visitorsCounter: 2523,
            transactionsCounter: 274,
            companyStatus: 'inactive',
            ownerAccount: 'Серый волк',
        },    
        {
            id: 9,
            companyName: 'Барбер-шоп у брадобрея',
            companyLogo: companyLogo,
            visitorsCounter: 3278,
            transactionsCounter: 416,
            companyStatus: 'archive',
            ownerAccount: 'Брадобрей',
        },  
        {
            id: 11,
            companyName: 'Компания серого волка в архиве',
            companyLogo: companyLogo,
            visitorsCounter: 2523,
            transactionsCounter: 274,
            companyStatus: 'active',
            ownerAccount: 'Серый волк',
        },    
    ],


}

export default loyaTestData;