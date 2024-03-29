import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";
import { createBlog, deleteBlog, getAllBlog, getBlog, getBlogByUserId, getLatestBlog, updateBlog } from "../controllers/blogController.js";

const blogRoutes = Router();

blogRoutes.post("/create", upload.single("image"), createBlog);

blogRoutes.put("/update/:id", upload.single("image"), updateBlog);

blogRoutes.get("/get-allblog", getAllBlog);

blogRoutes.get("/get-blog/:slug", getBlog);

blogRoutes.delete("/delete/:id", deleteBlog);

blogRoutes.get("/get/latest-blog", getLatestBlog);

blogRoutes.get("/get-all-blog/:userId", getBlogByUserId);

export default blogRoutes;