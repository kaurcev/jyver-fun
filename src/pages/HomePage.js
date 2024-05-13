import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/component';
import { Link } from 'react-router-dom';
import boosty from '../images/boosty.svg'
import discord from '../images/discord.svg'


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
    const message = (text) =>{
        alert(text);
    }

    return (
        <>
        <div className='hello'>
            <div className='content'>
                <div className='logo'>
                    <h1>JYVER FUN</h1>
                    <p>Занимаемся разработкой универсальной площадки для разработчиков</p>
                </div>
                <Link className='full' onClick={() => message("Проект находится в разработке")} to="#">Попробовать</Link>
                <Link className='nfull' onClick={() => message("Проект находится в разработке")} to="#">Помочь</Link>
                <p className='mini'>*Проект находится в разработке</p>
            </div>
        </div>
        <main>
        <h2>Что мы создаём?</h2>
        <h3>Что могут лидеры проектов</h3>
        <p>Лидеры проектов нашей универсальной площадки имеют возможность создавать персональные страницы для своих проектов. Это позволяет им обеспечить сотрудничество с разработчиками, собрать все ресурсы, связанные с проектом, в одном удобном интерфейсе. Благодаря интеграции с платежной системой YooMoney, лидеры проектов также могут получать финансовую поддержку от своих преданных фанатов. Если необходимо, они могут также использовать платформу для поиска дополнительных разработчиков, которые присоединятся к проекту.</p>
        <h3>Что могут пользователи</h3>
        <p>Пользователи нашей платформы имеют возможность следить за проектами, которые их интересуют, в удобной новостной ленте. Они также могут создавать персональные заявки для поиска команды и присоединения к работе над проектами. Это позволяет пользователям найти подходящие проекты и внести свой вклад в разработку.</p>
            <h3>Мы прислушиваемся к Вам</h3>
                <ul>
                    <li>В Discord вы можете связаться с разработчиками</li>
                    <li>На Boosty вы можете поддержать главного разработчика</li>
                </ul>
                <div className='duo social'>
                        <Link to="//discord.gg/aeZNnpkgxu">
                            <img src={discord} alt="discord" />
                        </Link>
                        <Link to="//boosty.to/kaurcev">
                            <img src={boosty} alt="boosty" />
                        </Link>
                </div>
                <p>Если у вас есть свои предложения/рекомендации, можете сказать нам и мы услышим вас</p>
                <h3>Ранняя поддержка</h3>
                <p>Через форму ниже вы можете поддержать проект</p>
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
                    <input type="submit" value="Поддержать"/>
                </form>
        </main>
        <Footer />
        </>
    )
  }
