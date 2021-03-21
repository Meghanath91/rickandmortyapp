import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query getCharacters(
    $page: Int!
    $name: String
    $gender: String
    $status: String
  ) {
    characters(
      page: $page
      filter: { name: $name, gender: $gender, status: $status }
    ) {
      info {
        next
        pages
      }
      results {
        name
        image
        id
      }
    }
  }
`;
