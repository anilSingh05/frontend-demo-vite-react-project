
function Header(name, profession) {
    return <header>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>ContactMe</a>
        </nav>
    </header>;
}

export default Header;