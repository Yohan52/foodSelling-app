import Reat from 'react';
import Navbar from './components/navbar';
import ProductCard from './componenets/ProductCard';

const App = () => {
    return (
        <div className="app-cotainer">
            <Navbar />
            <div className="product-list">
                <ProductCard
                    name="Spicy Chicken Burger"
                    price="Rs.450"
                    image="/image/burger.jpg"
                />
                <ProductCard
                    name="Veggie Pizza"
                    price="Rs.750"
                    image="/image/veggiePizza"
                />
            </div>
        </div>
    );
};

export default App;