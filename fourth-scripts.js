document.addEventListener('DOMContentLoaded', function() {


document.getElementById('voucher-apply').addEventListener('click', function() {
  document.getElementById('price-label').textContent = "AUD 287";
  document.getElementById('total-label').textContent = "AUD 334.05";
});

document.getElementById('payment-button').addEventListener('click', function() {
  window.location.href = 'page5.html'
});

document.getElementById('terms-check').addEventListener('click', function() {
	 const paymentbutton = document.getElementById('payment-button');
	 if (this.checked) {
    paymentbutton.disabled = false;
  } else {
    paymentbutton.disabled = true;
  }
	
});	

});