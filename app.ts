import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  }  from "https://raw.githubusercontent.com/adelsz/graphql-deno/v15.0.0/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello Dave! This is Deno.";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8080"),
);


const query = '{ hello }';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

graphql(schema, query).then((result: any) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});

await app.listen({ port: 8080 });