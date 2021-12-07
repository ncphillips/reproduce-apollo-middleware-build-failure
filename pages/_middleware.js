import { NextResponse } from "next/server"

import { ApolloClient, InMemoryCache } from "@apollo/client"

export function middleware() {
  const client = new ApolloClient({
    uri: "https://nx9zvp49q7.lp.gql.zone/graphql",
    cache: new InMemoryCache(),
  })

  return NextResponse.next()
}
