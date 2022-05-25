import React from 'react';
import {useNavigate} from "react-router-dom";

const Products = () => {
    const navigate = useNavigate()
    const product = {
        _id:'1',
        name: 'Web applications development',
        description:'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
        img: '',
        features: ['Search Engine Optimization ','Responsive design', 'User friendly'],
        quantity: 0,
        price: 0,
        supplier: 'Gucci',
    }
    return (
        <div id={'products'} className="py-16 hover:bg-base-200 text-pink-600 hover:text-pink-800">
            <div className="container m-auto px-6 md:px-12 xl:px-6">
                <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl">Carrying genuine Brand's <span className={'text-pink-600'}>Perfumes</span> <br className="sm:block" hidden></br> and <span className={'text-pink-600'}> Fragrances</span></h2>
                <div className="grid lg:grid-cols-2 gap-6">

                    <div className="bg-purple-50 hover:bg-sky-50 border text-gray-600 border-opacity-10 rounded-3xl shadow-xl p-8">
                        <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-8">
                            <div className="sm:w-5/12">
                                <img src={product.img} className="rounded-xl w-full h-56 object-cover sm:h-full"
                                     alt=""/>
                            </div>
                            <div className="space-y-4 py-4 sm:w-7/12">
                                <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                                <p>{product.description}</p>

                                <ul className="ml-5 space-y-2 list-disc list-outside">
                                    {product.features.map(feature => <li>{feature}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-4 space-x-4">
                            <p className="font-normal">Brand: <span className={'font-bold'}>{product.supplier}</span></p>

                            <span className="w-8 h-px bg-pink-500"></span>

                            <p className="font-normal">Price: <span className={'font-bold'}>${product.price}</span></p>
                        </div>
                        <div className={'flex item-center justify-center mt-4 space-x-4'}>
                            <button className="btn btn-accent" onClick={() => navigate(`inventory/${product._id}`)}>Stock Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default Products;