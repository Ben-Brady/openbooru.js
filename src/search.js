
// export default class PostSearch {
//     finished = false;
//     __lock = false;
//     index = 0;
//     posts = [];
//     query;

//     constructor(query = null) {
//         this.query = query || new Types.PostQuery();
//     }

//     async extend(count = 100) {
//         if (this.__lock) return;
//         if (this.finished) return;
//         this.__lock = true;
        
//         let posts = await Posts.search(this.query, this.index, count);
//         this.posts = this.posts.concat(posts);
//         this.index += posts.length;
        
//         if (posts.length < count) {
//             this.finished = true;
//         }
//         this.__lock = false;
//     }
// }
