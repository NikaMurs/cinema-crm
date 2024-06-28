import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
    const navigate = useNavigate();

    const selectedDay = useSelector((state) => state.user.selectedDay);
    const selectedTime = useSelector((state) => state.user.selectedTime);
    const selectedHall = useSelector((state) => state.user.selectedHall);
    const selectedFilm = useSelector((state) => state.user.selectedFilm);

    const selectedChairs = useSelector((state) => state.user.selectedChairs);
    const totalPrice = useSelector((state) => state.user.totalPrice);


    return (
        <>
            <main>
                <section className="ticket">

                    <header className="tichet__check">
                        <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
                    </header>

                    <div className="ticket__info-wrapper">
                        <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{selectedFilm.title}</span></p>
                        <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">
                            {selectedChairs.map((el, ind) => {
                                return  ind === selectedChairs.length - 1 ? `${el}` : `${el}, `
                            })}
                        </span></p>
                        <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{selectedHall.title}</span></p>
                        <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{selectedDay} {selectedTime}</span></p>
                        <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{totalPrice}</span>р</p>

                        <button className="acceptin-button" onClick={() => { navigate('/ticket') }}>Получить код бронирования</button>

                        <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
                        <p className="ticket__hint">Приятного просмотра!</p>
                    </div>
                </section>
            </main>
        </>
    )
}