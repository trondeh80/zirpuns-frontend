
export default async function get(url: string): Promise<any> {
    return fetch(url).then((response) => response.json());
}

const { REACT_APP_API_HOST } = process.env;
export function createUrl(path: string): string {
    return `${REACT_APP_API_HOST}${path}`;
}