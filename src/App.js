import { useState } from 'react';
import './App.css';

function App() {

  const [basket, setBasket] = useState([])
  const [showBasket, setShowBasket] = useState(false)
  const cards = [
    {
      id: 1,
      name: "Baarbara Estate - Pineapple",
      price: "₹ 525",
      weight: "250 gms",
      image: "./images/cards/1.png"
    },
    {
      id: 2,
      name: "Cold Brew Blind",
      price: "₹ 445",
      weight: "250 gms",
      image: "./images/cards/2.png"
    },
    {
      id: 3,
      name: "Espresso Milk Blend",
      price: "₹ 445",
      weight: "250 gms",
      image: "./images/cards/2.png"
    },
    {
      id: 4,
      name: "Mandalkhan Estate",
      price: "₹ 445",
      weight: "250 gms",
      image: "./images/cards/3.png"
    },
    {
      id: 5,
      name: "Mandalkhan Estate Insta Pour",
      price: "₹ 345",
      weight: "250 gms",
      image: "./images/cards/4.png"
    },
    {
      id: 6,
      name: "Monsoon Malabar",
      price: "₹ 470",
      weight: "250 gms",
      image: "./images/cards/1.png"
    },
    {
      id: 7,
      name: "Monsoon Malabar Insta Pour",
      price: "₹ 345",
      weight: "250 gms",
      image: "./images/cards/4.png"
    },
    {
      id: 8,
      name: "Monsoon Malabar Insta Pour",
      price: "₹ 345",
      weight: "250 gms",
      image: "./images/cards/4.png"
    }
  ];

  function deleteProduct(id) {
    setBasket(basket.filter(prod => prod.id !== id));
  }
  return (
    <div className="App">
      <div className='header_line'>
        <span>FREE SHIPPING ALL OVER INDIA</span>
      </div>

      <header>
        <div className='left'>
          <img src='./images/Logo.png' />
          <span>Equipments</span>
          <span>Brew Guide</span>
          <span>Locations</span>
          <span>About</span>
          <span>Journal</span>
          <span>Menu</span>
        </div>

        <div className='right'>
          <img src='./images/search.png' />
          <img src='./images/shopping-bag.png' onClick={() => setShowBasket(!showBasket)} />
          <button>LOG IN</button>
        </div>
      </header>

      {showBasket ? <div className='basket'>
        <h2>Корзина</h2>
        <p className='close' onClick={() => setShowBasket(!showBasket)}>❌</p>
        <hr></hr>
        <div className='basket_products'>{basket.map((elem) => {
          return (
            <div key={elem.id} className='basket_product'>
              <div className='bascet_left'>
                <img className='basket_image' src={elem.image} />
                <div className='desc_box'>
                  <span>{elem.name}</span>
                  <span>{elem.price}</span>

                </div>
              </div>
              <div className='basket_right'><span>{ }</span><p onClick={() => deleteProduct(elem.id)}>❌</p></div>
            </div>
          )
        })}</div>

      </div> : ""}

      <div className='bg_box'>
        <span>ROASTERY</span>
        <span>Coffee House</span>
      </div>

      <div className='logos_box'>
        <img src='./images/logos/1.png' />
        <img src='./images/logos/2.png' />
        <img src='./images/logos/3.png' />
        <img src='./images/logos/4.png' />
        <img src='./images/logos/5.png' />
      </div>

      <div className='box_title'>
        <span>OUR BEST SELLERS</span>
        <img src='./images/Underline.png' />
      </div>

      <div className='card_box'>
        {cards.map((elem) => {
          return (
            <div key={elem.id} className='card'>
              <div className='card_top'>
                <img src={elem.image} />
              </div>

              <div className='card_bottom'>
                <div>
                  <span>{elem.name}</span>
                  <div ><span>{elem.price}</span> <span>{elem.weight}</span></div>
                </div>

                <button onClick={() => setBasket([...basket, elem])}>SELECT OPTIONS</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className='big_box'>
        <div className='box_left'>
          <span>OUR CAFE</span>
          <img src='./images/Underline.png' />
          <span>Find Roastery coffee house near you to experience finest coffee selections, live roasting spaces and cafes that are designed to give calming  coffee estate banglow experience.</span>
          <button>VIEW CAFES <img src='./images/right.png' /></button>
        </div>
        <div className='box_right'>
          <img src='./images/Image.png' />
        </div>
      </div>

      <div className='box'>
        <div>
          <img src='./images/usp2.png' />
          <span>SPECIALITY <br></br> COFFEE</span>
          <span>Speciality grade coffees that’s rated above 80+ on taste</span>
        </div>
        <div>
          <img src='./images/usp4.png' />
          <span>ROASTED <br></br>FRESH</span>
          <span>Freshly roasted, direct from our roastery</span>
        </div>
        <div>
          <img src='./images/usp3.png' />
          <span> RESPONSIBILY <br></br> SOURCED</span>
          <span>Organic and biodiverse coffee partners</span>
        </div>
        <div>
          <img src='./images/usp1.png' />
          <span>DELICIOUS <br></br> TASTE</span>
          <span>Making great taste accessible</span>
        </div>
      </div>

      <div className='person_box'>
        <div className='person_box_left'>
          <span>Roastery’s <br></br> Coffee Journal</span>
          <button>VIEW CAFES <img src='./images/right.png' /></button>
        </div>
        <div className='person_box_right'>
          <img src='./images/person.png' />
        </div>
      </div>

      <div className='box_title'>
        <span>KEY OFFERINGS</span>
        <img src='./images/Underline.png' />
      </div>

      <div className='img_box'>
        <div>
          Coffee Beans
        </div>
        <div>
          Coffee
          <br></br>
          Equipments
        </div>
        <div>
          Insta Pour
        </div>
      </div>

      <div className='video_box'>
        <span>BREW GUIDE</span>
        <img src='./images/Underline.png' />
        <iframe className='video' src="https://rutube.ru/play/embed/d13048def06c48bbec07191eaa455875/" allow="clipboard-write; autoplay" allowFullScreen></iframe>
      </div>

      <div className='form'>
        <span>STAY CONNECTED</span>
        <img src='./images/Underline.png' />
        <span>Subscribe to out newsletters now and stay up to date with new collections and exclusive offers.</span>
        <div className='input_form'>
          <input placeholder='Email' />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <footer>
        <div className='column_box'>
          <div className='column'>
            <img src='./images/brand.png' />
            <div className='line'></div>
            <div className='contacts'><img src='./images/phone.png' /> <span>9505263320</span></div>
            <div className='contacts'><img src='./images/gmail.png' /> <span>support@roasterycoffee.co.in</span></div>
          </div>
          <div className='column'>
            <span className='title'>COMPANY</span>
            <span>About us</span>
            <span>Media</span>
            <span>Cafe Locations</span>
            <span>Brew Guide</span>
            <span>Contact Us</span>
          </div>
          <div className='column'>
            <span className='title'>OUR POLICIES</span>
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Return Policy</span>
          </div>
          <div className='column'>
            <span className='title'>GET IN TOUCH</span>
            <div className='contacts1'><img src='./images/facebook.png' /> <img src='./images/instagram.png' /> <img src='./images/twitter.png' /></div>
          </div>
        </div>
        <div className='footer_line'>
          <img src='./images/Underline2.png' />
          <div><span>© Copyright 2022 | A unit of NISANTPRASHANT</span> <span>© Copyright 2022 | A unit of NISANTPRASHANT</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
