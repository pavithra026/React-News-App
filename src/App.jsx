import { useState } from "react"
import Navbar from "./Components/Navbar"
import News from "./Components/News"

const App = () => {
  const [category,setCategory] = useState("general");
  const [country,setCountry] = useState("in");
  return (
    <div>
      <Navbar setCategory={setCategory} setCountry={setCountry}/>
      <News  category={category} country={country}/>
    </div>
  )
}

export default App