import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = "feedback-form-state";

let formData = (JSON.parse(localStorage.getItem(LOCAL_KEY)));
let {email, message} = form.elements; 

reLoad();

function reLoad() {
   if (formData) {
      email.value = formData.email;
      message.value = formData.message;
   }
}

const onInput = (event) => {
formData = {email: email.value, message: message.value }
localStorage.setItem(LOCAL_KEY, JSON.stringify(formData) );
}

const onSubmit = (event) => {
   if (email.value === '' || message.value === ''){
      alert("All fields must be filled!");
   }
   else {
      event.preventDefault();
      localStorage.removeItem(LOCAL_KEY);
      form.reset();
      console.log(formData); 
   }
}

form.addEventListener('input', throttle((onInput), 500));
form.addEventListener('submit', onSubmit);