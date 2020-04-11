class Local {
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    static async readPosts(examplePosts) {
        return Local.readKey(Local.POSTS_KEY, examplePosts);
    }

    static async addPostToLocal(post) {
        const posts = await Local.readPosts();
        posts.unshift(post);
        Local.writeKey(Local.POSTS_KEY, posts);
    }

    static async removePostFromLocal(uid) {
        const posts = await Local.readPosts();
        const filtered = posts.filter(value => value.id !== uid);
        Local.writeKey(Local.POSTS_KEY, filtered);
    }

    static async search(text) {
        const posts = await Local.readPosts();
        return posts.filter(value => value.text.includes(text));
    }

    static async fetchUserProfile(template) {
        return Local.readKey(Local.PROFILE_KEY, template);
    }

    static storeProfile(profile) {
        Local.writeKey(Local.PROFILE_KEY, profile);
    }

    static writeKey(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log("Error writing key", e);
        }
    }

    static async readKey(key, template) {
        await Local.sleep(1000);
        try {
            const value = await localStorage.getItem(key);
            if (value == null) {
                Local.writeKey(key, template);
                return template;
            }
            return JSON.parse(value);
        } catch (e) {
            console.log("Error reading key", e);
        }
    }
}
Local.POSTS_KEY = "tweets";
Local.PROFILE_KEY = "profile";

export default Local;
