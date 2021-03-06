import { gql } from '@apollo/client'

export const AUTHORIZE_WITH_GH = gql`
  mutation authorizeWithGithub($code: String!) {
    authorizeWithGithub(code: $code) {
      user {
        id
        username
        emails
        gitHubId
        gitHubLogin
        gitHubEmail
        gitHubReposUrl
        gitHubToken
      }
      token
    }
  }
`

export const SAVE_CHANGES = gql`
  mutation saveChanges($file: FileInput) {
    saveChanges(file: $file)
  }
`
