import DateSlider from '../components/DateSlider'
import MovieCard from '../components/MovieCard/MovieCard'
import poster1 from '../img/poster1.jpg'
import poster2 from '../img/poster2.jpg'


export default function MainPage() {

    //needFetch
    const filmsInfo = [
        {
            filmId: 1,
            title: 'Звёздные войны XXIII: Атака клонированных клонов',
            description: 'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном',
            duration: "130 минут",
            country: "США",
            poster: poster1,
            seancesHalls: [
                {
                    hallId: 1,
                    title: 'Зал 1',
                    seances: ["10:20", "14:10", "18:40", "22:00"],
                },
                {
                    hallId: 2,
                    title: 'Зал 2',
                    seances: ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"],
                },
            ]
        },
        {
            filmId: 2,
            title: 'Альфа',
            description: '20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.',
            duration: "96 минут",
            country: "Франция",
            poster: poster2,
            seancesHalls: [
                {
                    hallId: 1,
                    title: 'Зал 1',
                    seances: ["12:20", "16:10", "20:40"],
                },
                {
                    hallId: 2,
                    title: 'Зал 2',
                    seances: ["09:00", "10:10", "12:55", "14:15", "14:50", "21:30"],
                },
            ]
        }
    ]

    return (
        <>
            <DateSlider />
            <main>
                {filmsInfo.map((filmInfo, i) => {
                    return <MovieCard key={`movieCard_${filmInfo.title}_${i}`} filmInfo={filmInfo} />
                })}
            </main>
        </>
    )
}