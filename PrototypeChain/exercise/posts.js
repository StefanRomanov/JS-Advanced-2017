function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        get comments() {
            return this._comments;
        }

        addComment(text) {
            this.comments.push(text);
        }

        toString() {
            let base = super.toString();
            let text = `${base}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                text += '\nComments:';
                for (let comment of this.comments) {
                    text += `\n * ${comment}`;
                }
            }
            return text;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = views;
        }

        get views() {
            return this._views;
        }

        view() {
            this._views = this.views + 1;
            return this;
        }

        toString() {
            let base = super.toString();
            return `${base}\nViews: ${this.views}`;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let sm = new SocialMediaPost('aaaa','asdasdasd',3,10);
console.log(sm.toString());
let bp = new BlogPost('bbbbb','cccccccccc');
console.log(bp.toString());
bp.view().view().view();
console.log(bp.toString());