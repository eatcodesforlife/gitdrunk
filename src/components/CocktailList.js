import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CocktailList = () => {

  const { isLoading, cocktails } = useGlobalContext()

  return isLoading 
  ? (
      <Loading />
    )
  : cocktails.length < 1
  ? (
      <h3 className='section-title'>
        No cocktails matched your search criteria
      </h3>
    )
  : (
      <section className="section">
        <h2 className="section-title">
          cocktails
        </h2>
        <div className="cocktails-center">
          {
            cocktails.map((cocktail) => {
              return <Cocktail key={cocktail.id} {...cocktail}/>
            })
          }
        </div>
      </section>
    )
}
export default CocktailList
