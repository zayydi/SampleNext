import axios from "axios";

export const POST: (url: string, data?: {}, headers?: {}) => Promise<any> = async (url: string, data = {}, headers = {}) => {
    try {
        const res = await axios.post(
            `${process.env.BASE_URL}${url}`,
            data,
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status >= 200
                }
            }
        );

        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}


export const PUT: (url: string, data?: {}, headers?: {}) => Promise<any> = async (url: string, data = {}, headers = {}) => {
    try {
        const res = await axios.put(
            `${process.env.BASE_URL}${url}`,
            data,
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status >= 200
                }
            }
        );

        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export const GET: (url: string, headers?: {}) => Promise<any> = async (url: string, headers = {}) => {
    try {
        const res = await axios.get(
            `${process.env.BASE_URL}${url}?api_key=${process.env.API_KEY}`,
            {
                headers,
                validateStatus: status => {
                    // console.log(status);
                    return status >= 200
                }
            }
        );

        return res.data;
    } catch (error) {
        return error;
    }
}

export const DELETE: (url: string, data?: {}, headers?: {}) => Promise<any> = async (url: string, data = {}, headers = {}) => {
    try {
        const res = await axios.delete(
            `${process.env.BASE_URL}${url}`,
            {
                headers,
                data,
                validateStatus: status => {
                    // console.log(status);
                    return status >= 200
                }
            }
        );

        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export const GETFile: (url: string) => Promise<File> = async (url: string) => {
    try {
        const response = await axios.get(url, {
            responseType: 'blob'
        });
        return new File(
            [response.data],
            url.split("/")[url.split("/").length - 1],
            { type: response.data.type }
        );
    } catch (error: any) {
        return new File([], error.message);
    }
}