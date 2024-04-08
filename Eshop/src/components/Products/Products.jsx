import React from 'react'
import Heading from '../Shared/Heading/Heading';
import Product1 from "../Images/product-1.jpg"
import Product2 from "../Images/product-2.jpg"
import Product3 from "../Images/product-3.jpg"
import Product4 from "../Images/product-4.jpg"
import Product5 from "../Images/product-5.jpg"
import Product6 from "../Images/product-6.jpg"
import Product7 from "../Images/product-7.jpg"
import ProductCard from './ProductCard/ProductCard';

const ProductData=[
    {
        id:1,
        img:Product1,
        title:"Boat HeadPhones",
        price:"120",
        asoDelay:"0"
    },
    {
        id:2,
        img:Product2,
        title:"Rocky Mountain",
        price:"420",
        asoDelay:"200"
    },
    {
        id:3,
        img:Product3,
        title:"Goggles",
        price:"320",
        asoDelay:"400"
    },
    {
        id:4,
        img:Product4,
        title:"Printed",
        price:"220",
        asoDelay:"600"
    },
]
const ProductData2=[
    {
        id:1,
        img:Product5,
        title:"Boat HeadPhones",
        price:"120",
        asoDelay:"0"
    },
    {
        id:2,
        img:Product6,
        title:"Rocky Mountain",
        price:"420",
        asoDelay:"200"
    },
    {
        id:3,
        img:Product7,
        title:"Goggles",
        price:"320",
        asoDelay:"400"
    },
    {
        id:4,
        img:Product5,
        title:"Printed",
        price:"220",
        asoDelay:"600"
    },
]

 const Products = () => {
  return (
    <>
    <div>
        <div className='container'>
            <Heading title={"Our Products"} subtitle={"Expolre Our Products"}/>
                <ProductCard data={ProductData}/>
                <ProductCard data={ProductData2}/>    
        </div>
    </div>
    
    </>
  )
}
export default Products;