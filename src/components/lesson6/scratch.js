const url = 'https://something.com/api'

const fetchData = async () => {
    const response = await fetch(url)
    const responseBody = await response.json()

    try {

    } catch (_e) {

    }

    return responseBody
}

const fetchDataPromise = () => {
    return fetch(url).().()
}

const body = await fetchData()

const bodyPromise = fetchDataPromise()
    .then(res => res.json)
    .then(() => console.log('do something'))
    .catch()


fetch(url).then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong');
})
    .then((responseJson) => {
        // Do something with the response
    })
    .catch((error) => {
        console.log(error)
    });

// ASYNC/AWAIT
// 1. Inny scope - wewnatrz funkcji / Promise -> wewnatrz callbacka
// 2. Wiecej zastosowan dla async/await - testy/manipulacja danymi
