import { gql } from "@apollo/client";

export const GET_ALL_MENU = gql`
  query GetAllMenu {
    allMenu {
      _id
      name
      imageUrl
      description
      recipes
      procedures
      categories
    }
  }
`;
