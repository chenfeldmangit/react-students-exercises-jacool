class Local {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    static async readPosts(examplePosts) {
        await Local.sleep(1000);
        const tweets = localStorage.getItem(Local.POSTS_KEY);
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
        localStorage.setItem(Local.POSTS_KEY, JSON.stringify(posts));
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

    static async fetchUserProfile(template) {
        await Local.sleep(1000);
        const p = localStorage.getItem(Local.PROFILE_KEY);
        if (p == null) {
            this.storeProfile(template);
            return template;
        }
        return JSON.parse(p);
    }

    static storeProfile(profile) {
        localStorage.setItem(Local.PROFILE_KEY, JSON.stringify(profile));
    }
}
Local.POSTS_KEY = "tweets";
Local.PROFILE_KEY = "profile";

export default Local;
