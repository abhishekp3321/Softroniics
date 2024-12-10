import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { additemtocart } from '../Slice';

export const Homecart = () => {

    const data = useSelector((state) => state.counter.data);
    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/y/5/-original-imagwu894yyhyyce.jpeg?q=70&crop=false',
            title: 'REDMI Note 13 Pro 5G',
            description: '(Coral Purple, 128 GB) (8 GB RAM)',
            price: '19,996',
        },
        {
            id: 2,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/m/u/5/-original-imahf3h3cgzg6mrc.jpeg?q=70&crop=false',
            title: 'boAt Airdopes Alpha',
            description: '(Jet Black, In the Ear)',
            price: '999',
        },
        {
            id: 3,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/d/a/15ada7-thin-and-light-laptop-lenovo-original-imah3tf8ahbqyhzh.jpeg?q=70&crop=false',
            title: 'Lenovo IdeaPad 1',
            description: 'AMD Ryzen 3 Dual Core 7320U 8 GB/512 GB SSD',
            price: '37,000',
        },
        {
            id: 4,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/m/i/-original-imah4jz66pzdzy4z.jpeg?q=70&crop=false',
            title: 'Apple iPhone 16 Pro Max',
            description: '(Black Titanium, 512 GB)',
            price: '1,44,900',
        },
        {
            id: 5,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/television/y/5/l/-original-imagufq2sggeg75u.jpeg?q=70&crop=false',
            title: 'SAMSUNG Neo QLED 214 cm (85 inch)',
            description: 'QLED Ultra HD (4K) Smart Tizen TV',
            price: '1,39,990',
        },
        {
            id: 6,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/u/f/b/-original-imagtcnufgp5ffxc.jpeg?q=70&crop=false',
            title: 'Apple Watch Ultra 2 GPS + Cellular 49mm',
            description: 'Titanium Case with Orange Ocean Band',
            price: '89,000',
        },
        {
            id: 7,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/vehicle-pull-along/7/l/j/batman-arkham-knight-batmobile-die-cast-toy-car-3y-hot-wheels-20-original-imah5dxere8hsvfh.jpeg?q=70&crop=false',
            title: 'HOT WHEELS BATMAN',
            description: 'ARKHAM KNIGHT BATMOBILE DIE-CAST',
            price: '499',
        },
        {
            id: 8,
            image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/i/o/14-ultra-mzb0gvnin-xiaomi-original-imagzt8cw9q2zgae.jpeg?q=70&crop=false',
            title: 'Xiaomi 14 Ultra White Color',
            description: '(White, 512 GB) (16 GB RAM)',
            price: '99,999',
        },
    ];
console.log(data);

    return (
        <div className='bg-[#e3e6e6] h-screen'>
            <div className='flex justify-evenly py-6 gap-10 bg-[#232f3e]'>
                <div className='flex justify-evenly items-center'>
                    <img className='w-[50px] h-[50px]' src='https://img.icons8.com/?size=100&id=TfhgUym1Y8vb&format=png&color=000000' alt='img is not found' />
                    <p className='text-slate-200 font-bold text-2xl'>Amazon.in</p>
                </div>
                <input type='text' placeholder='Search' className='w-[50%] h-10 border-2 border-black text-center focus:ring focus:ring-[#F3A847]' />
                <Link to='/add'>
                <button>
                    <img className='w-[50px] h-[50px]' src='https://img.icons8.com/?size=100&id=13020&format=png&color=000000' alt='search icon' />
                </button>   
                </Link>
            </div>

            <div className='grid grid-cols-4 gap-11 gap-y-36 justify-center my-5 mx-5'>
                {products.map((product) => (
                    <div key={product.id} className='bg-slate-50 justify-items-center  rounded-lg shadow-lg border-2 border-black hover:bg-orange-300 p-6'>
                        <img src={product.image} className='w-[150px] h-[150px]' alt={product.title} />
                        <p className='text-lg font-bold'>{product.title}</p>
                        <p className='font-medium'>{product.description}</p>
                        <p className='text-lg font-bold'>price: ₹{product.price}</p>
                        <button onClick={()=>{
                            dispatch(additemtocart(product))
                            
                        }}  className='bg-[#F3A847] py-1 px-9 shadow-lg border-2 border-black text-xl hover:bg-orange-600 font-semibold'>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
