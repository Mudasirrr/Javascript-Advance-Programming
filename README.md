### Advanced Javascript

Reviewing Closures &amp; Prototypal Inheritance, OOP, Functional Programming, Asynchronous Javascript, Error Handling

**FOUR PILLARS of OBJECT ORIENTED PROGRAMMING:**

- POLYMORPHISM: ability to call same method on different objects and each object responding in a different way.  Idea behind Polymorphism in OOP, has the ability to process objects differently depending on data type and class (reuse some of the functionalities from super class to adapt to our own specific needs).

- INHERITANCE: avoid having to rewrite code, saves memory space having shared methods (inheriting from other classes).

- ABSTRACTION: hides complexity from user by creating simpler interfaces, providing transparency with methods & properties while working under the hood (i.e. 'instantiating' all methods, properties for reuse while everything is handled under the hood).

- ENCAPSULATION: organizes into units by wrapping code into boxes to make it easier to interact with other boxes while making methods, properties easier to maintain and reuse.

**Constructor Functions:**

- Useful when invoked with 'New' which would enable use of prototype chaining
- Only way to add new properties inside is to add the this keyword

**Inheritance:**

- Assigning 'this' refers to the new object's properties created by instantiating the new Class obj.
- With implicit binding, the 'this' keyword refers to the Object itself.
- With explicit binding, the 'this' can be bound to explicitly through use of bind, call, apply to a different object or environment.
- With arrow functions, we can use 'this' to bind fn lexically within scope of its environment.