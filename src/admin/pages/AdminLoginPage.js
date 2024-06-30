export default function AdminLoginPage() {

    function handlerAuth() {
        var expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 1);

        var cookieValue = encodeURIComponent('authorization') + "=" + encodeURIComponent('true') + "; expires=" + expiryDate.toUTCString() + "; path=/";

        document.cookie = cookieValue;
    }

    return (
        <main>
            <section className="login">
                <header className="login__header">
                    <h2 className="login__title">Авторизация</h2>
                </header>
                <div className="login__wrapper">
                    <form className="login__form">
                        <label className="login__label" for="email">
                            E-mail
                            <input className="login__input" type="email" placeholder="example@domain.xyz" name="email" required />
                        </label>
                        <label className="login__label" for="pwd">
                            Пароль
                            <input className="login__input" type="password" placeholder="" name="password" required />
                        </label>
                        <div className="text-center">
                            <input value="Авторизоваться" type="submit" className="login__button" onClick={handlerAuth} />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}