function timer(){
    let time = 0;
    $('#start-timer').on('click', start);
    $('#stop-timer').on('click', stop);
    let interval, running = false;
    function start() {
        if(!running){
            interval = setInterval(tick,1000);
            running = true;
        }
    }

    function stop() {
        clearInterval(interval);
        running = false;
    }

    function tick(){
        time++;
        $('#seconds').text(`0${time % 60}`.slice(-2));
        $('#hours').text(`0${Math.trunc(time / 3600)}`.slice(-2));
        $('#minutes').text(`0${Math.trunc((time / 60) % 60)}`.slice(-2));
    }
}
