import { useNavigate, useLocation } from "react-router-dom"
import BuyingFilmInfo from "../components/BuyingFilmInfo";
import HallScheme from "../components/HallScheme/HallSheme";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userReducer";

export default function HallPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectedDay = useSelector((state) => state.user.selectedDay);
    const selectedTime = useSelector((state) => state.user.selectedTime);
    const selectedHall = useSelector((state) => state.user.selectedHall);
    const selectedFilm = useSelector((state) => state.user.selectedFilm);


    const [selectedChairs, setSelectedChairs] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

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

    const handleClick = () => {
        if (selectedChairs.length) {
            dispatch(userActions.setSelectedChairs(selectedChairs));
            dispatch(userActions.setTotalPrice(totalPrice));

            navigate(`/payment`);
        } else {
            alert("Вы не выбрали места!")
        }
    };


    return (
        <>
            <main>
                <section className="buying">
                    <BuyingFilmInfo filmTitle={selectedFilm.title} hallTitle={selectedHall.title} selectedDay={selectedDay} time={selectedTime} />
                    <HallScheme rows={hallInfo.rows} price={hallInfo.price}
                        selectedChairs={selectedChairs} setSelectedChairs={setSelectedChairs}
                        totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                    />

                    <p className="buying__price">Общая стоимость: <span className="ticket__details ticket__cost">{totalPrice}</span>р</p>

                    <button className="acceptin-button" onClick={handleClick}>
                        Забронировать
                    </button>
                </section>
            </main>
        </>
    )
}