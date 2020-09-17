import Layout from '../components/layout';
import Error from './_error';

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title='About'>
      <h2>{user.name}</h2>
      <p>
        <img src={user.avatar_url} alt='Avatar' width='200px' />
      </p>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/david-mateogit');
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default About;
