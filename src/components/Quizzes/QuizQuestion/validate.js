const validate = (values, props) => {
  const errors = {};

  if(!values[props.questionId]){
    errors[props.questionId] = 'required';
  }

  return errors;
};

export default validate;
