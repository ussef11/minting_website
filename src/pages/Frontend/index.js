import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Frontend/Home'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}
