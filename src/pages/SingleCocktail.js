import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import CocktailInfo from './CocktailInfo'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ cocktail, setCocktail ] = useState([])
  const {id} = useParams()


  useEffect(() => {
    setIsLoading(true)
    const fetchCocktail = async() => {
      
      try{
        const res = await fetch(`${url}${id}`)
        const data = await res.json()

        const {drinks} = data

        if(data){
          const {
            strDrink: name, 
            strInstructions: instructions, 
            strDrinkThumb: image,
            strCategory: category, 
            strGlass: glass, 
            strIngredient1,
            strIngredient2, 
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = drinks[0]

          const recipe = [
            strIngredient1,
            strIngredient2, 
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10
          ]

          const cocktailInfo = { 
            id,
            name, 
            image,
            category,
            glass,
            instructions,
            recipe
          }

          setCocktail(cocktailInfo)
        }else{
          setCocktail([])
        }
        setIsLoading(false)
      }
      catch(err){
        console.log(err)
      }
      
    }

    fetchCocktail()
  }, [id])

  return isLoading 
    ? (
        <Loading />
      )
    : !cocktail 
    ? (
        <h2 className="section-title">fetching error</h2>
      )
    : (
      <CocktailInfo {...cocktail}/>
    )
}

export default SingleCocktail
