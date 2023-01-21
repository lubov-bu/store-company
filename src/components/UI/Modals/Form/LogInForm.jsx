import React from 'react';
import cl from './Form.module.css';

// const modal = document.querySelector(".logInModal");
//
// function closeModal () {
//
//     modal.classList.toggle("active");
// }
// function exitModalOutside () {
//     modal.classList.toggle("active");
// }
//
// window.addEventListener('click', function(e){
//     if ((modal.classList.contains("active")) && (e.target != modal)) {
//         modal.classList.remove("active");
//     }
// const modal = {
//     CLASSES: {
//         SHOW: 'active',
//         CLOSE_BUTTON: 'closebutton',
//         MODAL: 'modaloverlay',
//         READ: 'read'
//     },
//     isVisible: false,
//     el: document.getElementById("modaloverlay"),
//     initialize() {
//         modal.addEvents();
//     },
//     show() {
//         modal.el.classList.add(modal.CLASSES.SHOW);
//         modal.isVisible = true;
//     },
//     hide() {
//         modal.el.classList.remove(modal.CLASSES.SHOW);
//         modal.isVisible = false;
//     },
//     addEvents() {
//         modal.removeEvents();
//         modal.el.addEventListener('click', modal.eventHandlers.onModalClick);
//         window.addEventListener('click', modal.eventHandlers.onWindowClick);
//     },
//     removeEvents() {
//         modal.el.removeEventListener('click', modal.eventHandlers.onModalClick);
//         window.removeEventListener('click', modal.eventHandlers.onWindowClick);
//     },
//     eventHandlers: {
//         onModalClick(event) {
//             event.stopImmediatePropagation();
//             if (!event.target) {
//                 return;
//             }
//
//             if (event.target.classList.contains(modal.CLASSES.CLOSE_BUTTON)) {
//                 modal.hide();
//             }
//         },
//         onWindowClick(event) {
//             if (event.target.classList.contains(modal.CLASSES.READ)) {
//                 modal.show();
//             } else {
//                 modal.hide();
//             }
//         }
//     }
// }
//
// modal.initialize();


    const LogInForm = () => {
    return (
        <div className={cl.logInForm}>
            <p>Log in and Go shopping!</p>
            <a href="#" className={cl.loginExit}>x</a>
            <input type="text" placeholder="Username" className={cl.loginInput}/>
            <input type="text" placeholder="Password" className={cl.loginPassInput}/>
            <button className={cl.logInButton}>Log In</button>
        </div>
    );
};

export default LogInForm;