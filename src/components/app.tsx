import * as React from "react";
import Layout from './layout'

export default function App() {
    return (
        <Layout></Layout>
    )
}



/* class App2 extends React.Component<Props> {
render() {
    const { compiler, framework } = this.props
    return(
        <h1 style={centeredContent}>
        Hello from {compiler} and {framework}!
</h1>
    )
}
} */
    /* 
        interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
 */