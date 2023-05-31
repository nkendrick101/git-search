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
 
 <h2 className="text-4xl font-extrabold text-gray-900 ">{repository.name}</h2>
<p className="my-4 text-lg text-gray-500">{repository.description}</p>

    
      <ul>
      <li  className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
  
    <span className="w-full">Owner: {repository.owner}</span>
   
</li>
        
        <li  className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="w-full">
        Stars: {repository.stars}
        </span>
        </li>
        <li  className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="w-full"> Forks: {repository.forks}</span>
        </li>
       
      </ul>

    </div>
  );
}

export default RepositoryPage;
