"use client"

import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from './fetchUsers';

const queryClient = new QueryClient();

interface User {
  userId: number;
  username: string;
  email: string;
  dob: string;
  assessmentSubmitted: boolean;
  picture: string;
}

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const { data: users, isLoading, isError, isFetching } = useQuery(
    ['users', currentPage],
    () => fetchUsers(currentPage)
  );

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const filteredUsers = users
    ? users.filter((user: User) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSearchInputChange = (e:any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='page'>
      <h1>Users List</h1>

      <input
        type='search'
        placeholder='Search by Name'
        value={searchTerm}
        onChange={handleSearchInputChange}
      />

      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage} disabled={isFetching || currentPage === 5}>
        Next
      </button>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Filed to fetch User data</div>
      ) : (
        filteredUsers.map((user: User) => (
          <div className='userPage' key={user.userId}>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.dob}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default function Wrapped() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
