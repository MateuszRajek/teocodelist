import axios from 'axios'

export const fetchUsersList = async () => {
    const { data } = await axios.get('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json');

    return data;
}