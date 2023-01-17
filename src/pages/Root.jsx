import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container/Container'

const Root = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default Root