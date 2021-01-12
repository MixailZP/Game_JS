let buttonRun = document.getElementById("start");
let buttonRestart = document.getElementById("res");


buttonRestart.addEventListener('click', function () {
  	buttonRun.setAttribute("disabled", "");
 	location.reload();
});


let area = document.getElementById('area'),
	move = 0;

area.addEventListener('click', function(event){
	if(move % 2 === 0){
		event.target.innerHTML = 'X';
	}else{
		event.target.innerHTML = '0';
	}
	 move++;
	 check();
	
	
});


// Функция проверки

function check(){
	let boxes = document.getElementsByClassName('box');
	let arr = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6], //вертикаль
		[1,4,7],
		[2,5,8],
		[0,4,8], //диагональ
		[2,4,6],
	]

	for(let i = 0; i < arr.length; i++){
		if(boxes[arr[i] [0]] .innerHTML == 'X' && boxes[arr[i] [1]] .innerHTML == 'X' && boxes[arr[i] [2]] .innerHTML == 'X') {
			alert('Крестик Выиграл!');
				location.reload();
				}else if(boxes[arr[i] [0]] .innerHTML == '0' && boxes[arr[i] [1]] .innerHTML == '0' && boxes[arr[i] [2]] .innerHTML == '0') { 
					alert('Нолик выиграл');
							location.reload();
				}
		}
	
}





