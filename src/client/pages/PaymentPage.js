import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import convertDate from "../functions/convertDate";

export default function PaymentPage() {
    const navigate = useNavigate();

    const selectedDay = useSelector((state) => state.user.selectedDay);
    const selectedTime = useSelector((state) => state.user.selectedTime);
    const selectedHall = useSelector((state) => state.user.selectedHall);
    const selectedFilm = useSelector((state) => state.user.selectedFilm);

    const selectedChairs = useSelector((state) => state.user.selectedChairs);
    const totalPrice = useSelector((state) => state.user.totalPrice);

    const handleClick = async () => {
        const bookingData = {
            date: convertDate(selectedDay),
            time: selectedTime,
            hallId: selectedHall.id,
            filmId: selectedFilm.id,
            selectedChairs: selectedChairs
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/ticket');
        } catch (error) {
            console.error('There was a problem with the booking request:', error);
        }
    };

    return (
        <>
            <main>
                <section className="ticket">

                    <header className="tichet__check">
                        <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
                    </header>

                    <div className="ticket__info-wrapper">
                        <div className="ticket__info">На фильм: <span className="ticket__details ticket__title">{selectedFilm.title}</span></div>
                        <div className="ticket__info">Места: <span className="ticket__details ticket__chairs">
                            {selectedChairs.map((el, ind) => {
                                return ind === selectedChairs.length - 1 ? `${el}` : `${el}, `
                            })}
                        </span></div>
                        <div className="ticket__info">В зале: <span className="ticket__details ticket__hall">{selectedHall.title}</span></div>
                        <div className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{selectedDay} {selectedTime}</span></div>
                        <div className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{totalPrice}</span>р</div>

                        <button className="acceptin-button" onClick={handleClick}>Получить код бронирования</button>

                        <div className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</div>
                        <div className="ticket__hint">Приятного просмотра!</div>
                    </div>
                </section>
            </main>
        </>
    )
}