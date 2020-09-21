import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Post = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout title={title}>
      <p style={{ width: '80vw' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam
        pariatur voluptatem ea doloribus illo suscipit quae iure commodi alias
        quam voluptates perferendis, labore provident consequuntur quis non a
        hic.
      </p>
    </Layout>
  );
};

export default Post;
