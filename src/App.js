import React, {useState} from 'react';
import './styles/app.css'
import ProductsList from "./components/ProductsList";
import NavPanel from "./components/UI/Navigation/NavPanel";
import Footer from "./components/UI/Footer/Footer";
import LogInModal from "./components/UI/Modals/LogInModal";
// import LogInForm from "./components/UI/Modals/Form/LogInForm";
import Button from "./components/UI/Navigation/Buttons/Button";

function App() {
    const [modal, setModal] = useState(false);

    return (
    <div className="App">
        <LogInModal visible={modal} setVisisble={setModal}></LogInModal>
        <NavPanel>
            <Button onClick={() => setModal(true)}>Log In</Button>
            <div className="middleLine">|</div>
            <Button>Sign Up</Button>
        </NavPanel>
        <ProductsList title="Top"/>
        <ProductsList title="Shoes"/>
        <ProductsList title="Bottom"/>
        <Footer/>
    </div>
  );
}

export default App;
