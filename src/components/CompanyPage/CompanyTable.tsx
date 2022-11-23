import {FC} from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { TableFieldsHeadersType, TableDataType } from './../../types';
import edit from './../../media/edit.svg';
import stat from './../../media/stat.svg';

type OwnProps = {
  fieldsHeaders?: Array<TableFieldsHeadersType>
  tableData?: Array<TableDataType>
}

const CompanyTable: FC<OwnProps> = ({fieldsHeaders, tableData}) => {

  return (
    <Table responsive hover className={'company-table'}>
      <thead>
        <tr className={'table-heder'}>
          { fieldsHeaders && fieldsHeaders.map((item, index) => (
            <th key={index}>{item.value}</th>
          )) }
        </tr>
      </thead>
      <tbody>
          

          { tableData && tableData.length > 0 ? tableData.map((item) => {

            let { companyLogo, ownerAccount, visitorsCounter, transactionsCounter } = item;

            return (
            <tr key={item.id as string} className={'table-row'}>
              <td >{ companyLogo && <Image src={companyLogo as string} alt=""/>}</td>
              <td >
                <label>Логин</label> {ownerAccount}<br/>
                Менеджер отсутсвует
              </td>
              <td ><b>{visitorsCounter}</b></td>
              <td ><b>{transactionsCounter}</b></td>
              <td >
                <div className={'elementContainer'}>
                  <Image src={edit as string} alt={'Редактировать'} title={'Редактировать'} role={'button'} /> 
                  <Image src={stat as string} alt={'Статистика'} title={'Статистика'} role={'button'} />
                </div>
              </td>
              <td className={'text-right'}><Button bsPrefix={'btn-auth'} title={'Авторизоваться'}>Авторизоваться</Button></td>
            </tr>
          )})
          : <tr className={'table-row'} ><td className={'no-hover'} colSpan={6}>Компании не найдены</td></tr>
        }
      </tbody>
    </Table>
  );
}

export default CompanyTable;