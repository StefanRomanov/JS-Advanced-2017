function attachEventsListeners(){
    let buttons = document.querySelectorAll('input[type=button]');

    for(let button of buttons){
        button.addEventListener('click', convert);
    }

    function convert() {
        let id = this.id;
        let value = +this.parentNode.children[1].value;

        switch(id){
            case "daysBtn":
                document.getElementById('hours').value = value * 24;
                document.getElementById('minutes').value = value * 24 * 60;
                document.getElementById('seconds').value = value * 60 * 60 * 24;
                break;
            case "hoursBtn":
                document.getElementById('days').value = value / 24;
                document.getElementById('minutes').value = value  * 60;
                document.getElementById('seconds').value = value * 60 * 60 ;
                break;
            case "minutesBtn":
                document.getElementById('days').value = value / (24 * 60);
                document.getElementById('hours').value = value / 60;
                document.getElementById('seconds').value = value * 60;
                break;
            case "secondsBtn":
                document.getElementById('days').value = value / (24 * 60 * 60);
                document.getElementById('hours').value = value / (60 * 60);
                document.getElementById('minutes').value = value / 60;
                break;
        }
    }
}
