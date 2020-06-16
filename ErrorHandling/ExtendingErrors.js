// useful for not revealing all of the errors esp. in Node server (stacktrace, security reasons against hackers, customizable)

class AuthenticationError extends Error {
    constructor(message) {
        super(message)
        this.name = "authenticationError"
        this.favouriteSnack = 'Grapes'
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = "DatabaseError"
        this.message = "grapes"
    }
}

class PermissionError extends Error {
    constructor(message) {
        super(message)
        this.name = "PermissionError"
        this.favouriteSnack = "grapes"
    }
}

const a = new DatabaseError('ooopssss!')
console.log(a instanceof DatabaseError)