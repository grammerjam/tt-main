document.addEventListener('DOMContentLoaded', (event) => {
  let data = {
    _cardNumber: '0000 0000 0000 0000',
    _cardholderName: '',
    _expiryMonth: '',
    _expiryYear: '',
    _cvc: ''
  };

  // Define getters and setters
   Object.defineProperty(data, 'cardNumber', {
    get: function() {
      return this._cardNumber;
    },
    set: function(value) {
      this._cardNumber = value;
      document.getElementById('card-number-input').value = value;
      document.getElementById('display-card-number').textContent = value;
    }
  });

  Object.defineProperty(data, 'cardholderName', {
    get: function() {
      return this._cardholderName;
    },
    set: function(value) {
      this._cardholderName = value;
      document.getElementById('cardholder-name').value = value;
      document.getElementById('full-name').textContent = value;
    }
  });

  Object.defineProperty(data, 'expiryMonth', {
    get: function() {
      return this._expiryMonth;
    },
    set: function(value) {
      this._expiryMonth = value;
      document.getElementById('expiry').value = value;
      document.getElementById('date').textContent = this._expiryMonth + '/' + this._expiryYear;
    }
  });

  Object.defineProperty(data, 'expiryYear', {
    get: function() {
      return this._expiryYear;
    },
    set: function(value) {
      this._expiryYear = value;
      document.getElementById('expyear').value = value;
      document.getElementById('date').textContent = this._expiryMonth + '/' + this._expiryYear;
    }
  });

  Object.defineProperty(data, 'cvc', {
    get: function() {
      return this._cvc;
    },
    set: function(value) {
      this._cvc = value;
      document.getElementById('cvc').value = value;
      document.getElementById('display-cvc').textContent = value;
    }
  });

  // Event listener
  document.getElementById('card-number-input').addEventListener('input', function(event) {
    data.cardNumber = event.target.value;
  });

  document.getElementById('cardholder-name').addEventListener('input', function(event) {
    data.cardholderName = event.target.value;
  });

  document.getElementById('expiry').addEventListener('input', function(event) {
    data.expiryMonth = event.target.value;
  });

  document.getElementById('expyear').addEventListener('input', function(event) {
    data.expiryYear = event.target.value;
  });

  document.getElementById('cvc').addEventListener('input', function(event) {
    data.cvc = event.target.value;
  });
});
