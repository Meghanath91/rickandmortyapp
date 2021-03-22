import { gql } from "@apollo/client";
export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      characters {
        id
        name
      }
    }
  }
`;