import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../types';

interface Props {
  repository: Repository;
}

function RepositoryCard({ repository }: Props) {
  return (
    <div>
      <h3>
        <Link to={`/repository/${repository.id}`}>{repository.name}</Link>
      </h3>
      <p>{repository.description}</p>
      <ul>
        <li>Owner: {repository.owner}</li>
        <li>Stars: {repository.stars}</li>
        <li>Forks: {repository.forks}</li>
      </ul>
    </div>
  );
}

export default RepositoryCard;
