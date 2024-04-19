import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchProductsByBrand, searchProductsByName } from '../../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchByBrand, setSearchByBrand] = useState(false);

    const handleSearch = () => {
        if (searchByBrand) {
            dispatch(searchProductsByBrand(searchTerm));
        } else {
            dispatch(searchProductsByName(searchTerm));
        }
    };

    return (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
          <label>
            <input
              type="checkbox"
              checked={searchByBrand}
              onChange={() => setSearchByBrand(!searchByBrand)}
            />
            Search by Brand
          </label>
        </div>
      );
};

export default SearchBar;