---
title: "04. Functional Mastery"
category: "Go"
tags: ["golang", "basics", "functions", "closures"]
---

# 04. Functions: The Heart of Program Logic

In Go, a Function is respected as a **First-class citizen**. This means you can treat a Function like a variable: you can pass a Function into another Function, or return a Function as a result.

## 1. Basic Function Declaration

Go's syntax emphasizes clarity: `func` keyword + `function name` + `parameters` + `return type`.

```go
func add(x int, y int) int {
    return x + y
}

// If parameters have the same data type, you can shorthand it:
func addShorter(x, y int) int {
    return x + y
}
```

## 2. Recursion

Functions in Go support recursion powerfully. A function can call itself to solve smaller sub-problems.

```go
func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}
```

## 3. Multiple Return Values

This is a distinctive feature of Go, often used to return a result along with an error message (**error**).

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Typical usage:
result, err := divide(10, 2)
```

## 3. Named Return Values

Go allows you to pre-define return values at the declaration. They behave like local variables initialized at the start of the function.

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // Automatically returns the current values of x and y (Naked return)
}
```
> Only use "Naked return" in short and simple functions to ensure readability.

## 4. Function Values

In Go, a Function is not just executable code but also a data type. You can assign a function to a variable, or pass it as a parameter.

```go
func applyOperation(a, b int, op func(int, int) int) int {
    return op(a, b)
}

// Usage: applyOperation(10, 5, add)
```

## 5. Anonymous Functions and Closures

You can initialize a Function without naming it, assign it to a variable, or execute it immediately. A Function that can "remember" variables outside its scope is called a **Closure**.

```go
func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {
    nextId := intSeq()
    fmt.Println(nextId()) // Result: 1
    fmt.Println(nextId()) // Result: 2
    
    newNextId := intSeq()
    fmt.Println(newNextId()) // Result: 1 (A separate memory "space")
}
```

## 5. Variadic Functions

A Function can accept an unlimited number of arguments using the `...` notation.

```go
func sumAll(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

// Flexible calls: sumAll(1, 2, 3, 4, 5)
```

## 7. Deferred Execution with `defer`

`defer` is an extremely important feature that helps manage resources (closing files, releasing locks...). `defer` statements will be executed just before the surrounding function exits, in LIFO (Last-In First-Out) order.

```go
func readFile(filename string) {
    f, _ := os.Open(filename)
    defer f.Close() // Ensure the file is closed even if the function errors or exits early
    
    // Process file...
}
```

---

> Always return `error` as the last value in the return list if your Function has the potential to fail. This is the ultimate standard in the Go community.

---
