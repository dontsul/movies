const Footer = () => {
    return (
        <footer className="page-footer blue lighten-3 ">
            <div className="footer-copyright blue lighten-3 footer-elem">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/dontsul/movies"
                        target="_blanc"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
