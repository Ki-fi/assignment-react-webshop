import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import Tile from "./components/Tile.jsx";
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

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
        <footer>
          <Tile isImage={false} title="The brand">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p></Tile>
          <Tile isImage={true} image={brand}/>
          <Tile isImage={true} image={ourStory}/>
            <Tile isImage={false} title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Tile>
        </footer>
      </>
  )
}

export default App
