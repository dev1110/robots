import React from 'react';

const SearchBox =({searchChange}) => {

    return (
        <div>
            <input onChange={searchChange} className="pa3 ma2 tc grow br4 bl bb bg-light-green" type="search" name="search" placeholder="Search Robot"/>
        </div>
    )
}
export default SearchBox;