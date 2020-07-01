 //Define the original time values (later to be incremented)
 let seconds = 0;
 let minutes = 0;
 let hours = 0;

 //Define the fix leading 0 (the first '0' like in stopwatch '0'0:'0'0:'0'0)
 let displaySeconds = 0;
 let displayMinutes = 0;
 let displayHours = 0;
 let hourChar = '';
 let minuteChar = '';
 

 //Define var to hold setInterval() function
 // to manage when to start the stopwatch, so it doesn't start automatically when the window is open
 let interval = null; 

 //Define the stopwatch status when the window first is open
 let status = "stopped";

 //Logic to determine WHEN to increment (increase) the next value
 function stopwatch() {
     seconds++; //because stopwatch counts start from seconds(then minutes-hours)

     //logic to determine when to increment the next value
     //every 60s, seconds back to 0 and minutes increase
     if (seconds / 60 === 1) {    
         seconds = 0; 
         minutes++; 

         //every 60minutes, minutes back to 0 and hours increase
         if (minutes / 60 === 1) {
             minutes = 0;
             hours++;
         }
     }

     //if seconds/minutes/hours are only 1 digit (until 9), add the leading 0 (let the rest goes back to the stopwatch function)
     if(seconds < 10) {
         displaySeconds = "0" + seconds.toString(); //it will be displayed 00:00:05, 00:00:12
     } else {
         displaySeconds = seconds;
     }
     if(minutes === 0) {
         displayMinutes = '';
         minuteChar = '';
     }
     else if(minutes > 0 && minutes < 10) {
         displayMinutes = "0" + minutes.toString();
         minuteChar = `<span class='minute_stopwatch'>m</span>`;
     } else {
         displayMinutes = minutes;
         minuteChar = `<span class='minute_stopwatch'>m</span>`;
     }

     if(hours === 0) {
         displayHours = '';
         hourChar = '';
     }
     else if(hours > 0 && hours < 10) {
         displayHours = "0" + hours.toString();
         hourChar = `<span>h</span>`;
     } else {
         displayHours = hours;
         hourChar = `<span>h</span>`;
     }

     //display output with updated time values to user (check html file id display) then set how the display will be
     document.getElementById("display-stopwatch").innerHTML = `${displayHours}${hourChar}${displayMinutes}${minuteChar}${displaySeconds}<span class='second_stopwatch'>s</span>`;
 }

 //LOGIC to start/stop the stopwatch
function startStopwatch() {
   
    if (status === "stopped") {

        //start the stopwatch: re-assign function interval, call the setInterval built-in function with its parameters
        interval = window.setInterval(stopwatch, 1000);
        //start-stop button, linked it to ID in the html
        document.getElementById("start-stopwatch").innerHTML = "STOP";
        status = "started";
        console.log('--Stopwatch starts--');
    }
    else {
        //stop the stopwatch: call the clearInterval built-in function(parameter: basic interval === null)
        window.clearInterval(interval);
        //start-stop button, linked it to ID in the html
        document.getElementById("start-stopwatch").innerHTML = "START";
        status = "stopped";
        console.log('--Stopwatch stops--');
    }
}

//LOGIC to reset button : set all to 00:00:00
function resetStopwatch() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    //reset button, linked it to ID in the html
    document.getElementById("display-stopwatch").innerHTML = `00<span class='second_stopwatch'>s</span>`;
    //start-start button, linked it to ID in the html
    document.getElementById("start-stopwatch").innerHTML= "START";
    console.log('--Stopwatch is reset--');
}
