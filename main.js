(function () {
    
    var screen = document.querySelector('.screen');
    var buttons = document.querySelectorAll('.btn');
    var clear = document.querySelector('.btn-clear');
    var equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(event){
          if(event.target.innerHTML == "C"){
            return screen.value = "";
          } else if (event.target.innerHTML == "=") {
            return;
          }
          let view = event.target.dataset.num;
          screen.value += view;
          
        });
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ""){
            screen.value = "please enter"; 
        } else if( screen.value === "please enter"){
            return screen.value = "";
        
        }
        screen.value = screen.value + "=" + eval(screen.value);
      });
   

})(); 