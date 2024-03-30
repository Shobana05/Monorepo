import ImageComponent from '../../../../../../shared-components/src/lib/image/index'
import fordpic from '../../../../../../shared-components/src/lib/fordServices.jpg'
import ButtonComponent from '../../../../../../shared-components/src/lib/button/index'
import image from "../../json/pocImg.json"
const HomeContent: React.FC = () => {
  const data = [
    {
      img: "kjkj",
      alt: "kklk",
      className: "lkjk"
    },
    {
      img: "kjkj",
      alt: "abcd",
      className: "jk"
    },

  ]
  return (


    <main className="bg-blue-200" >
      <div style={{ width: "45%" }}>
        {data.map((item,index)=>(
          <ImageComponent img={item.img} alt={item.alt} className={item.className}/>
        ))}
        {/* <ImageComponent img={image} alt={image}
          className=' mt-5 rounded-xl mx-10  h-3/4' /> */}
      </div>

      <div className='flex justify-around'>
        <div  >
          <h2 className='mt-5 text-black text-3xl font-semibold'>Ford Connected Services</h2>
          <p>Available features you can add-on to your Ford vehicle post-purchase enrich your ownership experience</p>
          <ButtonComponent className='bg-blue-600 w-1/2 mb-4 mt-2 rounded h-9 text-white' value='Explore Connected' />
        </div>



        <div >
          {/* <ImageComponent img='https://www.ford.com/is/image/content/dam/brand_ford/en_us/brand/homepage-re-imagine/dm/23_FRD_XBD_59223_YouMode_PDL.tif?croppathe=1_4x3&wid=900' className='mt-2 rounded-xl'/> */}
          <h2 className='text-black text-3xl mt-5 font-semibold'>Complimentary pickup & delivery</h2>
          <p>Let your Ford delaer come to you for routine maintenance</p>
          <ButtonComponent className='bg-blue-600 w-1/4 mb-4 mt-2 rounded h-9 text-white' value='Learn more ' />

        </div>
      </div>
    </main>


  );
};

export default HomeContent;
