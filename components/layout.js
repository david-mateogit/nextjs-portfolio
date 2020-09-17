import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Layout = ({ children, title }) => (
  <div className='root'>
    <Head>
      <title>NextJS Portfolio</title>
    </Head>
    <header>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/hireme'>
        <a>Hire Me</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          min-height: 600px;
        }

        header {
          display: flex;
          justify-content: space-around;
          width: 100%;
          font-size: 1.2rem;
          padding: 1rem;
          background-color: darkblue;
        }

        header a {
          text-decoration: none;
          color: darkgray;
        }

        header a:hover {
          text-decoration: underline;
          font-weight: bold;
          color: lightgray;
        }

        footer {
          margin-top: auto;
          padding: 1rem;
        }
      `}
    </style>
    <style global jsx>
      {`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}
    </style>
  </div>
);

export default Layout;
