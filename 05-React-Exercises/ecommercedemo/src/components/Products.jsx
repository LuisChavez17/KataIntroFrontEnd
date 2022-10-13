import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

const Products = () => {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className='btn btn-outline-dark me-2' >All</button>
                    <button className='btn btn-outline-dark me-2' >Man's Clothing</button>
                    <button className='btn btn-outline-dark me-2' >Woman's Clothing</button>
                    <button className='btn btn-outline-dark me-2' >Jewelery</button>
                    <button className='btn btn-outline-dark me-2' >Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt="..." height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p class="card-text lead fw-bold">${product.price}</p>
                                            <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className=" row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products