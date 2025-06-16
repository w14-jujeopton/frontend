import { Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostMasonryProps {
  posts?: Post[];
}

const PostMasonry = ({ posts }: PostMasonryProps) => {
  return (
    <Container maxWidth="md">
      <Masonry columns={3} spacing={2}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card variant="outlined" key={post.id}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card variant="outlined">
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Welcome to the Home page!
              </Typography>
            </CardContent>
          </Card>
        )}
      </Masonry>
    </Container>
  );
};

export default PostMasonry;
