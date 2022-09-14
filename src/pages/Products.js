
import React, {useEffect, useState} from 'react';
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";


function Products() {

        const [product, setProduct] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5002/products")
                .then(response => response.json())
                .then(data => {
                    setProduct(data)
                });

        }, []);
        const columns = [
            {
                dataField: 'id',
                text: 'ID',
                filter: textFilter()
            },{
                dataField: 'name',
                text: 'Product Name',
                filter: textFilter()
            }, {
                dataField: 'desc',
                text: 'Description',
                filter: textFilter()
            }, {
                dataField: 'inStock',
                text: 'In Stock?',
                filter: textFilter()
            }];

        const productData = product.map(data => ({
            id: data.id,
            name: data.name,
            desc: data.description,
            inStock:data.inStock
        }))

        return (
            <BootstrapTable keyField='ID' data={ productData } columns={ columns } filter={ filterFactory() } />
        );
    }

export default Products;