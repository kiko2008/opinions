export const appendComponent = (parent, components) => {
  components.forEach((component) => {
    parent.appendChild(component);
  });
};

export const getFormData = (formInputs) => {
  const formData = {};
  const idOpinion = document.getElementById('idOpinion');
  for (let i = 0; i < formInputs.length; i += 1) {
    const input = formInputs[i];
    formData[input.name] = input.value;
  }
  formData['idOpinion'] = idOpinion.value;
  return formData;
};

export const reportValidity = (form) => {
  if (HTMLFormElement.prototype.reportValidity) {
    form.reportValidity();
  } else {
    HTMLFormElement.prototype.reportValidity = () => {
      if (form.checkValidity()) return true;
      const btn = document.createElement('button');
      form.appendChild(btn);
      btn.click();
      form.removeChild(btn);
      return false;
    };
  }
};

export default {
  appendComponent,
  getFormData,
  reportValidity
};
