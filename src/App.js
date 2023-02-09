import React, {useState} from 'react';
import './styles/app.css'
import NavPanel from "./components/UI/Navigation/NavPanel";
import Footer from "./components/UI/Footer/Footer";
import LogInModal from "./components/UI/Modals/LogInModal";
import Button from "./components/UI/Navigation/Buttons/Button";
import LogInForm from "./components/UI/Modals/Form/LogInForm";
import cl from "./components/UI/Modals/Form/Form.module.css";
import {Main} from "./components/UI/Main/Main";
import ProductList from "./components/UI/Main/ProductList";

function App() {

    const [modal, setModal] = useState(false);

    return (
    <div className="App">
        <LogInModal visible={modal} setVisisble={setModal}>
            <div className={cl.modalBack} onClick={() => setModal(false)}></div>
            <LogInForm>
                <button className={cl.loginExit} onClick={() => setModal(false)}>x</button>
            </LogInForm>
        </LogInModal>
        <NavPanel>
            <Button onClick={() => setModal(true)}>Log In</Button>
            <div className="middleLine">|</div>
            <Button>Sign Up</Button>
        </NavPanel>
        <ProductList/>
        <Footer/>
    </div>
  );
}

export default App;
