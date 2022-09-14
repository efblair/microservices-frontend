import React from 'react';
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import {UserData} from "../fillerData/userData";

function Users() {
    const columns = [
        {
            dataField: 'ID',
            text: 'ID',
        },{
            dataField: 'Email',
            text: 'User Email',
            filter: textFilter()
        }];

    return (
        <BootstrapTable keyField='ID' data={ UserData } columns={ columns } filter={ filterFactory() } />
    );
}

export default Users;