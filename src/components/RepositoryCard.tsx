import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../types';

interface Props {
  repository: Repository;
}

function RepositoryCard({ repository }: Props) {
  return (
 
     
<div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li className="mr-2">
        Owner: {repository.owner}
        </li>
        <li className="mr-2">
        Stars: {repository.stars}
        </li>
        <li className="mr-2">
        Forks: {repository.forks}
        </li>
    </ul>
    <div id="defaultTabContent">
        <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{repository.name}</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">{repository.description}</p>
            <Link to={`/repository/${repository.id}`} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                view
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
       
    
    </div>
</div>

  );
}

export default RepositoryCard;
