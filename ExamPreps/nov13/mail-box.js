class MailBox{
    constructor(){
        this.mailBox = [];
    }

    get mailBox(){
        return this._mailBox;
    }

    set mailBox(value){
        this._mailBox = value;
    }

    addMessage(subject, text){
        this.mailBox.push([subject,text]);

        return this;
    }

    get messageCount(){
        return this.mailBox.length;
    }

    deleteAllMessages(){
        this.mailBox = [];
    }

    findBySubject(subject){
        let filtered = this.mailBox.filter(e=> e[0].includes(subject));
        let result = [];
        for(let entry of filtered){
            let obj = {
                subject: entry[0],
                text: entry[1]
            };
            result.push(obj);
        }
        return result;
    }

    toString(){
        if(this.mailBox.length === 0){
            return ' * (empty mailbox)';
        }
        let result = "";
        for(let entry of this.mailBox){
            result += ` * [${entry[0]}] ${entry[1]}\n`
        }
        return result;
    }
}

let mb = new MailBox();

mb.addMessage('aa','aaa').addMessage('aa','dasdas');