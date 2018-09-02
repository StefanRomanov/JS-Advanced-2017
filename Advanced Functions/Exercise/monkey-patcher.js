function vafla(arg){
    let that = this;
    let processor = (function(){

        function upvote(){that.upvotes++}

        function downvote(){that.downvotes++}

        function score(){
            let total = that.downvotes + that.upvotes;
            let rating = "";
            let printUpvotes = 0;
            let printDownvotes = 0;

            if(total < 10){
                rating = "new";
            } else if ((that.upvotes / total) * 100 > 66){
                rating = "hot";
            } else if(that.upvotes >= that.downvotes && that.upvotes > 100 ){
                rating = "controversial";
            } else if(that.downvotes > that.upvotes){
                rating = "unpopular";
            } else {
                rating = "new";
            }

            let difference = that.upvotes - that.downvotes;

            if(total > 50){
                let increment = Math.max(that.downvotes, that.upvotes) * 0.25;
                printDownvotes = Math.ceil(that.downvotes + increment);
                printUpvotes = Math.ceil(that.upvotes + increment);
            } else {
                printDownvotes = that.downvotes;
                printUpvotes = that.upvotes;
            }

            return [printUpvotes,printDownvotes,difference,rating];
        }

        return {upvote,downvote,score};
    })();

    return processor[arg]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

vafla.call(post, 'upvote');
vafla.call(post, 'upvote');
vafla.call(post, 'upvote');
console.log(vafla.call(post, 'score'));;