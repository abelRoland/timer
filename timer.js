let default_minute = Number(document.getElementById('minute_timer').textContent);
//console.log(default_minute, typeof default_minute);
let default_second = Number(document.getElementById('second_timer').textContent);

document.getElementById('start').addEventListener('click', function () {
	document.body.style.backgroundColor = '#ebe4e3';

	let total_time = default_minute * 60; // 1 minute 60 second;300
	let count_second = 59;

	let set_interval = setInterval(startTimer, 1000);

	function startTimer() {
		// very first time to reduce minute
		if (!(total_time % 60)) {
			document.getElementById('minute_timer').innerHTML = --default_minute;
		}
		// check seconds for the double zeros
		if (count_second >= 10) {
			document.getElementById('second_timer').innerHTML = count_second--;
		} else {
			document.getElementById('second_timer').innerHTML = '0' + count_second--;
		}
		// to reduce the  minute after 60 seconds
		if (count_second === -1) {
			count_second = 59;
		}
		//stop  the interval

		total_time--;
		if (total_time <= 220) {
			clearInterval(set_interval);
		}
	}
	document.getElementById('reset').addEventListener('click', function () {
		document.body.style.backgroundColor = 'red';
		clearInterval(set_interval);
		document.getElementById('minute_timer').innerHTML = 5;
		document.getElementById('second_timer').innerHTML = '00';
	});
});

// reset
