import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import {stockData} from "../dummydata";

function Orders() {

    const columns = [{
        dataField: 'company',
        text: 'Company Name',
    }, {
        dataField: 'ticker',
        text: 'Ticker Name',
        filter: textFilter()
    }, {
        dataField: 'stockPrice',
        text: 'Price',
        filter: textFilter()
    }];

    return (
    <BootstrapTable keyField='id' data={ stockData } columns={ columns } filter={ filterFactory } />
    )
}

export default Orders;