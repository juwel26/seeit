import img from '../imge/juwel-rana.png'
export default function Home(){
    return(
        <div className=" pl-1">
          <h1 className="   font-bold text-2xl text-center text-indigo-700  font-extralight  text-4xl  capitalize">juwel rana</h1>
           <img src={img} style={{height:'300px' }} className='  justify-items-center '></img>

           <p className=' text-center text-xl mt-10 capitalize'>
               thanks for visit my website.
           </p>
        </div>
    );
};

