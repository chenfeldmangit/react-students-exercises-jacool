class Local {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    static async readPosts(examplePosts) {
        await Local.sleep(2000);
        const tweets = localStorage.getItem(Local.KEY);
        if (tweets == null) {
            this.store(examplePosts);
            return examplePosts;
        }
        return JSON.parse(tweets);
    }

    static async addPostToLocal(post) {
        const posts = await Local.readPosts();
        posts.unshift(post);
        Local.store(posts);
    }

    static store(posts) {
        localStorage.setItem(Local.KEY, JSON.stringify(posts));
    }

    static async removePostFromLocal(uid) {
        const posts = await Local.readPosts();
        const filtered = posts.filter(value => value.id !== uid);
        Local.store(filtered);
    }

    static async search(text) {
        const posts = await Local.readPosts();
        return posts.filter(value => value.text.includes(text));
    }
}
Local.KEY = "tweets";

export default Local;
