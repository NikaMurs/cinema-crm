import poster1 from '../img/poster1.jpg'
import poster2 from '../img/poster2.jpg'


export default function MainPage() {

    return (
        <>
            <header className="page-header">
                <h1 className="page-header__title">Идём<span>в</span>кино</h1>
            </header>

            <nav className="page-nav">
                <div className="page-nav__day page-nav__day_today">
                    <span className="page-nav__day-week">Пн</span><span className="page-nav__day-number">31</span>
                </div>
                <div className="page-nav__day">
                    <span className="page-nav__day-week">Вт</span><span className="page-nav__day-number">1</span>
                </div>
                <div className="page-nav__day page-nav__day_chosen">
                    <span className="page-nav__day-week">Ср</span><span className="page-nav__day-number">2</span>
                </div>
                <div className="page-nav__day">
                    <span className="page-nav__day-week">Чт</span><span className="page-nav__day-number">3</span>
                </div>
                <div className="page-nav__day">
                    <span className="page-nav__day-week">Пт</span><span className="page-nav__day-number">4</span>
                </div>
                <div className="page-nav__day page-nav__day_weekend">
                    <span className="page-nav__day-week">Сб</span><span className="page-nav__day-number">5</span>
                </div>
                <div className="page-nav__day page-nav__day_next">
                </div>
            </nav>

            <main>
                <section className="movie">
                    <div className="movie__info">
                        <div className="movie__poster">
                            <img className="movie__poster-image" alt="Звёздные войны постер" src={poster1} />
                        </div>
                        <div className="movie__description">
                            <h2 className="movie__title">Звёздные войны XXIII: Атака клонированных клонов</h2>
                            <p className="movie__synopsis">Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.</p>
                            <p className="movie__data">
                                <span className="movie__data-duration">130 минут</span>
                                <span className="movie__data-origin">США</span>
                            </p>
                        </div>
                    </div>

                    <div className="movie-seances__hall">
                        <h3 className="movie-seances__hall-title">Зал 1</h3>
                        <ul className="movie-seances__list">
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">10:20</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:10</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:40</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">22:00</a></li>
                        </ul>
                    </div>
                    <div className="movie-seances__hall">
                        <h3 className="movie-seances__hall-title">Зал 2</h3>
                        <ul className="movie-seances__list">
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">11:15</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:40</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">16:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:30</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">21:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">23:30</a></li>
                        </ul>
                    </div>
                </section>

                <section className="movie">
                    <div className="movie__info">
                        <div className="movie__poster">
                            <img className="movie__poster-image" alt="Альфа постер" src={poster2} />
                        </div>
                        <div className="movie__description">
                            <h2 className="movie__title">Альфа</h2>
                            <p className="movie__synopsis">20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.</p>
                            <p className="movie__data">
                                <span className="movie__data-duration">96 минут</span>
                                <span className="movie__data-origin">Франция</span>
                            </p>
                        </div>
                    </div>
                    <div className="movie-seances__hall">
                        <h3 className="movie-seances__hall-title">Зал 1</h3>
                        <ul className="movie-seances__list">
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">10:20</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:10</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:40</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">22:00</a></li>
                        </ul>
                    </div>
                    <div className="movie-seances__hall">
                        <h3 className="movie-seances__hall-title">Зал 2</h3>
                        <ul className="movie-seances__list">
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">11:15</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:40</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">16:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:30</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">21:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">23:30</a></li>
                        </ul>
                    </div>
                </section>

                <section className="movie">
                    <div className="movie__info">
                        <div className="movie__poster">
                            <img className="movie__poster-image" alt="Хищник постер" src={poster2} />
                        </div>
                        <div className="movie__description">
                            <h2 className="movie__title">Хищник</h2>
                            <p className="movie__synopsis">Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.</p>
                            <p className="movie__data">
                                <span className="movie__data-duration">101 минута</span>
                                <span className="movie__data-origin">Канада, США</span>
                            </p>
                        </div>
                    </div>
                    <div className="movie-seances__hall">
                        <h3 className="movie-seances__hall-title">Зал 1</h3>
                        <ul className="movie-seances__list">
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">09:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">10:10</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">12:55</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:15</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">14:50</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">16:30</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:00</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">18:50</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">19:50</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">20:55</a></li>
                            <li className="movie-seances__time-block"><a className="movie-seances__time" href="/hall">22:00</a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}