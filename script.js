const form = document.getElementById('form');
const emailInput = document.querySelector('.email-input');
const emailErrorMessage = document.querySelector('.email-error-message');
const newsletterWrapper = document.querySelector('.newsletter__wrapper');
const popup = document.querySelector('.success');
const dismissBtn = document.getElementById('dismiss-btn');


// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const emailValue = emailInput.value;
  console.log('Email entered:', emailValue);

  if (emailValue.includes('@')) {  
    console.log('Valid email'); 

    const confirmationEmailElement = document.querySelector('.success__content span');
    confirmationEmailElement.textContent = emailValue;

    newsletterWrapper.classList.add('newsletter__wrapper--hide');
    popup.classList.add('success--show');
    emailInput.classList.remove('email-input--show'); 
    emailErrorMessage.classList.remove('email-error-message--show');

  } else {
    console.log('Invalid email'); 
    
    emailInput.classList.add('email-input--show'); 
    emailErrorMessage.classList.add('email-error-message--show');
  }
}

function handleDismiss(event) {
  console.log('dismiss works'); 

  newsletterWrapper.classList.remove('newsletter__wrapper--hide');
  popup.classList.remove('success--show');

}

form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', handleDismiss);

