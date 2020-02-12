import React from "react";
/* import Layout from './layout'; */

interface Props {
    compiler: string;
    framework: string;
}
export default function App(props: Props) {
    return(
        <h1 style={style}>
             Hello from {props.compiler} and {props.framework}!
    </h1>
    );
}



const centeredContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
    };

    const theme: React.CSSProperties = {
        color: 'green'
    }

    const style = { ...centeredContent, ...theme }
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