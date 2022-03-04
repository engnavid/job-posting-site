// create a query component which will get all the jobs from the api
// and display them in the UI
//
import {gql} from '@apollo/client';

export const GET_ALL_JOBS = gql`
    query {
        jobs{
            id
            title
            slug
            userEmail
            applyUrl
        }
    }
`;

