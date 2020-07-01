'use strict';

let default_minute = Number(document.getElementById('minute_timer').textContent);
//console.log(default_minute, typeof default_minute);
let count_second = Number(document.getElementById('second_timer').textContent);

// get button label
let button_label = document.getElementById('start').textContent;

//make global interval
let set_interval;

// calculate total time

function sumTime() {
	return default_minute + count_second;
}

// change button status
let button_status = document.getElementById('start');

function changeStatus(status) {
	return status === 'Start' ? 'Stop' : 'Start';
}

document.getElementById('start').addEventListener('click', function () {
	//debugger;
	button_status.innerHTML = changeStatus(button_label);

	let total_time = sumTime();
	console.log(total_time);

	if (!set_interval) {
		set_interval = setInterval(startTimer, 1000);

		function startTimer() {
			// very first time to reduce minute
			if (count_second === 0) {
				count_second = 60;
			}
			if (!(total_time % 60)) {
				// when total time is zero don not change it
				if (total_time !== 0) {
					document.getElementById('minute_timer').innerHTML = --default_minute;
				}
			}
			// check seconds for the double zeros
			if (count_second > 10) {
				document.getElementById('second_timer').innerHTML = --count_second;
			} else {
				document.getElementById('second_timer').innerHTML = '0' + --count_second;
			}

			//stop  the interval

			--total_time;
			if (total_time < 0) {
				alert('time is up');
				document.getElementById('minute_timer').innerHTML = 5;
				document.getElementById('second_timer').innerHTML = '00';
				document.getElementById('start').innerHTML = 'start';
				total_time = sumTime();
				console.log(total_time);
				console.log('minute', document.getElementById('minute_timer').textContent);
				console.log(count_second);
				clearInterval(set_interval);
				set_interval = null;
			}
		}
	} else {
		clearInterval(set_interval);
		set_interval = null;
		document.getElementById('minute_timer').innerHTML = default_minute;
		document.getElementById('second_timer').innerHTML = count_second;
		document.getElementById('start').innerHTML = 'start';
	}

	//
});

// reset

document.getElementById('reset').addEventListener('click', function () {
	document.getElementById('minute_timer').innerHTML = 5;
	document.getElementById('second_timer').innerHTML = '00';
	default_minute = 5;
	button_label = 'start';
	document.getElementById('start').innerHTML = button_label;
	clearInterval(set_interval);
});
