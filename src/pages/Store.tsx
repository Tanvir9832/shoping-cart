import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { UserContext } from "../context/context";
import SendContext from './SendContext';

const Store = () => {
  type typeData = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }


  const [loading, data, error] = useApi('https://fakestoreapi.com/products');
  return (
    <div>
      <div className='grid grid-cols-3'>
        {
          data?.data?.map((e: typeData) => {

            return (
              <div key={e.id}>
                <img src={e.image} alt="loading" />
                <p>{e.title}</p>
                <p>{e.description}</p>
                <div>
                  <p>{e.rating.rate}</p>
                  <p>{e.rating.count}</p>
                </div>
                <h1>{e.price}</h1>
                <button>add to cart</button>

                <UserContext.Provider value={{ price : e.price , description : e.description}} >
                  <SendContext />
                </UserContext.Provider>

              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default Store