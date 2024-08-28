import { gql } from '@apollo/client';

export const SUBSCRIBE_ACTIVITIES = gql`
query UserActivitySubscription($userId: Int!) {
  activity(where: {user_id: {_eq: $userId}}, order_by: {date: desc}) {
    type
    points
    date
    txid
  }
}`;