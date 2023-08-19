import React from 'react';
import Frontend from "./Frontend";
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function Index() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
        </BrowserRouter>
    )
}
