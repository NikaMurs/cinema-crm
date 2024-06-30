import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();


    return (
        <header className="page-header" onClick={() => { navigate('/admin') }}>
            <h1 className="page-header__title">Идём<span>в</span>кино</h1>
            <span className="page-header__subtitle" href="/admin">Администраторская</span>
        </header>
    )
}