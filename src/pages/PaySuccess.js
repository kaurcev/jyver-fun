import React, { useEffect } from 'react';
import Footer from '../components/footer/component';

export default function PaySuccess() {
    document.title = "Платёж принят!";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <main>
            <h1>Платёж принят!</h1>
            <p>Спасибо за раннюю поддержку! Присоеденяйтесь в нащ Discord сервер</p>
        </main>
        <Footer />
        </>
    )
  }
  