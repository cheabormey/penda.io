import React from 'react'

const Category = () => {
    const cate =[{
        title :"New Arrial",
        img : "https://img.icons8.com/?size=512&id=115644&format=png",
    },     {
        title :"Best Seller",
        img : "https://ouch-cdn2.icons8.com/A2Zmsps2koAKzl4f4XM4PsFRrvSNch-tVjlHZWa6i8w/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjQ2/L2NkMGY0YmVjLWI5/MDMtNDNhZi1hNDEy/LTk3ZTk4MzYzNjk1/Yi5zdmc.png",
    },     {
        title :"Disconut",
        img : "https://ouch-cdn2.icons8.com/ah1tktagyCIOtFr5szmncBjXdX14H20A5WuOXQbg56Y/rs:fit:256:171/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzgx/LzdkMWFmYjNjLTk3/ODQtNDI0NS1hZDkx/LTA3OGI4YTAwZjdm/MS5zdmc.png",
    },     {
        title :"Skincare",
        img : "https://ouch-cdn2.icons8.com/CREm2VoJeRBCMoS833rt0DbXHavcbFfOpo9M-N6seOs/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTUv/NTBkYjYzYzItMzNh/My00N2MwLThhNGIt/ZmI5Yjc4NzJjZWMz/LnN2Zw.png",
    },     {
        title :"Body Lotion",
        img : "https://ouch-cdn2.icons8.com/zfsDTBfoza8eAv6R9Wsr6rx115GdP6Zvuo2XX1qRD2Y/rs:fit:256:292/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTE5/LzA0NTRmZTk0LTlm/NDAtNDM5OS05YzJm/LWU4MjNmYmUxYmQ1/Mi5zdmc.png",
    },     {
        title :"Cosmetic",
        img : "https://ouch-cdn2.icons8.com/CyKzmFFKdRg8vF5TtECOiEqS5zWn1AsE2UDv2BB5nUI/rs:fit:256:223/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzkw/LzJkN2Y4MGNiLTg3/YzAtNDY2Yi1hZTM4/LTU1ZjBkYWRmMjEw/ZC5wbmc.png",
    },
];
  return (
    <div className='w-full'>
      <div className="w-full max-w-[1440px] mx-auto py-6">
        <h1 className='text-2xl font-semibold text-gray-700 py-4'>Categort</h1>
      </div>
      <div className='w-full lg:flex xl:flex grid md:grid-cols-3 grid-cols-3 lg:gap-x-5 xl:gap-x-7 md:gap-x-0 gap-x-0'>
        {cate.map((item,index)=>{
            return (
                <div key={index} className='p-2 lg:ml-10 xl:ml-10 md:ml-0 ml-0 '>
                    <img
                     className='w-32 h-32 hover:scate-105 duration-300 object-cover rounded-full mx-auto' 
                     src={item.img} 
                     alt="" />
                    <h1 className='text-center text-black text-xl '>{item.title}</h1>

                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Category
