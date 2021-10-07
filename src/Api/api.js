export const ENDPOINT_URL = 'http://localhost:4000'


export const AUTH_USER = (body) => {
    return {
        url: ENDPOINT_URL + '/user/authenticate',
        options: {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export const CREATE_USER = (body) => {
    return {
        url: ENDPOINT_URL + '/customer/create',
        options: {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export const GET_USER = () => {
    return {
        url: ENDPOINT_URL + '/customer/list'
    }
}

export const UPDATE_USER = (body) => {
    return {
        url: ENDPOINT_URL + '/customer/update',
        options: {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }
    }
}

export const DELETE_USER = (body) => {
    return {
        url: ENDPOINT_URL + '/customer/delete',
        options: {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(body)
        }
    }
}
