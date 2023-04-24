import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';



const ShopPage = () => {
  const [modal, setModal] = useState(false)
  return (
    <StyledShopPage>
      {modal ? <CartModal setModal={setModal} /> : null}
      <Header setModal={setModal} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
      <ToastContainer position='top-right' />
    </StyledShopPage>

  )
};

export default ShopPage;
