import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { useContext } from 'react';
import { CartContext, IProducts } from '../../../../providers/CartContext';

interface ICartProductProps {
  cart: IProducts
}

const CartProductCard = ({ cart }: ICartProductProps) => {
  const { removeCart } = useContext(CartContext)


  return (
    <StyledCartProductCard >
      <div className='imageBox'>
        <img src={cart.img} alt={cart.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {cart.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={() => removeCart(cart.id)}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  )
};

export default CartProductCard;
