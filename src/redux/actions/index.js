// Coloque aqui suas actions
export const USER_ACT = 'USER_ACT';

export const userActFunc = (email) => ({
  type: USER_ACT,
  info: {
    email,
  },
});
