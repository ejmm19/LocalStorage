var d = document

function PediClave() {
    var password = prompt("Ingresa tu contraseña");
    if (password != 'votacion') {
        alert("Contraseña Incorrecta");
        PediClave()
    }
}
$('#votar').click(function(event) {
  event.preventDefault()
  cambiarVista('.ops-init','#candidatos-sec')
});
$("#ver-resultados").click(function(event) {
  event.preventDefault()
  cambiarVista('.ops-init','#resultados-sec')
});
function cambiarVista(esconde,mostrar){
  $(esconde).fadeOut(400)
  $(mostrar).fadeIn(900)
}
function asignarVoto(evento){
  evento.preventDefault()
  var votos = JSON.parse(localStorage.getItem('voto'))
  var voto = [ {voto: { candidato : evento.target.alt } }]
  if (votos == null) {
    localStorage.setItem('voto',JSON.stringify(voto))
  }else {
    var votoStr = JSON.stringify(voto)
    votos.push(votoStr)
    localStorage.setItem('voto',JSON.stringify(votos))
  }
  var votosCont = JSON.parse(localStorage.getItem('voto'))
}
function ListarVoto(){
  var votos = JSON.parse(localStorage.getItem('voto'))
  if (votos !== null) {
    for (var i in votos) {
      console.log([i].voto.candidato);
    }
    console.log(votos.length);
    $("#result").append(votos[0].candidato);
  }
}
function EstablecerCandidatos(){
  var cand1 = d.querySelector('#cand-1'),
      cand2 = d.querySelector('#cand-2'),
      cand3 = d.querySelector('#cand-3'),
      cand4 = d.querySelector('#cand-4')
  cand1.onclick = asignarVoto
  cand2.onclick = asignarVoto
  cand3.onclick = asignarVoto
  cand4.onclick = asignarVoto
}
EstablecerCandidatos()
ListarVoto()
// PediClave();
