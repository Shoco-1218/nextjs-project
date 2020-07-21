import Properties from './Properties';


const form = document.querySelector('#moreProperty');
const cards = document.querySelector('#addPropertySpace');
let number = 7;
  
const FormData = function(){
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {
      address: form.address.value,
      inspection: form.inspection.value,
      image_path: form.image_path.value,
      agentName: form.agentName.value,
      bed: parseInt(form.bed.value),
      shower: parseInt(form.shower.value),
      car: parseInt(form.car.value)
    }
    fetch('http://localhost:3000/moreproperty?id=' + number,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(text => {
        cards.insertAdjacentHTML('beforeend', text);
        form.reset();
        number++;
      })
      .catch((error) => {
        console.log('Error: '+ error);
      })
  })
}

export default FormData;