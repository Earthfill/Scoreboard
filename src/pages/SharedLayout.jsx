import { Outlet } from "react-router-dom"

const SharedLayout = () => {
  return (
    <main className="bg-neutral bg-opacity-100 bg-[url('/qqquad.svg')] bg-no-repeat bg-cover h-screen">
      <Outlet />
    </main>
  )
}

export default SharedLayout