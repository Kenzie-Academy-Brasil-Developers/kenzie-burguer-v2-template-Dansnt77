import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../providers/CartContext';
import { useContext } from 'react';

export interface IModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CartModal = ({ setModal }: IModalProps) => {
  const { listCart } = useContext(CartContext)
  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setModal(false)
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        {listCart.length > 0 ? (
          <div className='cartBox'>
            <CartProductList />
          </div>
        ) : (
          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              Sua sacola está vazia
            </StyledTitle>
            <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
          </div>
        )}
      </dialog>
    </StyledCartModalBox>

  )
}

  ;

export default CartModal;
