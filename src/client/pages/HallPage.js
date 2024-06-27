import { useNavigate, useLocation } from "react-router-dom"
import BuyingFilmInfo from "../components/BuyingFilmInfo";
import HallScheme from "../components/HallScheme/HallSheme";
import { useState } from "react";

export default function HallPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { filmId, selectedDay, time, hallId } = location.state || {};

    const [selectedChairs, setSelectedChairs] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    //needFetch (запрос инфы о фильме)
    const filmInfo = {
        filmId: 1,
        title: 'Звёздные войны XXIII: Атака клонированных клонов',
        description: 'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном',
        duration: "130 минут",
        country: "США",
    }

    //needFetch (запрос позиций зала)
    const hallInfo = {
        title: 'Зал 1',
        price: {
            standart: 250,
            vip: 350,
        },
        rows: [
            ['disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled'],
            ['disabled', 'disabled', 'disabled', 'disabled', 'taken', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled', 'disabled'],
            ['disabled', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
            ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
            ['standart', 'standart', 'standart', 'standart', 'vip', 'vip', 'vip', 'vip', 'standart', 'disabled', 'disabled', 'disabled'],
            ['standart', 'standart', 'standart', 'standart', 'standart', 'taken', 'taken', 'taken', 'standart', 'disabled', 'disabled', 'disabled'],
            ['standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart', 'disabled', 'disabled', 'disabled'],
            ['standart', 'taken', 'standart', 'taken', 'standart', 'taken', 'standart', 'standart', 'standart', 'standart', 'standart', 'standart'],
            ['standart', 'standart', 'standart', 'standart', 'standart', 'taken', 'taken', 'taken', 'standart', 'standart', 'standart', 'standart'],
        ]
    }


    return (
        <>
            <main>
                <section className="buying">
                    <BuyingFilmInfo filmInfo={filmInfo} hallTitle={hallInfo.title} selectedDay={selectedDay} time={time} />
                    <HallScheme rows={hallInfo.rows} price={hallInfo.price}
                        selectedChairs={selectedChairs} setSelectedChairs={setSelectedChairs}
                        totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                    />

                    <p className="buying__price">Общая стоимость: <span className="ticket__details ticket__cost">{totalPrice}</span>р</p>

                    <button className="acceptin-button" onClick={() => { navigate('/payment') }}>
                        Забронировать
                    </button>
                </section>
            </main>
        </>
    )
}