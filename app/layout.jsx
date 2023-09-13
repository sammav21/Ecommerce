import '@styles/globals.scss';
import {Nav, Footer} from '../components/index';

export const metadata = {
  title: 'ecommerce',
  description: 'project'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main className='app w100'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout