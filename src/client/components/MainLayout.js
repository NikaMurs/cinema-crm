import Header from "./Header";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main">
                {children}
            </div>
        </>
    );
}