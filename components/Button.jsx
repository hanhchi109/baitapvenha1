import React, {useState} from 'react';


const Button = () => {
    let [infor, setInfor] = useState({name:'', age:''})
    const handleClick = ()=>{
        let name =window.prompt("Điền tên của bạn: ");
       
        while (!name) {
          alert('bạn đã không điền tên của bạn');
          name = window.prompt('Vui lòng điền tên của bạn:'); 
        }
        let age = window.prompt("Điền tuổi của bạn: ");
        while (!age) {
          alert('Vui lòng điền  tuổi của bạn');
          name = window.prompt('Điền tên của bạn:'); 
          age = window.prompt('Điền tuổi của bạn:'); 
        }
        
        setInfor({ name, age });

    }
  return (
    <div>
       <button className='Button' onClick={handleClick}>Điền thông tin cá nhân của bạn</button>
        <h1>Thông tin người dùng: </h1>
        <p>Tên: {infor.name}</p>
        <p>Tuổi: {infor.age}</p>

    </div>
  )
}

export default Button

