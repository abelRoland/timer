'use strict';
let default_minute = Number(document.getElementById('minute_timer').textContent);
//console.log(default_minute, typeof default_minute);

// get button label
let button_label = document.getElementById('start').textContent;
//make global interval

let set_interval;
document.getElementById('start').addEventListener('click', function () {
	document.body.style.backgroundColor = '#ebe4e3';
	//change label;

	if (button_label === 'start') {
		document.getElementById('start').innerHTML = 'stop';

		let total_time = default_minute * 60; // 1 minute 60 second;300
		let count_second = 60;

		set_interval = setInterval(startTimer, 1000);

		function startTimer() {
			// very first time to reduce minute
			if (!(total_time % 60)) {
				document.getElementById('minute_timer').innerHTML = --default_minute;
			}
			// check seconds for the double zeros
			if (count_second >= 10) {
				document.getElementById('second_timer').innerHTML = --count_second;
			} else {
				document.getElementById('second_timer').innerHTML = '0' + --count_second;
			}
			// to reduce the  minute after 60 seconds
			if (count_second === 0) {
				count_second = 60;
			}
			//stop  the interval

			total_time--;
			if (total_time <= 220) {
				clearInterval(set_interval);
			}
		}
	}
	if (button_label === 'stop') {
		clearInterval(set_interval);
	}
});

// reset

document.getElementById('reset').addEventListener('click', function () {
	document.body.style.backgroundColor = 'red';

	document.getElementById('minute_timer').innerHTML = 5;
	document.getElementById('second_timer').innerHTML = '00';
	default_minute = 5;
	button_label = 'start';
	document.getElementById('start').innerHTML = button_label;
	clearInterval(set_interval);
});
