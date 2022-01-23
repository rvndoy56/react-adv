import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';



//Cuando se utilice este contexto, se pasara los valores del contexto al componente hijo
//Con el usecontext se puede acceder a los valores del contexto
export const ProductContext = createContext({} as ProductContextProps)
//Proveedor de información
const { Provider } = ProductContext;

export const ProductCard = ({children, product}:ProductCardProps) => {

    const {counter, increaseBy} = useProduct();

    return (
        // En el value se envia la información que se enviara
        <Provider value={{
            counter, 
            increaseBy, 
            product
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img}/>

                <ProductTitle title={product.title} />

                <ProductButtons 
                    counter={counter} 
                    increaseBy={increaseBy} 
                /> */}
            </div>
        </Provider>
        
    );
};

ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;