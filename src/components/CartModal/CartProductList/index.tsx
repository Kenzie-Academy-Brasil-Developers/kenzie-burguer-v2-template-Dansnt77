import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { useContext } from 'react';

const CartProductList = () => {

  const { listCart, totalValue, removeAll } = useContext(CartContext)



  return (
    <StyledCartProductList>
      <ul>
        {listCart.map((cart) => {
          return <CartProductCard key={cart.name} cart={cart} />
        })}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>R$ {totalValue.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => removeAll(0)}>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
};

export default CartProductList;
