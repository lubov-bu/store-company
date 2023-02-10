import React, {useState} from 'react';
import PriceFilter from "../select/PriceFilter";

const PriceSort = () => {

    // const [filterPrice, setFilterPrice] = useState()
    //
    // const sortPrice = (sort) => {
    //     setFilterPrice(sort);
    //     setFilterPrice([...products].sort((a, b) => a[sort].localeCompare(b[])))
    // }

    return (
        <div>
            <PriceFilter
                value={filterPrice}
                onChange={sortPrice}
                defaultValue="Filter by price"
                options={[
                    {value: 'price', name: 'Lower to higher'},
                    {value: 'price', name: 'Higher to lower'}
                ]}

            />
        </div>
    );
};

export default PriceSort;