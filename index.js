function Header(){
    return (
        <header>
            <img src="karan.jpg" className="header-image" />
            <h1 className="header-title">Karan Chaudhary</h1>
            <h3 className="header-text">FrontEnd Developer</h3>
            <div className="buttons">
                <button className="email"><i className="bx bx-envelope"></i>Email</button>
                <button className="linkedIn"><i className="bx bxl-twitter"></i>Twitter</button>
            </div>
        </header>
    )
}

function About(){
    return (
        <div className="about">
            <h3>About</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae tempore facilis iure doloremque harum! Omnis unde quia sequi natus maxime quod delectus aut recusandae excepturi quisquam. Optio totam autem neque.
            </p>
        </div>
    )
}

function Interest(){
    return (
        <div className="interest">
            <h3>Interest</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ut quod omnis hic sunt perspiciatis at temporibus suscipit repellendus, in quidem itaque beatae, excepturi sapiente ad magni laudantium laboriosam illo!
            </p>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-twitter"></i>
        </footer>
    )
}

function App(){
    return (
        <div className="main-body">
            <Header />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))