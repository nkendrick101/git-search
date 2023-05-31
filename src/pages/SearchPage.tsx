import React, { useState } from 'react';
import useGitHubSearch from '../hooks/useGitHubSearch';
import RepositoryCard from '../components/RepositoryCard';
import { Repository } from '../types';

function SearchPage() {
  const [query, setQuery] = useState('');
  const { searchResults, isLoading, error } = useGitHubSearch(query);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(event.currentTarget.search.value);
  }

  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Search 
repositories..." />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <ul>
          {searchResults.map((repository: Repository) => (
            <li key={repository.id}>
              <RepositoryCard repository={repository} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchPage;
