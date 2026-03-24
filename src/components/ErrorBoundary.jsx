import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div style={{ color: "#fff", textAlign: "center", padding: "2rem" }}>
            <p>Something went wrong loading this view.</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
