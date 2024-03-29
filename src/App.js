import React, {useState} from 'react';
import './styles/app.css';
import './styles/normalize.css'
import './styles/media.css';
import NavPanel from "./components/UI/Navigation/NavPanel";
import Footer from "./components/UI/Footer/Footer";
import LogInModal from "./components/UI/Modals/LogInModal";
import Button from "./components/UI/Navigation/Buttons/Button";
import ModalLogInForm from "./components/UI/Modals/Form/ModalLogInForm";
import "./components/UI/Modals/Form/Form.css";
import ProductList from "./components/UI/Main/ProductList";

function App() {

    const [modal, setModal] = useState(false);

    return (

        <div className="App">
            <LogInModal visible={modal} setVisisble={setModal}>
                <div className="modalBack" onClick={() => setModal(false)}></div>
                <ModalLogInForm>
                    <button className="loginExit" onClick={() => setModal(false)}>x</button>
                </ModalLogInForm>
            </LogInModal>
            <NavPanel>
                <Button onClick={() => setModal(true)}>Log In</Button>
                <div className="middleLine">/</div>
                <Button onClick={() => setModal(true)}>Sign Up</Button>
                <a href="#">
                    <img className="product__cart" src="/images/cart.png" alt="Cart"/>
                </a>
            </NavPanel>
            <div>
                <ProductList/>
            </div>
            <Footer/>
        </div>

    );
}

export default App;
