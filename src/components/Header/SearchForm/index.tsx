import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const { searchText, setSearchText } = useContext(CartContext)

  return (
    <StyledSearchForm>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type='text' placeholder='Digitar pesquisa' />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )
};
export default SearchForm;
