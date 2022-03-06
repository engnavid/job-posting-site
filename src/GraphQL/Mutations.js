import {gql} from '@apollo/client';

export const CREATE_JOB_MUTATION = gql`
    mutation postJob(
        $title: String!,
        $commitmentId: ID!,
        $companyName: String!,
        $locationNames: String!,
        $userEmail: String!,
        $description: String!,
        $applyUrl: String!
    ){
        postJob( 
            input: {
                title: $title,
                commitmentId: $commitmentId,
                companyName: $companyName,
                locationNames: $locationNames,
                userEmail: $userEmail,
                description: $description,
                applyUrl: $applyUrl
            }){
            id,
            title
        }
    }
`;


export const SUBSCRIBE_MUTATION = gql`
    mutation subscribe(
        $email: String!,
        $name: String!,
    ){
        subscribe(input:{
            email: $email,
            name: $name,
        }){
            id
            name
        }
    }

`;