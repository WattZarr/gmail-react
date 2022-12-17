import Action from "../components/Action"
import Extra from "../components/Extra"
import { Outlet } from "react-router-dom" 

const Home = () => {
  return (
    <div className="flex justify-between mt-4 w-full">
        <Action></Action>
        <Outlet></Outlet>
        <Extra></Extra>
    </div>
  )
}

export default Home