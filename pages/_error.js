import Layout from '../components/layout';

const Error = ({ statusCode }) => (
  <Layout title='Error!!!'>
    {statusCode ? (
      <p>Could not load your user data: status code {statusCode}</p>
    ) : (
      <p>Couldn't get that page, sorry!</p>
    )}
  </Layout>
);

export default Error;
