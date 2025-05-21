import { UserInfo } from '../types/user';

export const mockFetchUser = (): Promise<UserInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Pepito Perez',
        email: 'pepito@mail.com',
        address: 'Calle 123, Bogotá',
      });
    }, 800);
  });
};
