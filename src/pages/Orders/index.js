import React, { useState } from 'react';
import Pagination from '../../component/common/Pagination';
import data from '../../mock/orderData.json';
import './index.css';

const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) => 
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    const getCurrentItems = () => {
        const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
        const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
        return filteredData.slice(indexOfFirstItem, indexOfLastItem);
    };
    const getPageCount = () => {
        return Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
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
                        <th>Vendor name</th>
                        <th>Pick up date</th>
                        <th>Status</th>
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