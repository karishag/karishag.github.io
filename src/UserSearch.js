import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import UserList from './UserList';
import { debounce } from 'lodash';

const DATA_FETCHER_DELAY = 500;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const UserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);
  const [showError, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const debouncedFetchUsers = useCallback(debounce((searchInput) => {
    async function fetchUsers() {
      try {
        // authenticated requests allows to do upto 30 requests per minute otherwise it limits to 10 requests per minute
        const response = await fetch(`https://api.github.com/search/users?q=${searchInput} in:name type:user sort:followers`, {
          method: 'GET',
          // headers: {
          //   Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
          // }
        });
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const jsonResponse = await response.json();
        setError(false);
        setUsers(jsonResponse.items);
      }
      catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchUsers();
  }, DATA_FETCHER_DELAY), []);

  useEffect(() => {
    searchInput ? debouncedFetchUsers(searchInput) : setUsers([]);
  }, [searchInput]);

  return (
    <SearchContainer>
      <SearchBar
        searchInput={searchInput}
        handleChange={handleChange}
      />
      <UserList users={users} showError={showError} />
    </SearchContainer>
  );
}

export default UserSearch;