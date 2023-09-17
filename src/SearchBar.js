import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
input {
  padding-left: 35px;
  color: $color-gray-one;
  box-shadow: 2px 3px 28px 1px rgba(0,0,0,0.1);
  border: 0px solid transparent;
  border-radius: 5px;

  height: 30px;
  font-size: 16px;

  transition: all .2s ease;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;
    box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.3);
  }
}
`;

const SearchBar = ({ searchInput, handleChange }) => {
  return (
    <StyledSearchBar>
      <input
        type='search'
        placeholder='Search here'
        onChange={handleChange}
        value={searchInput}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;