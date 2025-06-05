function send() {
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const msg = document.getElementById('msg').value.trim();


if (msg == ""){
  iziToast.error({
    title: 'Error',
    message: 'Usted no ha colocado texto en el campo de Mensaje.',
    position: 'topRight'
  });
}
else {
  window.location.href = `https://wa.me/51968477944/?text=Soy ${name}, tengo ${age} años. ${msg}`;
}


  
}

function back() {
  history.back();
}