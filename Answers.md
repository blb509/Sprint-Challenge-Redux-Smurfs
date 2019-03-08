1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?  

array.concat(), spread operator, array.filter(), array.slice(), array.map() do not produce side effects.
Object.create()


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store, holds the state in global area so that all components have the ability to access it. Which is why it is known as the single source of truth since all components can get their state from it.
Reducers, take in action types and data and changes the state depending on those inputs.
Actions, pass action types and data to reducers so that the reducers know how to change the state.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global while component state only applies to that individual component. Perhaps you wouldnt set up application state if
your project was small. But you can use both.


1.  What is middleware?

Middleware stops actions before going to reducers and can do various things to them such as completely change the action, stop it, send multiple actions, or not do anything at all.


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to make asynchronus action in our action creators. Such as making an API call.


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
