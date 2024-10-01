//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
import { subZero, useAsciiText } from 'react-ascii-text'


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
        textAlign: 'center',
        marginTop: '5vh',
    }

    const main_style = {
        fontFamily: 'monospace',
        fontSize: '1.5vw',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10vh',
    }

    return (
        <div class="pagewrapper">
            <header style={header_style}>
                <pre ref={asciiFname}></pre>
                <pre ref={asciiLname}></pre>
            </header>
            <main style={main_style}>
                <span>More to come soon...</span>
            </main>
        </div>
    )
}

export default Layout