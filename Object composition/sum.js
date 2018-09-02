function getModel(){
    let num1,num2,result;

    function init(n1,n2,res){
        "use strict";
        num1 = $(n1);
        num2 = $(n2);
        result = $(res);
    }

    function add(){
        result.val(+num1.val() + +num2.val());
    }

    function subtract(){
        result.val(+num1.val() - +num2.val());
    }

    return {init,add,subtract};
}
