import { gql } from "@apollo/client";

export const CREATE_MENU = gql`
  mutation CreateMenu($input: CreateMenuInput!) {
    createMenu(input: $input) {
      _id
      name
      image
      description
      recipes
      procedures
      category
    }
  }
`;
