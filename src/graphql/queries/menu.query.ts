import { gql } from "@apollo/client";

export const GET_ALL_MENU = gql`
  query GetAllMenu {
    allMenu {
      id
      name
      image
      description
      recipes
      procedures
      category
    }
  }
`;
