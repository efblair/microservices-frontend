import React, {useEffect, useState} from 'react';
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import {paymentData} from "../fillerData/paymentsData";

function Payments() {

    const [payment, setPayment] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/payments")
            .then(response => response.json())
            .then(data => {
                setPayment(data)
            })
    },[]);

        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                filter: textFilter()
            }, {
                dataField: 'orderID',
                text: 'Order ID',
                filter: textFilter()
            }, {
                dataField: 'paymentType',
                text: 'Payment Type',
                filter: textFilter()
            }];

        const paymentData = payment.map(data => ({
            id: data.id,
            orderID: data.orderID,
            paymentType: data.paymentType
        }))

        return (
            <BootstrapTable keyField='ID' data={paymentData} columns={columns} filter={filterFactory()}/>
        );
    }
export default Payments;
