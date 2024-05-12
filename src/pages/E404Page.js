import React, { useEffect } from 'react';
import Footer from '../components/footer/component';

export default function E404Page() {
    document.title = "404 - Страница не найдена";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        <main>
            <h1>404</h1>
            <p>Страница не найдена</p>
        </main>
        <Footer />
        </>
    )
  }
  