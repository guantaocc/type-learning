interface User {
  title: string
  description: string
}

type MyReadonly<T> {
  readonly [P in keyof T]: T[P]
}

const user: MyReadonly<User> = {
  title: "Hey",
  description: "foobar"
}

user.title = "Hello" // Error: cannot reassign a readonly property
user.description = "barFoo" // Error: cannot reassign a readonly property