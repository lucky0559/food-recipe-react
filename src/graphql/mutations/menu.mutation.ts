import { gql } from "@apollo/client";

export const CREATE_MENU = gql`
  mutation CreateMenu($input: CreateMenuInput!) {
    createMenu(input: $input) {
      name
      imageUrl
      description
      recipes
      procedures
      categories
    }
  }
`;
