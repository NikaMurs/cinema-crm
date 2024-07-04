export default function SubmitButtons({ handleCancel, handleSave }) {

    return (
        <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancel}>Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleSave} />
        </fieldset>
    )
}