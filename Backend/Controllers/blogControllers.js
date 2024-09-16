import Blog from '../Schemas/BlogSchema.js'
import mongoose from 'mongoose';
const createBlog = async(req,res)=>{
    const {title,content} = req.body;
    try {
        const blog = await Blog.create({
            title,
            content,
            author: req.user._id,
            authorName: req.user.name
        });
    
        if (blog) {
            res.status(201).json({
                _id: blog._id,
                title: blog.title,
                content: blog.content,
                authorName: blog.authorName
            });
        } else {
            res.status(400).json({ message: "Unable to create a blog" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error, unable to create blog" });
    }
    res.end();
};

const getAllBlogs = async(req,res)=>{
    const allBlogs = await Blog.find();
    const resblogs = allBlogs.map((blog)=>{
        const resblog = {
        _id: blog._id,
        title: blog.title,
        content: blog.content,
        authorName: blog.authorName
        }
        return resblog;
    })
    if(allBlogs){
        res.status(200).json(resblogs);
    }else{
        res.status(400).json({message:"Unable to fetch all blogs"});
    }
    res.end();
};


const getBlogById = async (req, res) => {
    try {
        const { id } = req.params; // Extract the id from request parameters

        // Check if the provided id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Blog ID format" });
        }

        // Use findById to fetch the blog by _id
        const blog = await Blog.findById(id);

        if (blog) {
            return res.status(200).json({
                _id: blog._id,
                title: blog.title,
                content: blog.content,
                authorName: blog.authorName
            });
        } else {
            return res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.error("Error fetching blog:", error); // Log error details
        return res.status(500).json({ message: "Server error" });
    }
};

const getUserBlogs = async(req,res)=>{
    const userBlogs = await Blog.find({author:req.user._id});
    if(userBlogs)
    {
        const resblogs = userBlogs.map((blog)=>{
            const resblog = {
            _id: blog._id,
            title: blog.title,
            content: blog.content,
            authorName: blog.authorName
            }
            return resblog;
        });
        res.status(200).json(resblogs);
    }
    else
    {
        res.status(400).json({message:"Unable to get user blogs"});
    }
    res.end();
}

const editBlog = async(req,res)=>{
    const {title,content} = req.body;
    const blog = await Blog.findById(req.params.id);
    if(blog)
    {
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        const updatedBlog = await blog.save();
        res.status(201).json({
            _id: updatedBlog._id,
            title: updatedBlog.title,
            content: updatedBlog.content,
            authorName: updatedBlog.authorName
        });
    }
}

const deleteBlog = async(req,res)=>{
    const blog = await Blog.findById(req.params.id);
    if(blog)
    {
        const deletedblog = await Blog.deleteOne({_id:req.params.id});
        res.status(201).json({message:'Blog deleted successfully'});
    }
    else
    {
        res.status(400).json({message:'Unable to delete blog'});
    }
    res.end();
}


export {createBlog,getAllBlogs,getBlogById,getUserBlogs,editBlog,deleteBlog}