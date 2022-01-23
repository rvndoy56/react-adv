import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";


const product = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "../coffee-mug.png",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>  
            <hr/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                
            }} >
                {/* Compound component pattern */}
                {/* Permite añadir componentes hijos. */}
                <ProductCard product={ product } >
                    <ProductCard.Image />
                    <ProductCard.Title title={'hola mundo'} />
                    <ProductCard.Buttons />               
                </ProductCard>

                <ProductCard product={ product } >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />               
                </ProductCard>
            </div>

        </div>
    );
};

