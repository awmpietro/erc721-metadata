const errorHandler = error => {
  if (error.response) {
    return error.response.data;
  } else {
    return error.message;
  }
};

export { errorHandler };
