import { createContext, useEffect, useState } from "react"
import { api } from "../services/api";
import { toast } from "react-toastify";

interface ICartContextProviderProps {
  children: React.ReactNode
}
interface ICartContext {
  listProduct: IProducts[];
  listCart: IProducts[];
  addCart: (id: Number) => void
  removeCart: (id: Number) => void
  removeAll: (id: Number) => void
  totalValue: number
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  handleSearch: () => IProducts[]
}

export interface IProducts {
  name: string;
  category: string;
  price: number;
  id: Number;
  img: string
}


export const CartContext = createContext({} as ICartContext);

export const CartsProvider = ({ children }: ICartContextProviderProps) => {
  const [selectProduct, setSelectProduct] = useState(null)
  const [listProduct, setListProduct] = useState<IProducts[]>([])
  const [listCart, setListCart] = useState<IProducts[]>([])
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:TOKEN") || "null")
    const products = async () => {
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setListProduct(response.data)
      }
      catch {
      }
    }
    products()
  }, [])

  const addCart = (id: Number) => {
    if (!listCart.some((product) => product.id === id)) {
      const newProduct = listProduct.find((product) => product.id === id)
      if (newProduct) {
        setListCart([...listCart, newProduct])
        toast.success("Adicionado ao carrinho com sucesso")
      }
      else {
        toast.error("Item já adicionado");
      }
    }
  }

  const removeCart = (id: Number) => {
    const newList = listCart.filter((listCart) => listCart.id !== id)
    setListCart(newList)
    toast.success("Removido com sucesso")
  }

  const totalValue = listCart.reduce((previousValue: number, currentAmount: { price: number; }) => {
    return previousValue + currentAmount.price
  }, 0)

  const handleSearch = () => {
    const filter = listProduct.filter((product: { name: string | string[] }) => {
      if (Array.isArray(product.name)) {
        return product.name.some((name) => {
        })
      } else {
        return product.name.toUpperCase().includes(searchText)
      }
    })
    return filter;
  }

  const removeAll = (id: Number) => {
    const newList = listCart.filter((listCart) => listCart.id === id)
    setListCart(newList)
    toast.success("Itens removidos com sucesso")
  }





  return (
    <CartContext.Provider value={{ listProduct, addCart, listCart, removeCart, totalValue, searchText, setSearchText, handleSearch, removeAll }}>
      {children}
    </CartContext.Provider>
  )
}