import { useNavigate, useLocation } from "react-router-dom"
import BuyingFilmInfo from "../components/BuyingFilmInfo";
import HallScheme from "../components/hallScheme/HallSheme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userReducer";
import convertDate from "../functions/convertDate";

export default function HallPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectedDay = useSelector((state) => state.user.selectedDay);
    const selectedTime = useSelector((state) => state.user.selectedTime);
    const selectedHall = useSelector((state) => state.user.selectedHall);
    const selectedFilm = useSelector((state) => state.user.selectedFilm);


    const [selectedChairs, setSelectedChairs] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [hallInfo, setHallInfo] = useState({});

    useEffect(() => {
        const fetchHall = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_URL}/halls/${selectedHall.id}`);
                if (!response.ok) {
                    throw new Error('Ошибка соединения');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Ошибка при fetching данных:', error);
            }
        };

        const fetchBookings = async () => {
            try {
                const params = new URLSearchParams({
                    date: convertDate(selectedDay),
                    time: selectedTime,
                    hallId: selectedHall.id,
                    filmId: selectedFilm.id,
                });

                const response = await fetch(`${process.env.REACT_APP_URL}/bookings/taken-seats?${params}`);
                if (!response.ok) {
                    throw new Error('Ошибка соединения');
                }
                const data = await response.json();
                return data.takenChairs;
            } catch (error) {
                console.error('Ошибка при fetching данных:', error);
            }
        };

        const fetchData = async () => {
            const [hallData, takenChairs] = await Promise.all([fetchHall(), fetchBookings()]);
            if (hallData) {
                const updatedRows = hallData.rows.map((row, rowIndex) =>
                    row.map((seat, seatIndex) =>
                        takenChairs.includes(`${rowIndex + 1}/${seatIndex + 1}`) ? 'taken' : seat
                    )
                );
                hallData.rows = updatedRows;
                setHallInfo(hallData);
            }
        };

        fetchData();
    }, [])

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

                    <div className="buying__price">Общая стоимость: <span className="ticket__details ticket__cost">{totalPrice}</span>р</div>

                    <button className="acceptin-button" onClick={handleClick}>
                        Забронировать
                    </button>
                </section>
            </main>
        </>
    )
}