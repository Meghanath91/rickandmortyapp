import { gql } from "@apollo/client";
export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      type
      image
      status
      gender
      origin {
        id
        name
      }
      species
      episode {
        id
        name
      }
      location {
        id
        name
      }
    }
  }
`;
