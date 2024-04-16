import {useEffect} from 'react';

export default function ChangeRole() {
  
        useEffect(() => {
        const buttonElement = document.getElementById('rolechange');
          
          buttonElement.addEventListener('click', () => {
            const typeElement = document.getElementById('role');
      
            typeElement.innerHTML = document.getElementById('input1').value;

            console.log(typeElement.value);

          }); 
          return () => {if (buttonElement) {buttonElement.removeEventListener('click');}};
        }, []);
 
  }