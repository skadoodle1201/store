const express = require ('express');
const app = express();





/* const graphql,{GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLString,GraphQLList, GraphQLInt} = require('graphql');
const {graphqlHTTP}  = require('express-graphql');



const UserType = new GraphQLObjectType ({
  name : "store",
  fields: () => ({
    id : {type: GraphQLInt},
    name  : { type : GraphQLString},
    address  : { type : GraphQLString},
    number  : { type : GraphQLInt},
    email  : { type : GraphQLString}
  })
})



const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields:{
    getAllUsers : {
      type: new GraphQLList(UserType),
      args: {id : { type: GraphQLInt}},
      resolve(parent,args){
        return userData
      }
    }
  }
})
const Mutation  = new GraphQLObjectType({
  name: "Mutation",
  fields:{
    createUser : {
      type: UserType,
      args: {
        name  : { type : GraphQLString},
        address  : { type : GraphQLString},
        number  : { type : GraphQLInt},
        email  : { type : GraphQLString}
      } ,
      resolve(parent,args){

      }
    }
  }
})

const schema  = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})


app.use('/graphql' , graphqlHTTP({
  schema ,
  graphiql: true
}))
 */



app.get('/',(req,res)=>{
  res.send('HOME');
})

app.listen(3000,() => {
  console.log('Serving on port 3000');
})