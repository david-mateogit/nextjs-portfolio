import Link from 'next/link';
import Layout from '../components/layout';

const PostLink = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{`${title}`}</a>
      </Link>
    </li>
  );
};

const Blog = () => (
  <Layout title='My Blog'>
    <ul>
      <PostLink title='React' />
      <PostLink title='Angular' />
      <PostLink title='Vue' />
    </ul>
  </Layout>
);

export default Blog;
