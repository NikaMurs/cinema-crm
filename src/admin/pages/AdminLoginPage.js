import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function AdminLoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handlerAuth(event) {
        event.preventDefault();

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.token) {
                Cookies.set('authorization', data.token, { expires: 1 });
                navigate('/admin');
            } else {
                setError(data.error || 'Произошла ошибка при авторизации');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main>
            <section className="login">
                <header className="login__header">
                    <h2 className="login__title">Авторизация</h2>
                </header>
                <div className="login__wrapper">
                    <form className="login__form" onSubmit={handlerAuth}>
                        <label className="login__label" htmlFor="email">
                            E-mail
                            <input
                                className="login__input"
                                type="email"
                                placeholder="example@domain.xyz"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <label className="login__label" htmlFor="pwd">
                            Пароль
                            <input
                                className="login__input"
                                type="password"
                                placeholder=""
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        {error && <div className="login__error">{error}</div>}
                        <div className="text-center">
                            <input
                                value={isLoading ? 'Авторизация...' : 'Авторизоваться'}
                                type="submit"
                                className="login__button"
                                disabled={isLoading}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
