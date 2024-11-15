import { useState } from "react"


export const Login = () => {

  const [state,setState] = useState('S&apos;inscrire')

  const [email,setEmail] = useState('')

  const [password,setPassword] = useState('')

  const [name,setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

  }



  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'S&apos;inscrire'? "Créer un compte" : "Se connecter"}</p>
        <p>Veuillez {state === 'S&apos;inscrire' ? "vous inscrire" : "vous connecter"} pour prendre rendez-vous.</p>
        {
          state === "S&apos;inscrire" && <div className="w-full ">
          <p>Nom et prénom</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e)=>setName(e.target.name)} value={name} required></input>
        </div>
        }
        

        <div className="w-full ">
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" onChange={(e)=>setEmail(e.target.email)} value={email} required></input>
        </div>

        <div className="w-full ">
          <p>Password</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" onChange={(e)=>setPassword(e.target.password)} value={password} required></input>
        </div>

        <button className="bg-blue-300 text-white w-full py-2 rounded-md text-base ">{state === 'S&apos;inscrire'? "Créer un compte" : "Se connecter"}</button>
        {
          state === "S&apos;inscrire"
          ? <p>Vous avez déjà un compte ? <span onClick={()=>setState('Se connecter')} className="text-primary underline cursor-pointer">Se connecter</span> </p>
          : <p>Créer un nouveau compte ? <span onClick={()=>setState('S&apos;inscrire')} className="text-primary underline cursor-pointer">Cliquez ici</span></p>
        }
      </div>
    </form>
  )
}
