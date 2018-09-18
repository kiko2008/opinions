export const appendComponent = (parent, components) => {
  components.forEach((component) => {
    parent.appendChild(component);
  });
};

export const getFormData = (formInputs) => {
  const formData = {};
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];
    formData[input.name] = input.value;
  }
  return formData;
};

export default {
  appendComponent,
  getFormData
};
