import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {stockData} from "../fillerData/dummydata";

function Orders() {

    const columns = [{
        dataField: 'ID',
        text: 'ID',
    }, {
        dataField: 'Name',
        text: 'Product Name',
        filter: textFilter()
    }, {
        dataField: 'ProdID',
        text: 'Product ID',
        filter: textFilter()
    }, {
        dataField: 'UserID',
        text: 'User ID',
        filter: textFilter()
    }, {
        dataField: 'Date',
        text: 'Date',
        filter: textFilter()
    }, {
        dataField: 'DeliveryMethod',
        text: 'Delivery Method',
        filter: textFilter()
    }
    ];

    return (
        <BootstrapTable keyField='id' data={ stockData } columns={ columns } filter={ filterFactory() } />
    )
}

export default Orders;