import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layouts/layout';
import '../assets/styles/styles.css';
import {SSRProvider} from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return(
    <SSRProvider>
      <Layout>
	<Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp
