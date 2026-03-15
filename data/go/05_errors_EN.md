---
title: "05. The Error Guardian"
category: "Go"
tags: ["golang", "errors", "fundamentals"]
---

# 05. Error Handling: The Silent Guardian

In most modern programming languages, when something goes wrong, the system "throws" an exception and immediately interrupts the program flow. Go takes a different path: **An error is just a value.**

## 1. The Strategy: "Error as Value"

Go has no `try-catch` mechanism. Why? Because Go wants developers to confront and handle errors exactly where they arise, rather than letting them float and hoping to catch them at some higher layer.

> Gopher Mindset: If a Function has the potential to fail, it **must** return an error object as its final result.

```go
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}
```

## 2. Error Handling Strategies

According to *The Go Programming Language*, there are 4 main strategies for dealing with errors:

1.  **Propagating**: Return the error to the caller to handle it at a higher level.
2.  **Retrying**: If the error is transient (e.g., a network error), you can retry the operation after a delay.
3.  **Terminating**: If the error is so severe that it's impossible to continue (e.g., missing a critical configuration file), log the error and stop the program (`os.Exit(1)`).
4.  **Log and Continue**: For less critical errors, just log them and let the program proceed.

```go
result, err := Divide(10, 0)
if err != nil {
    // Strategy: Log and Wrap the error
    return fmt.Errorf("calculation failed: %w", err)
}
```

## 3. Custom Errors

The nature of `error` in Go is extremely simple; it is an **Interface**:

```go
type error interface {
    Error() string
}
```

Because of this, you can create any **Struct** that satisfies this Interface to attach more useful information (such as error codes, timestamps, user context...).

```go
type MyError struct {
    Code    int
    Message string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("Error Code %d: %s", e.Code, e.Message)
}
```

## 4. `errors.Is` and `errors.As`

Sometimes you need to **wrap** an old error inside a new one to supplement information. Go provides tools for you to "trace back" to the original error:

-   **`errors.Is`**: Checks if an error corresponds to a specific type of error (similar to `==` comparison).
-   **`errors.As`**: Casts an error to a specific structural type to access specialized data.

```go
if errors.Is(err, os.ErrNotExist) {
    fmt.Println("File does not exist on the system!")
}
```

## 5. Panic and Recover: When Things Spin Out of Control

`panic` is the program's "panic" state when encountering an unrecoverable error (e.g., out-of-bounds array access).

> Never use `panic` for common errors. Use `error`. Only use `panic` for unrecoverable programming failures.

`recover` can be used within a `deferred` function to "revive" the program from a `panic` state, but this technique should be used minimally to avoid masking serious bugs.

---

> **Professional Gopher Advice:** Never ignore an error by using an underscore `_, _ := DoSomething()`. That is the fastest way to create hard-to-trace bugs in the future.

---
