import '../css/normalize.css'
import '../css/styles.css'
import Header from './Header'


export default function AdminMainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}