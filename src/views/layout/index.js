import React from 'react'
import Navbar from '../../components/navigation'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="flex flex-col h-full justify-between">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
