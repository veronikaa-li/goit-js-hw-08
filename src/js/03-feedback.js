
import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputsChange,500));
formRef.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onInputsChange(e) {
    userData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}
populateFormInputs();

function onFormSubmit(e) {
    e.preventDefault();

    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    console.log(userData);
}

function populateFormInputs() {

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formElements = formRef.elements;

for(const key in savedData) {
    if(savedData.hasOwnProperty(key)) {
        formElements[key].value = savedData[key]
    }
    }
}
