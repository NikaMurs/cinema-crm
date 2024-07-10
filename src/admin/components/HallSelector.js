export default function HallSelector({ type, halls, selectedHall, setSelectedHall, handleCancel }) {

    const handleClickHall = (ind) => {
        setSelectedHall(ind);
        handleCancel();
    }

    return (
        <>
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {halls.map((hall, ind) => {
                    return <li key={`hall_${type}_${ind}`} onClick={() => { handleClickHall(ind) }}><input type="radio" className="conf-step__radio" name={`chairs_${type}_hall`} value={hall.id} checked={ind === selectedHall} onChange={() => { }} /><span className="conf-step__selector">{hall.title}</span></li>
                })}
            </ul>
        </>
    )
}