import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';

const ProductList = () => {
  const { listProduct } = useContext(CartContext)
  return (
    <StyledProductList>
      {listProduct.map((product) => {
        return <ProductCard product={product} key={product.name} />
      })}

    </StyledProductList>
  )

};
export default ProductList;
