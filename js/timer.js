$(document).ready(function(){
	// Set the target date (change this to your desired end date)
    // Format: new Date("Month Day, Year HH:MM:SS")
    var targetDate = new Date("Dec 31, 2026 23:59:59");
    
    // Get references to the time elements
    var $daysElement = $('#dealend .time-block:nth-child(1) .time');
    var $hoursElement = $('#dealend .time-block:nth-child(2) .time');
    var $minutesElement = $('#dealend .time-block:nth-child(3) .time');
    var $secondsElement = $('#dealend .time-block:nth-child(4) .time');
    
    // Function to update the timer display
    function updateTimer() {
        // Get the current time
        var now = new Date().getTime();
        
        // Find the distance between now and the target date
        var distance = targetDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the DOM
        $daysElement.text(days);
        $hoursElement.text(hours);
        $minutesElement.text(minutes);
        $secondsElement.text(seconds);
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(timerInterval);
            $('#dealend').text("Deal has ended!");
        }
    }
    
    // Initial update
    updateTimer();
    
    // Start the timer
    var timerInterval = setInterval(updateTimer, 1000);
});