import { renderHook } from '@testing-library/react-hooks';
import useGitHubSearch from '../useGitHubSearch';

test('returns search results for valid query', async () => {
  const query = 'react';
  const { result, waitForNextUpdate } = renderHook(() => useGitHubSearch(query));
  expect(result.current.isLoading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.isLoading).toBe(false);
  expect(result.current.error).toBe(null);
  expect(result.current.searchResults).not.toHaveLength(0);
});

test('returns error for invalid query', async () => {
  const query = 'invalid-query-123';
  const { result, waitForNextUpdate } = renderHook(() => useGitHubSearch(query));
  expect(result.current.isLoading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.isLoading).toBe(false);
  expect(result.current.searchResults).toHaveLength(0);
  expect(result.current.error).not.toBe(null);
});