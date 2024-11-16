import { useState } from "react"
import { assets } from "../assets/assets"


export const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Khaled Toumi",
    image : assets.profile_pic,
    email : 'khaledtoumi@gmail.com',
    phone : '+216  99369965',
    address:{
      line1:"G38V+Q9",
      line2:"Zarzis"
    },
    gender:"Masculain",
    dob:"2002-03-27"
  })

  const [isEdit,setIsEdit] = useState(true)




  return (
    <div>

      <img src={userData.image} alt="" />

      {
        isEdit
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        : <p>{userData.name}</p> 
      }

      <hr />

      <div>
        <p>COORDONNÉES</p>
        <div>
          <p>Email:</p>

          {
        isEdit
        ? <input type="email" value={userData.email} onChange={e => setUserData(prev => ({...prev,email:e.target.value}))}/>
        : <p>{userData.email}</p> 
      }
          <p>Téléphone:</p>
          {
        isEdit
        ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
        : <p>{userData.phone}</p> 
      }
        <p>Adresse:</p>
        
        {isEdit
        ?  <p>
          <input type="text"  onChange={e => setUserData(prev => ({...prev,address:{ ...prev.address,line1: e.target.value}}))} value={userData.address.line1}/>
          <br />
          <input type="text" onChange={e => setUserData(prev => ({...prev,address:{ ...prev.address,line2: e.target.value}}))} value={userData.address.line2}/>          

        </p>
        : <p>
          {userData.address.line1}
          <bt />
          {userData.address.line2}


        </p>
}     

        
        
      
          
        </div>
      </div>

      
      <p>INFORMATIONS DE BASE</p>
      <div>

      <p>Genre</p>
      {
        isEdit 
        ? <select onChange={(e)=> setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
          <option value="Masculin">Masculin</option>
          <option value="Féminin">Féminin</option>
        </select>
        : <p>{userData.gender}</p>
      }

      </div>
      
    </div>
  )
}
