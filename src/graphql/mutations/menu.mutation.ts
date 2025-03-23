import { gql } from "@apollo/client";

export const CREATE_MENU = gql`
  mutation CreateMenu($input: CreateMenuInput!) {
    createMenu(input: $input) {
      name
      image {
        url
      }
      description
      recipes
      procedures
      category
    }
  }
`;
