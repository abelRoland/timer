//@ts-check;
'use strict';
//debugger;
let default_minute = Number(document.getElementById('minute_timer').textContent);
//console.log(default_minute, typeof default_minute);
let count_second = Number(document.getElementById('second_timer').textContent);

// get button label

let button_label = document.getElementById('start-timer').textContent;



//make global interval
let set_interval;

// calculate total time

function sumTime() {
	return default_minute * 60 + count_second;
}
let total_time = sumTime();
//console.log(total_time);

// change button status

let button_status = document.getElementById('start-timer');


function changeStatus(status) {
	return status === 'Start' ? 'Stop' : 'Start';
}


document.getElementById('start-timer').addEventListener('click', function () {
	//debugger;
    button_status.innerHTML = changeStatus(button_label);
    

	if (!set_interval) {
		set_interval = setInterval(startTimer, 1000);
        console.log('--Timer starts--');
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
				clearInterval(set_interval);

                alert('time is up');
                console.log('--Time is up--');

				document.getElementById('minute_timer').innerHTML = 5;
				document.getElementById('second_timer').innerHTML = '00';
				button_status.innerHTML = changeStatus('Finish');
				default_minute = Number(document.getElementById('minute_timer').textContent);
				count_second = Number(document.getElementById('second_timer').textContent);
				total_time = sumTime();
				set_interval = null;
			}
		}
	} else {
		//debugger;
		clearInterval(set_interval);
		set_interval = null;

        button_status.innerHTML = changeStatus('Stop');
        console.log('--Timer stops--');

	}

	//
});

// reset


document.getElementById('reset-timer').addEventListener('click', function () {


	//debugger;
	clearInterval(set_interval);
	document.getElementById('minute_timer').innerHTML = 5;
	document.getElementById('second_timer').innerHTML = '00';
	button_status.innerHTML = changeStatus('Stop');
	default_minute = Number(document.getElementById('minute_timer').textContent);
	count_second = Number(document.getElementById('second_timer').textContent);
	total_time = sumTime();
    set_interval = null;
    console.log('--Timer is reset--');
});


