import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, IProducts } from '../../../providers/CartContext';
import { useContext, useEffect, useState } from 'react';
import { set } from 'zod';

interface ICart {
  product: IProducts;
}

const ProductCard = ({ product }: ICart) => {
  const { addCart } = useContext(CartContext)


  return (

    <StyledProductCard>

      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {product.price.toFixed(2)}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => addCart(product.id)} >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )


};

export default ProductCard;
