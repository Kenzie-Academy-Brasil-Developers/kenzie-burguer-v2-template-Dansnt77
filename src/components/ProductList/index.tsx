import { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';

const ProductList = () => {
  const { listProduct, searchText } = useContext(CartContext)

  const [filterItems, setFilterItems] = useState(listProduct)

  useEffect(() => {
    if (!searchText) {
      setFilterItems(listProduct)
    } else {
      const newList = listProduct.filter((newProduct) =>
        newProduct.name.toLowerCase().includes(searchText.toLowerCase()) ||
        newProduct.category.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilterItems(newList)
    }

  }, [searchText, listProduct])
  return (
    <StyledProductList>
      {filterItems.length > 0 ? (
        filterItems && Array.isArray(listProduct) && filterItems.map((product) => {
          return <ProductCard product={product} key={product.name} />
        })
      ) : (
        "O produto pesquisado não foi encontrado"
      )}
    </StyledProductList>
  )

};
export default ProductList;
