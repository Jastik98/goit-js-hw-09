const formEl = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

restoreFormFields();

formEl.addEventListener('input', event => {
  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
formEl.addEventListener('submit', checkSubmit);

function restoreFormFields() {
  const parsedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (parsedForm) {
    formEl.elements.email.value = parsedForm.email;
    formEl.elements.message.value = parsedForm.message;

    formData.email = parsedForm.email;
    formData.message = parsedForm.message;
  }
}
function resetFormData() {
  const formDataKeys = Object.keys(formData);

  for (const key of formDataKeys) {
    formData[key] = '';
  }
}
function checkSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');

    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  resetFormData();
  formEl.reset();
}
