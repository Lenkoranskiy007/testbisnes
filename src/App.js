import React, {useEffect, useState} from 'react'
import './index.scss'
import Line from './assets/line.svg'
import axios from 'axios'
import Icon from './assets/icon.svg'
import Minus from './assets/minus.svg'

function App() {

  const [data, setData] = useState(null)
 console.log(data)



  

  useEffect(() => {
    if (data) {
      return;
    }
  
     axios.get(' https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses').then(res => {

      let programs = {}
      for(let i = 0; i < res.data.data.length; i++){
            let title = res.data.data[i].title 
            if(programs.hasOwnProperty(title) && programs[title].length == 2){
              continue;
            }else if(!programs.hasOwnProperty(title)){
              programs[title] = [res.data.data[i]] 
            }else{
              programs[title].push(res.data.data[i])
            }
      }

      setData(programs)
    })
  }, [])


  return (
    <>
      <div className="container">
         <h1>Специализированные дисциплины</h1>
        <Main item={data}/>       
        <Total/>
    
      </div>
    
    </>
  );
}

const Total = () => {
  return <div className="wrapper">
     <div className="total">
           <div className="practice">
           <p className="practice__title">
           Практические модули
           </p>
           <p className="practice__descr">Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
           </div>
           <div className="attestation">
           <p className="attestation__title">
           Итоговая аттестация
           </p>
           <ul className="attestation__descr">
             <li><span>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</span> </li>
             <li><span> Защита итоговой аттестационной работы</span></li>
           </ul>
           </div>
         </div>
  </div>
}

const Main = (props) => {

  const [popup, setPopup ] = useState(false)
  const [selected, setSelected] = useState(null)
  const toogle = (index) => {
    if (selected == index) {
      return setSelected(null)
    }
    setSelected(index)
  } 

 
  

  return <>
{
  props.item && Object.keys(props.item).map((item,index) => {
     if (index < 5) {
      return <div className="wrapper">
         <div className="content">
      <div className="content__title">
  <p>{item}</p>    
          </div>
          <div className="content__block">
            
            
            { props.item[item].map((programItem, index) => {
             

              
              return <div className="module">
                
              <div  className="module__title">
                <div className="lineImg"  > <img src={Line} alt="icon"/></div>
                <div onClick={() => toogle(index)}  className='number'>
                  {selected == index ? <img src={Icon}/> : <img src={Minus}/> }
                
                    <p>{index + 1} модуль
                  </p></div>
              </div> 
            <div  className={selected == index ?  "specialized" : "specialized-popup" }>
             <ul className="list">
               { programItem.specializedSubjects && programItem.specializedSubjects.map((subject, subjectIndex) => {

                 if (subjectIndex < 5) {
                   return <li><span> {subject} </span> </li>
                 } else if (subjectIndex >= 5) {
                  return   ''
                 }  
                 
             
               })}

              
             </ul>
            </div>
            
            </div>

              
            })}
            
            
          </div>
        </div>  
       
        </div>
        

     } else if (index >= 5) {
       return ''
     }
      
  })
}

 
  </>
}





export default App;
