import React, { useEffect, useState } from 'react';
import Pagination from '../../component/common/Pagination';
import data from '../../mock/orderData.json';
import './index.css';
const ASC = 'asc'
const DESC = 'desc'
const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const [vendorData, setVendorData] = useState([...data]);
    useEffect(() => {
        setVendorData(data.filter((item) =>
            Object.values(item).some((value) => 
                value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        ))
    }, [searchTerm])
    
    const getCurrentItems = () => {
        const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
        const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
        
        return vendorData.slice(indexOfFirstItem, indexOfLastItem);
    };
    const getPageCount = () => {
        return Math.ceil(vendorData.length / ITEMS_PER_PAGE);
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const [sortOrder, setOrder] = useState({
        vendorName: ASC,
        pickupDate: ASC,
        status: ASC,
    })
    useEffect(() => {
        setVendorData([...sortBy('vendorName')])
        
    }, [sortOrder.vendorName])
    useEffect(() => {
        setVendorData([...sortBy('pickupDate')])
        
    }, [sortOrder.pickupDate])
    useEffect(() => {
        setVendorData([...sortBy('status')])
        
    }, [sortOrder.status])

    const toggleSortedOrder = (type) => {
        setOrder({
            ...sortOrder,
            [type]: sortOrder[type] === ASC ? DESC : ASC
        })
    }
    
    const sortBy = (key) => {
        return vendorData.sort((a, b) => {
            if(sortOrder[key] == ASC) {
                return a[key].localeCompare(b[key])
            } else if(sortOrder[key] == DESC) {
                return b[key].localeCompare(a[key])
            }
        })
    }
    
    return (
        <div className="orders-page">
            <h1>Orders Page</h1>
            <div className="order-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Order Id</th>
                        <th onClick={() => toggleSortedOrder('vendorName')}>Vendor name {sortOrder['vendorName']}</th>
                        <th onClick={() => toggleSortedOrder('pickupDate')}>Pick up date {sortOrder['pickupDate']}</th>
                        <th onClick={() => toggleSortedOrder('status')}>Status {sortOrder['status']}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getCurrentItems().map((item) => (
                        <tr key={item.orderId}>
                        <td>{item.orderId}</td>
                        <td>{item.vendorName}</td>
                        <td>{item.pickupDate}</td>
                        <td><span className={`order__status--${item.status.toLowerCase()} k-pt4 k-pb4 k-pr4 k-pl4`}>{item.status}</span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    pageCount={getPageCount()}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Orders