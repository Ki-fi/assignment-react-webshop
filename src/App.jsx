import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button buttonType="button" isDisabled={false} onClick={"/"} buttonText="to the collection"/>
          <Button buttonType="button" isDisabled={false} onClick={"/"} buttonText="shop all bags"/>
          <Button buttonType="button" isDisabled={true} onClick={"/"} buttonText="pre-orders"/>
        </nav>
        <main>
          <Product tag="Best seller" image={bag_1} name="The handy bag" price="400"/>
          <Product tag="Best seller" image={bag_2} name="The stylish bag" price="250"/>
          <Product tag="New collection" image={bag_3} name="The simple bag" price="300"/>
          <Product tag="New collection" image={bag_4} name="The trendy bag" price="150"/>
        </main>
      </>
  )
}

export default App
