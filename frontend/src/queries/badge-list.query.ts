import { useQuery, gql } from '@apollo/client';


export const GET_BADGES = gql`
  query UserBadgesAndActions($userId: Int!) {
  badges {
    id
    title
    description
    icon
    points
    actions: badge_actions {
      id
      description: action_description
      completedStatus: user_actions(where: {user_id: {_eq: $userId}}) {
        complete_status
      }
    }
  }
}
`;


