import mongoose from "mongoose";

const blogschema = mongoose.Schema({
    title: {
        type: String,
        required: true
      },
    content: {
        type: String,
        required: true
      },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    authorName:{
        type: String,
        required: true,
    }
});

const Blog = mongoose.model('blog',blogschema);

export default Blog;