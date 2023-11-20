var radio =document.querySelector('.manual-btn')
    var cont = 1
    document.getElementById('radio1').checked = true

    setInterval(() => {
        proximaimg()
    },5000)

    function proximaimg(){
        cont++

        if(cont > 3){
            cont = 1
        }

        document.getElementById('radio'+cont).checked =true

    }

var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}