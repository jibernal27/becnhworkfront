export const parseError = error => {
  if (error.response) {
    const errorBody = error.response.data;
    const errors = {};
    Object.entries(errorBody).forEach(([key, v]) => {
      if (v instanceof Array) {
        const firstError = v[0];
        errors[key] = firstError.message;
      }
    });
    if ('message' in errorBody) {
      errors['_error'] = errorBody['message'];
    }
    return { error: errors };
  }
  return { error: error.message };
};
