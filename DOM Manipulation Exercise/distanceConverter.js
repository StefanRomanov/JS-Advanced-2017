function attachEventsListeners(){
    "use strict";
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);
    
    function convert() {
        let inputOption = document.getElementById("inputUnits").value;
        let outputOption = document.getElementById("outputUnits").value;
        let value = +document.getElementById("inputDistance").value;

        let meter = 1;
        let kilometer = 1000;
        let centimeter = 0.01;
        let millimeter = 0.001;
        let mile = 1609.34;
        let yard = 0.9144;
        let foot = 0.3048;
        let inch = 0.0254;

        let temp = 0;
        let final = 0;

        switch(inputOption){
            case 'km':
                temp = value * kilometer;
                break;
            case 'm':
                temp = value * meter;
                break;
            case 'cm':
                temp = value * centimeter;
                break;
            case 'mm':
                temp = value * millimeter;
                break;
            case 'mi':
                temp = value * mile;
                break;
            case 'yrd':
                temp = value * yard;
                break;
            case 'ft':
                temp = value * foot;
                break;
            case 'in':
                temp = value * inch;
                break;
        }

        switch(outputOption){
            case 'km':
                final = temp / kilometer;
                break;
            case 'm':
                final = temp / meter;
                break;
            case 'cm':
                final = temp / centimeter;
                break;
            case 'mm':
                final = temp / millimeter;
                break;
            case 'mi':
                final = temp / mile;
                break;
            case 'yrd':
                final = temp / yard;
                break;
            case 'ft':
                final = temp / foot;
                break;
            case 'in':
                final = temp / inch;
                break;
        }

        document.getElementById("outputDistance").value = final;
    }
}
