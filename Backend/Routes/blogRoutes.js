import express from 'express';
import { protect } from '../middleware/authmiddleware.js';
import Blog from '../Schemas/BlogSchema.js'
import {createBlog,getAllBlogs,getBlogById,getUserBlogs,editBlog,deleteBlog} from '../Controllers/blogControllers.js'
const blogRouter = express.Router();

blogRouter.route('/createBlog').post(protect,createBlog);

blogRouter.get('/getBlogs',getAllBlogs);

blogRouter.get('/getBlogs/:id',getBlogById);

blogRouter.route('/getUserBlogs').get(protect,getUserBlogs);

blogRouter.route('/editBlog/:id').put(protect,editBlog).delete(protect,deleteBlog);


export default blogRouter