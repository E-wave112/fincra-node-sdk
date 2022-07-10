export const handleErrors = (error: any) => {
  return error.response.data;
};

export const handleAxiosError = (error: any) => {
  return error.message;
};
