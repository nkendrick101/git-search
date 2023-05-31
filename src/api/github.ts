import axios from 'axios';
import { Repository } from '../types';

const BASE_URL = 'https://api.github.com';

export async function searchRepositories(query: string): 
Promise<Repository[]> {
  const url = `${BASE_URL}/search/repositories?q=${query}`;
  const response = await axios.get(url);
  return response.data.items.map((item: any) => ({
    id: item.id,
    name: item.name,
    owner: item.owner.login,
    description: item.description,
    stars: item.stargazers_count,
    forks: item.forks_count,
  }));
}

export async function getRepository(id: string): Promise<Repository | 
null> {
  const url = `${BASE_URL}/repositories/${id}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      id: data.id,
      name: data.name,
      owner: data.owner.login,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch (error) {
    if (error.response.status === 404) {
      return null;
    }
    throw error;
  }
}
