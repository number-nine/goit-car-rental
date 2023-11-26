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

const requestConfig = {
  baseURL: 'https://65623e70dcd355c08324afe1.mockapi.io',
  params: {
    page: 1,
    limit:20
  }
};

export async function getUsers() {
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

export async function getVehicles() {
  const axiosInstance = axios.create(requestConfig);
  try {
    const 
      data = await axiosInstance.get("/adverts");
    console.log(data);
    return
    // results.map(({ name: { first, last }, phone }) => ({
    //   name: first.concat(' ', last),
    //   number: phone,
    // }));
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
