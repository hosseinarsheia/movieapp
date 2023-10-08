import api from './api';

export const getMoviesList = () => api.get('movie/changes');
export const getPeopleList = () => api.get('movie/changes');
