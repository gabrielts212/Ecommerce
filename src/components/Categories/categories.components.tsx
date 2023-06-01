// // import React from 'react'
// import "./categories.styles.css"
// import { useState } from 'react'
// import axios from  "axios"
// const categories= () => {

//     const [categories,setcategories] = useState<Category[]>([])

//     const fetchCategories = async () =>{
//         try {
// const {data} =await axios.get(`${env.apiUrl}/api/category`)



// setCategories (data)


//         }catch (error){
// console.log({error})
//         }
//     }
//   return (
//    <div className="categories-container">
//     <div className="categories-content">
// {/* {categories.map(category => <categoryItem)} */}
//     </div>
//    </div>
//   )
// }

// export default categories
import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../../src/config/env.config'
import env from '../../config/env.config'

// Styles
import './categories.styles.css'

const Categories = () => {
  // const [categories, setCategories] = useState < Category []>([])

  // console.log({ categories })

  // const fetchCategories = async () => {
  //   try {
  //     const { data } = await axios.get(`${env.apiUrl}/api/category`)

  //     setCategories(data)
  //   } catch (error) {
  //     console.log({ error })
  //   }
  // }

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map(category => <CategoryItem)} */}
      </div>
    </div>
  )
}

export default Categories