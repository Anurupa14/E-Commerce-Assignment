import {Component} from 'react'
import {BsCart3} from 'react-icons/bs'
import Categories from '../Categories'
import Products from '../Products'

import './index.css'

class Main extends Component {
  state = {categoryList: [], productsList: [], isActive: '', count: 0}

  componentDidMount = () => {
    this.getProductsData()
  }

  getProductsData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
      options,
    )
    const data = await response.json()
    const fetchedcategoryList = data.categories.map(each => each.name)
    console.log(fetchedcategoryList)
    const fetchedProductsData = data.categories
    console.log(data.categories)
    this.setState({
      categoryList: fetchedcategoryList,
      productsList: fetchedProductsData,
    })
  }

  render() {
    const {categoryList, productsList, isActive, count} = this.state
    return (
      <div className="body">
        <div className="banner">
          <p> E-Commerce </p>
          <div className="cartIconContainer">
            {' '}
            <BsCart3 /> <p>{count === 0 ? ' ' : {count}}</p>
          </div>
        </div>
        <div className="categoryNprodContainer">
          <div className="categoryContainer">
            <ul className="categoryList">
              {categoryList.map(each => (
                <Categories
                  key={each}
                  details={each}
                  isActive={each === categoryList[0]}
                />
              ))}
            </ul>
          </div>
          <div className="productContainer">
            <ul className="productsListContainer">
              {productsList.map(each => (
                <Products key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
