import axios from 'axios'

async function getRoutes(){
    const { data } = await axios.get('https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f');

    return data;
}

export { getRoutes }