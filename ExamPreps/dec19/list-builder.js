function listBuilder(selector) {

    function createNewList() {
        let ul = $('<ul>');
        $(selector).empty();
        $(selector).append(ul);
    }

    function addItem(text){
        let li = $('<li>').text(text);
        let up = $('<button>Up</button>');
        let down = $('<button>Down</button>');
        li.append(up);
        li.append(down);
        up.on('click',moveUp);
        down.on('click',moveDown);
        $(selector + ' ul').append(li);
    }

    function moveUp(){
        let lis = $(selector + ' ul li');
        let currentLi = this.parentNode;
        let index = [...lis].indexOf(currentLi);
        $(currentLi).insertBefore(lis[index - 1]);
    }
    function moveDown(){
        let lis = $(selector + ' ul li');
        let currentLi = this.parentNode;
        let index = [...lis].indexOf(currentLi);
        $(currentLi).insertAfter(lis[index + 1]);
    }

    return{
        createNewList,
        addItem
    }
}