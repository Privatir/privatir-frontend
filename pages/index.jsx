import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import https from 'https'

const Index = (props) => (
    <Layout>
        <p>Index Page</p>
        <h1>Status:{props.status}</h1>
    </Layout>
)

Index.getInitialProps = async function () {
    const options = {
        agent: new https.Agent({
            rejectUnauthorized: false
        })
    };

    const res = await fetch('https://privatir.com/status', options)
    const data = await res.json()

    console.log(data)
    console.log(`Status data fetched. Status: ${data.status}`)

    return {
        status: data.status
    }
}

export default Index