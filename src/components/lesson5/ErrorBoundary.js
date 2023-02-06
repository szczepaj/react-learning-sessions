class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header />
                <ErrorBoundary>
                    <SignInForm />
                </ErrorBoundary>
                <Footer/>
            </div>
        )
    }
}

