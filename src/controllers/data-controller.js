import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const defaultRequestConfig = {
  baseURL: 'https://randomuser.me/api/',
  params: {
    inc: 'name,phone',
    results: 20,
    nat: 'gb',
  },
};

export default async function getUsers() {
  const axiosInstance = axios.create(defaultRequestConfig);
  try {
    const {
      data: { results },
    } = await axiosInstance.get();
    return results.map(({ name: { first, last }, phone }) => ({
      name: first.concat(' ', last),
      number: phone,
    }));
  } catch (error) {
    Notify.info('Remote data unavailable. Parsing local data');
    return [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
}
