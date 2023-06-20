let string = "";
let buttons = document.querySelectorAll('.button');
function percent(a,b){
    return (a/100)*b;
}
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML=="%"){
            percent(string);
            document.querySelector('input').value=percent();                    
        }
         else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector('.input').value = string;
        }
         else if (e.target.innerHTML == "C") {
            string = string.toString().slice(0, -1);
            document.querySelector('.input').value = string;
        }
         else if (e.target.innerHTML == "100") {
            string = string + 100;
            document.querySelector('input').value = string;
        }
         else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;

        }

    })
})