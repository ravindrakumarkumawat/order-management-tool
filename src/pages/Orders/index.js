import React, { useState } from 'react';
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
        <div className="OrdersPage">
            <h1>Orders Page</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
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
                    <td>{item.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* <Pagination
                currentPage={currentPage}
                pageCount={getPageCount()}
                onPageChange={handlePageChange}
            /> */}
        </div>
    );
}

export default Orders