class MentionActions {
    static addLikeMention = (postBeingLiked) => {
        return {
            type: MentionActions.ADD_MENTION,
            mention: {
                category: "like",
                id: postBeingLiked.id,
                author: postBeingLiked.author,
                text: postBeingLiked.text,
                authorImage: postBeingLiked.authorImage
            }
        }
    };
}

MentionActions.ADD_MENTION = "ADD_MENTION";

export default MentionActions;
