import { useState, useEffect } from 'react';
import { searchRepositories } from '../api/github';
import { Repository } from '../types';

interface State {
  searchResults: Repository[];
  isLoading: boolean;
  error: Error | null;
}

function useGitHubSearch(query: string): State {
  const [state, setState] = useState<State>({
    searchResults: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    if (query !== '') {
      setState({ searchResults: [], isLoading: true, error: null });
      searchRepositories(query)
        .then((data) => setState({ searchResults: data, isLoading: false, 
error: null }))
        .catch((error) => setState({ searchResults: [], isLoading: false, 
error }));
    }
  }, [query]);

  return state;
}

export default useGitHubSearch;
