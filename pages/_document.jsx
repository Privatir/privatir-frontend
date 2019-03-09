import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
// Typography styling
import { GoogleFont, TypographyStyle } from 'react-typography'
import Typography from 'typography'
// import irvingTheme from 'typography-theme-irving'
import parnassusTheme from 'typography-theme-parnassus'


parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    "a:link": {
        color: "inherit",
        textDecoration: "none"
    },
    "a:hover": {
        color: "#7E57C2"
    },
    "a:focus": {
        color: "#7E57C2"
    },
    "a:active": {
        color: "#7E57C2"
    }

})

const typography = new Typography(parnassusTheme)

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {/* Step 5: Output the styles in the head  */}
                    <script
                        defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"
                        integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP"
                        crossOrigin="anonymous">
                    </script>
                    <TypographyStyle typography={typography} />
                    <GoogleFont typography={typography} />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}