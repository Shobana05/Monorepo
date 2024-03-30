import styles from './page.module.css';
import HomeComponent from './pages/content';
import HeaderMenu from '../../../../shared-components/src/lib/header/index'
import Footer from '../../../../shared-components/src/lib/footer/index'

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (

      <div className=" min-h-screen flex flex-col">
        <div>
        <HeaderMenu/>
   
        </div>

      <div className='flex-1' >
      <HomeComponent/>
      </div>
     <div>
  <Footer/>
     </div>
     
       
      </div>
  
  );
}
