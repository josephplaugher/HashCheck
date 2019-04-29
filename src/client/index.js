const bcryptjs = require('bcryptjs');

var button = document.getElementById('getHash');
var copyHash = document.getElementById('copy');
var input = document.getElementById('input');

button.addEventListener('click', () => {
  document.getElementById('pleaseWait').style.display = 'block';
  document.getElementById('copyConfirmed').style.display = 'none';
  bcryptjs.hash(input.value, 14, (err, output) => {
    document.getElementById('result').value = output;
    document.getElementById('pleaseWait').style.display = 'none';
  });
});

copyHash.addEventListener('click', ()=> {
  var toCopy = document.getElementById('result');
  toCopy.select();
  document.execCommand("copy");
  document.getElementById('copyConfirmed').style.display = 'block';
});