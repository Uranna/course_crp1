import { Container } from "@/components/Container";
import { Posts } from "@/components/Posts";
import { Typography } from "@mui/material";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=1')
  const totalPosts = Number(response.headers.get('X-Total-Count'));

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Список карточек
      </Typography>
      <Posts totalPosts={totalPosts} />
    </Container>
  )
};
