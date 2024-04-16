import { useEffect} from 'react';

export default function ChangeSalary() {
  
  
        useEffect(() => {
        const buttonElement = document.getElementById('salarychange');

        const companyWarning = document.getElementById('companywarning');
          
          buttonElement.addEventListener('click', () => {
            const typeElement = document.getElementById('salary');
      
            typeElement.innerHTML = document.getElementById('input').value;

            console.log(typeElement.value);

            if (+typeElement.textContent > 25000) {
                companyWarning.textContent = 'This employee\'s salary is too high!';
              } else {
                companyWarning.textContent = 'Just right!';
              }

          }); 
          return () => {
          
              buttonElement.removeEventListener('click');
            

          };
        }, []);
 
  }