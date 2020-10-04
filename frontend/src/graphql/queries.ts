import { gql } from '@apollo/client'

export const ALL_FILES = gql`
  query {
    files: cloneRepository(
      url: "https://github.com/ohtuprojekti-eficode/robot-test-files"
    ) {
      name
      content
    }
  }
`