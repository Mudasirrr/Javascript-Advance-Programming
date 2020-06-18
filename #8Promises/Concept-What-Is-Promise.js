/**
 * I promise to do this whenever that is true. If it isn't true, then I won't.

This is a simple illustration of JavaScript Promises. Sounds like an IF statement?
 We’ll soon see a huge difference.

A promise is used to handle the asynchronous result of an operation. JavaScript 
is designed to not wait for an asynchrnous block of code to completely execute 
before other synchronous parts of the code can run. For instance, when making 
API requests to servers, we have no idea if these servers are offline or online, 
or how long it takes to process the server request.

With Promises, we can defer execution of a code block until an async request is
 completed. This way, other operations can keep running without interruption.

Promises have three states:

    Pending: This is the initial state of the Promise before an operation 
    begins
    Fulfilled: This means the specified operation was completed
    Rejected: The operation did not complete; an error value is usually thrown

Creating a Promise

The Promise object is created using the new keyword and contains the promise; 
this is an executor function which has a resolve and a reject callback. As the
 names imply, each of these callbacks returns a value with the reject callback
  returning an error object.
 */