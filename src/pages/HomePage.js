import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/component';
import boosty from '../images/boosty.svg'
import discord from '../images/discord.svg'
import { Link } from 'react-router-dom';


export default function HomePage() {
    const [money, setMoney] = useState('');
    const [cart, setCart] = useState('');
    document.title = "Главная страница";
    useEffect(() => {
        setMoney(100);
        setCart(4100110853907883);
        window.scrollTo(0, 0)
    }, [])

    const moneyHandler = (event) => {
        setMoney(event.target.value);
    };


    return (
        <>
        <main>
            <h1>Jyver Fun!</h1>
            <p>Проект находится в разработке!</p>
            <h2>Что мы создаём?</h2>
            <div className='duo'>
                <div className='center'>
                <p>Jyver Fun!</p>
                </div>
                <div>
                    <h3>Вы простой пользователь?</h3>
                    <ul>
                        <li>Вы сможете создать собственную страницу</li>
                        <li>Вы сможете найти интересные проекты и подписаться на них</li>
                        <li>Вы можете найти себе комьюнити</li>
                    </ul>
                    <h3>Вы руководитель проекта?</h3>
                    <ul>
                        <li>Создайте персональную страницу проекта</li>
                        <li>Создавайте новости вашего проекта</li>
                        <li>Используйте наши программные решения для организации работы в команде</li>
                        <li>Принимайте помощь от ваших фанатов</li>
                    </ul>
                    <h3>Вы эксперт своего дела?</h3>
                    <ul>
                        <li>Пишите информационные статьи для тех, кто только начинает свой путь в вашей сфере</li>
                        <li>Давайте советы для разработчиков</li>
                        <li>Получите знаки отличия в нашей площадке</li>
                    </ul>
                </div>
            </div>
            <h2>Особенность нашей площадки</h2>
            <p>Посмотрите на предлагаемые нами возможности</p>
            <div className='duo reverse'>
                <div className='center'>
                <p>Jyver Fun!</p>
                </div>
                <div>
                    <h3>Что даст Вам наша площадка?</h3>
                    <ul>
                        <li>Вы даём вам возможность интеграции новостной ленты на ваши сайты. Вам будет предложено API, где вы можете писать о своих
                            новостях внутри вашего проекта и интегрировать их в разные сферы
                        </li>
                        <li>Благодаря интеграции yoomoney вы сможете получать поддержку вашим проектам от ваших поклоников</li>
                        <li>Наши программные решения позволят Вам собрать все связанное с вашим проектом в одном месте и обеспечить контроль работы над проектом</li>
                        <li>Наша платформа интегрируется с VK и Telegram - просто запустите VK Mini App или Telegram App для работы с нашей площадкой</li>
                    </ul>
                </div>
            </div>
            <h3>Мы прислушиваемся к Вам</h3>
            <p> Если у вас есть свои предложения/рекомендации, можете сказать нам и мы услышим вас</p>
            <div className='duo social'>
                <Link to="//boosty.to/kaurcev">
                    <img src={boosty} alt="boosty" />
                </Link>
                <Link to="//discord.gg/aeZNnpkgxu">
                    <img src={discord} alt="discord" />
                </Link>
            </div>
            <div className='duo reverse'>
                <div className='center'>
                <form method="POST" action="https://yoomoney.ru/quickpay/confirm">
                    <input type="hidden" name="receiver" value={cart}/>
                    <input type="hidden" name="label" value="$order_id"/>
                    <input type="hidden" name="quickpay-form" value="button"/>
                    <input type="hidden" name="successURL" value="https://jyver.fun/pay/success"/>
                    <input name="sum" min="10" type='number' onChange={moneyHandler} value={money} data-type="number"/>
                    <div>
                        <label><input type="radio" name="paymentType" value="PC"/>ЮMoney</label>
                        <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label>
                    </div>
                    <input type="submit" value="Перевести"/>
                </form>
                </div>
                <div>
                <h2>Поддержка проекта на раннем этапе</h2>
                <p>Вы можете помочь нам ещё на раннем этапе</p>
                </div>
            </div>
            <div>
    </div>


        </main>
        <Footer />
        </>
    )
  }
