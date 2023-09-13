import '@styles/globals.scss';
import {Nav, Footer} from '../components/index';
import {Poppins} from 'next/font/google';

export const metadata = {
  title: 'ecommerce',
  description: 'project'
}

const poppins = Poppins({subsets: ['latin'], weight: ['400']});

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main className='app' style={poppins.style}>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout