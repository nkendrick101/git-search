import React, { useState, useEffect } from 'react';

import { getRepository } from '../api/github';
import { Repository } from '../types';
import { useParams } from 'react-router-dom';



type Params = Awaited<Promise<string>>;
    
type ParamsType = string

function RepositoryPage() {
  

 
  const { id } = useParams<ParamsType>() as { id: string };
  const [repository, setRepository] = useState<Repository | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getRepository(id)
      .then((data) => {
        setRepository(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setRepository(null);
        setIsLoading(false);
        setError(error);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!repository) {
    return <p>Repository not found</p>;
  }

  return (
    <div>
   <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
</div>

      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <ul>
        <li>Owner: {repository.owner}</li>
        <li>Stars: {repository.stars}</li>
        <li>Forks: {repository.forks}</li>
      </ul>
    </div>
  );
}

export default RepositoryPage;
