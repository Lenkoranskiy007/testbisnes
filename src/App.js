import React, {useEffect, useState} from 'react'
import './index.scss'
import Icon from './assets/line.svg'
import axios from 'axios'

function App() {

  const [data, setData] = useState(null)
 console.log(data)
  

  useEffect(() => {
    if (data) {
      return;
    }
  
     axios.get(' https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses').then(res => {

      // let newItems = []
      // for(let i = 0; i < res.data.data.length; i++){
      //   for(let k = 0; k < newItems.length; k++){
      //       if(newItems[k].title == res.data.data[i].title){
      //         break;
      //      }else if (k == newItems.length - 1){
      //       newItems.push(res.data.data[i])
      //      }
      //    }
       // }
    
       const arr = res.data.data.filter((item, index) => {
         return res.data.data.indexOf(item) === index
          })
     
      setData(arr)
    })
  }, [])


  return (
    <>
      <div className="container">
         <h1>Специализированные дисциплины</h1>
        <div className="wrapper">  
        <Main item={data}/>
       


        </div>
      </div>
    
    </>
  );
}

const Main = (props) => {
  return <>
{
  
}

<div className="content">
       <div className="content__title">
           <p>Антикризисное управление</p>
          
           </div>
           <div className="content__block">
             <div className="module">
             
             <div className="module__title">
               <div className="module__title__icon"> <img src={Icon} alt="icon"/></div>
             <div className="module__title__number"> <p>1 Модуль</p></div>
               </div> 
             <div className="specialized">
              <ul className="list">
               <li><span>Маркетинговые стратегии антикризисного менеджмента</span> </li>
               <li><span> Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение</span></li>
               <li><span>Правовые основы антикризисного управления</span> </li>
               <li><span>Проектный менеджмент в антикризисном управлении</span> </li>
              <li><span>Проектный менеджмент в антикризисном управлении</span> </li>  
              </ul>
             </div>
             </div>
             <div className="module">
               <div className="module__title__icon">
               <img src={Icon} alt="icon"/>
                <p className="module__title__number">2 Модуль</p>
               </div>
             
             <div className="specialized">
              <ul className="list">
               <li><span>Маркетинговые стратегии антикризисного менеджмента</span> </li>
               <li><span> Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение</span></li>
               <li><span>Правовые основы антикризисного управления</span> </li>
               <li><span>Проектный менеджмент в антикризисном управлении</span> </li>
              <li><span>Проектный менеджмент в антикризисном управлении</span> </li>  
              </ul>
             </div>
             </div>
           </div>
         </div>  
  </>
}

export default App;
