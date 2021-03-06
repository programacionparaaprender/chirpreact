var socket = io.connect('http://localhost:3000');

var   mesaj = document.getElementById('mesaj'),
      baslik = document.getElementById('baslik'),
      btn = document.getElementById('gonder'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');


btn.addEventListener('click', function(){
  socket.emit('chat', {
      mesaj: mesaj.value,
      baslik: baslik.value
  });
  mesaj.value = "";
});

mesaj.addEventListener('keypress', function(){
    socket.emit('yaziyor', baslik.value);
})

socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.baslik + ': </strong>' + data.mesaj + '</p>';
});

socket.on('yaziyor', function(data){
    feedback.innerHTML = '<p><em>' + data + ' yazıyor...</em></p>';
});