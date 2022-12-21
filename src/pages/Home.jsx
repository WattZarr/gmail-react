import Action from "../components/Action"
import Extra from "../components/Extra"
import Result from "./Result"
import { Outlet } from "react-router-dom" 

const Home = () => {
  return (
    <>
    <div className="flex md:justify-between mt-4 w-full">
        <Action></Action>
        <Outlet></Outlet>
        <Extra></Extra>
    </div>
    {/* <Result></Result> */}
    </>
  )
}

export default Home