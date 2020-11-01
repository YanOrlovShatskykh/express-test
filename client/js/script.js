// 'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const formData = new FormData();


  const sendData = async (data) => {
    console.log(data);
    await fetch('http://localhost:5000/api/register', {
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      body: JSON.stringify(data)
    });
  };

  const collectData = (event) => {
    event.preventDefault();

    const myData = {
      email: form[0].value,
      name: form[1].value,
      phone: form[2].value  
    }
    
    console.log('myData: ', JSON.stringify(myData));
    formData.append('json', myData);

    sendData(formData);
  };

  form.addEventListener('submit', collectData);




});