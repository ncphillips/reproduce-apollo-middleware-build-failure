import ApolloClient from 'apollo-boost';
import { NextResponse } from 'next/server'

export function middleware() {
  const client = new ApolloClient({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' });

  console.log({ client })
 
  return NextResponse.next()
}