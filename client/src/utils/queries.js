import { gql } from '@apollo/client';

export const SELF_QUERY = gql`
    query Query {
        self {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                image
                link 
                title
            }
        }
    }`;