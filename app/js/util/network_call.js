import fetch from 'isomorphic-fetch';

export const GET_REQUEST_CALL = (url) => {
    return fetch(url)
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

export const POST_REQUEST_CALL = (data, url) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: data
    }).then((response) => {
        if (response.status >= 4000) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((data) => {
        return data;
    });

}


export const DELETE_REQUEST_CALL = (data, url) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    return fetch(url, {
        method: 'DELETE',
        headers: myHeaders,
        body: data
    }).then((response) => {
        if (response.status >= 4000) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then((data) => {
        return data;
    });

}
