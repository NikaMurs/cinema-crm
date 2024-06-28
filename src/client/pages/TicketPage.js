import { useSelector } from 'react-redux';
import QRCode from "react-qr-code";

export default function TicketPage() {
    const selectedDay = useSelector((state) => state.user.selectedDay);
    const selectedTime = useSelector((state) => state.user.selectedTime);
    const selectedHall = useSelector((state) => state.user.selectedHall);
    const selectedFilm = useSelector((state) => state.user.selectedFilm);

    const selectedChairs = useSelector((state) => state.user.selectedChairs);

    return (
        <>
            <main>
                <section className="ticket">

                    <header className="tichet__check">
                        <h2 className="ticket__check-title">Электронный билет</h2>
                    </header>

                    <div className="ticket__info-wrapper">
                        <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{selectedFilm.title}</span></p>
                        <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">
                            {selectedChairs.map((el, ind) => {
                                return ind === selectedChairs.length - 1 ? `${el}` : `${el}, `
                            })}
                        </span></p>
                        <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{selectedHall.title}</span></p>
                        <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{selectedDay} {selectedTime}</span></p>

                        <QRCode
                            className='ticket__info-qr'
                            value={`${selectedDay} | ${selectedTime} | ${selectedHall.id} | ${selectedFilm.id} | ${selectedChairs.join('_')}`}
                        />

                        {/* <img className="ticket__info-qr" src={qrCode} alt='qr код' /> */}
                        <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
                        <p className="ticket__hint">Приятного просмотра!</p>
                    </div>
                </section>
            </main>
        </>
    )
}