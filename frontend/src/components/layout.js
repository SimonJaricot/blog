//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
import { subZero, useAsciiText } from 'react-ascii-text'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const Layout = () => {


    const asciiFname = useAsciiText({
        isAnimated: false,
        font: subZero,
        text: 'Simon',
    });

    const asciiLname = useAsciiText({
        isAnimated: false,
        font: subZero,
        text: 'Jaricot',
    });

    const header_style = {
        fontFamily: 'monospace',
        fontSize: '2vw',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5vh',
    }

    const main_style = {
        fontFamily: 'monospace',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10vh',
        padding: '10vw',
    }

    const codeString = `
    // Here are some examples of Rust code.
    fn main() {
        // Statements here are executed when the compiled binary is called.

        // Print text to the console.
        println!("Hello World!");
    }
    `

    return (
        <div class="pagewrapper">
            <header style={header_style}>
                <pre ref={asciiFname}></pre>
                <pre ref={asciiLname}></pre>
            </header>
            <main style={main_style}>
                <span>More to come soon...</span>
                <SyntaxHighlighter language="rust">
                    {codeString}
                </SyntaxHighlighter>
            </main>
        </div>
    )
}

export default Layout