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
            title: $title,
            commitmentId: $commitmentId,
            companyName: $companyName,
            locationNames: $locationNames,
            userEmail: $userEmail,
            description: $description,
            applyUrl: $applyUrl
        ){
            id
        }
    }
`;


export const SUBSCRIBE_MUTATION = gql`
    mutation subscribe(
        $email: String!,
        $name: String!,
    ){
        subscribe(
            email: $email,
            name: $name,
        ){
            id
            name
        }
    }

`;