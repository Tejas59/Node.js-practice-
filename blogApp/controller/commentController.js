import Post from '../models/post.js';
import Comment from '../models/comment.js';

export const createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        });

        const savedComment = await comment.save();

        const updatedComment = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate('comments')
            .exec();

        res.json({
            post: updatedComment
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while creating comment",
        });
    }
};
