import React from 'react'
import Category from './Category';
import ProductCart from './ProductCart';

const Mainpage = () => {
    const img = "https://i.pinimg.com/originals/d5/09/c7/d509c73785f36678b7e5022df11b5ab3.gif";
    return (
        <div className='w-full '>
            <div className="w-full lg:flex xl:flexx md:flex grid items-center  max-w-[1440px] h-[50vh] mx-auto bg-[#EFEBE9] rounded-b-3xl">
                <div className=' lg:w-[70%] xl:w-[70%] md:w-[70%] w-full h-full '>
                    <img src={img} alt="poster" className='w-full h-full object-cover lg:rounded-bl-3xl rounded-bl-none' />
                </div>
                <div className=' lg:w-[30%] xl:-[30%] md:[30%] w-full lg:rounded-none xl:rounded-none md:rounded-none rounded-b-2xl'>
                    <h1 className='text-2xl  font-semibold text-black text-center py-7'>
                        let'Get Ready with
                        <br />Tinin
                    </h1>
                    <div className='w-full lg:flex hidden '>
                        <button className='w-[300px] h-[10vh] bg bg-black mx-auto text-white px-7 text-lg font-semibold rounded-lg'> anh sur tha tinh ort </button>
                    </div>
                </div>
            </div>
            <Category />
            <div className='w-full max-[1440px] mx-auto flex  items-center justify-between'>
                <h1 className=' text-gray-700 text-xl font-semibold mr-5'>Our ProductCart</h1>
                <h1 className=' text-blue-600 text-lg font-normal mr-5 '>View</h1>
            </div>

            <div className='w-full max-w-[1440px] mx-auto flex justify-between'>
                {/* left icon */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>


                </div>
                {/* cart */}
                <div>
                    <ProductCart/>
                </div>
                {/* right */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Mainpage
