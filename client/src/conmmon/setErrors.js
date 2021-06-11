  
export const setErrors = (title, description) => {
    let errors = {};
    errors.title = title ? "" : "Title is required";
    errors.description = description ? "" : "Description is required";
    return errors;
  };