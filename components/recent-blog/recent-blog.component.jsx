import {RecentBlogContainer, Title, GridBlog} from "./recent-blog.styles";
import BlogCard from "../blog-card/blog-card.component";

const RecentBlog = () => {
    return (
        <RecentBlogContainer>
            <Title>Recent Blog</Title>
            <GridBlog>
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </GridBlog>

        </RecentBlogContainer>
    )
}

export default RecentBlog;