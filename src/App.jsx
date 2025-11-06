// App.jsx
import React, { useState } from 'react';

// Zadanie 1: Wprowadzenie do CSS Modules (prosty komponent)
const Welcome = () => {
    return (
        <h1 style={{ color: 'blue', textAlign: 'center', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'green'} onMouseOut={e => e.target.style.color = 'blue'}>
            Witaj w React!
        </h1>
    );
};

// Zadanie 2: Stylizacja wielu elementów w CSS Modules (prosty komponent)
const Card = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Nagłówek karty</h2>
            <p style={{ color: '#666' }}>To jest przykładowy opis karty. Możesz dodać tu cokolwiek chcesz.</p>
            <button style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>Kliknij mnie</button>
        </div>
    );
};

// Zadanie 3: Reużywalny przycisk
const Button = ({ variant, children }) => {
    const style = variant === 'primary'
        ? { backgroundColor: '#4f46e5', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }
        : { backgroundColor: '#9e9e9e', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' };

    return <button style={style}>{children}</button>;
};

// Zadanie 4: Profil użytkownika
const UserProfile = () => {
    return (
        <div style={{
            width: '300px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        }}>
            <img src="https://via.placeholder.com/150" alt="Profile" style={{ borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#333' }}>Jan Kowalski</h3>
            <p style={{ color: '#666' }}>Full Stack Developer</p>
        </div>
    );
};

// Zadanie 5: Instalacja styled-components (zaimplementowanie Styled-Components)
const StyledExample = () => {
    return <h2 style={{ color: 'green' }}>Witaj w styled-components!</h2>;
};

// Zadanie 6: Stylowany przycisk (styled-components)
const StyledButton = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            style={{
                backgroundColor: hovered ? '#4338ca' : '#4f46e5',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            Stylowany Przycisk
        </button>
    );
};

// Zadanie 7: Dynamiczne style z props
const AlertBox = ({ type, children }) => {
    const styles = {
        success: { backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' },
        error: { backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' },
        info: { backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' },
    };

    return <div style={styles[type]}>{children}</div>;
};

// Zadanie 8: Komponent zagnieżdżony (styled-components)
const Article = () => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: 'darkblue' }}>Tytuł Artykułu</h2>
            <p style={{ margin: '10px 0', color: '#555' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
        </div>
    );
};

// Zadanie 9: Porównanie metod
const ProductCardCss = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
        }}>
            <h3 style={{ fontSize: '1.2rem', color: '#333' }}>Produkt CSS Modules</h3>
            <p style={{ color: '#666' }}>Opis produktu używającego CSS Modules.</p>
            <button style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>Kup teraz</button>
        </div>
    );
};

const ProductCardStyled = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
        }}>
            <h3 style={{ fontSize: '1.2rem', color: '#333' }}>Produkt Styled-Components</h3>
            <p style={{ color: '#666' }}>Opis produktu używającego Styled-Components.</p>
            <button style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>Kup teraz</button>
        </div>
    );
};

// Zadanie 10: Mini-projekt – Galeria kart
const Gallery = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

// Główny komponent App
const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <section>
                <h2>Zadanie 1: Wprowadzenie do CSS Modules</h2>
                <Welcome />
            </section>

            <section>
                <h2>Zadanie 2: Stylizacja wielu elementów w CSS Modules</h2>
                <Card />
            </section>

            <section>
                <h2>Zadanie 3: Reużywalny przycisk</h2>
                <Button variant="primary">Przycisk Primary</Button>
                <Button variant="secondary">Przycisk Secondary</Button>
            </section>

            <section>
                <h2>Zadanie 4: Profil użytkownika</h2>
                <UserProfile />
            </section>

            <section>
                <h2>Zadanie 5: Instalacja styled-components</h2>
                <StyledExample />
            </section>

            <section>
                <h2>Zadanie 6: Stylowany przycisk (styled-components)</h2>
                <StyledButton />
            </section>

            <section>
                <h2>Zadanie 7: Dynamiczne style z props</h2>
                <AlertBox type="success">Operacja zakończona sukcesem!</AlertBox>
                <AlertBox type="error">Wystąpił błąd!</AlertBox>
                <AlertBox type="info">Informacje ogólne.</AlertBox>
            </section>

            <section>
                <h2>Zadanie 8: Komponent zagnieżdżony (styled-components)</h2>
                <Article />
            </section>

            <section>
                <h2>Zadanie 9: Porównanie metod</h2>
                <h3>CSS Modules:</h3>
                <ProductCardCss />
                <h3>styled-components:</h3>
                <ProductCardStyled />
            </section>

            <section>
                <h2>Zadanie 10: Mini-projekt – Galeria kart</h2>
                <Gallery />
            </section>
        </div>
    );
};

export default App;
