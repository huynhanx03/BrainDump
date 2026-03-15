---
title: "01. Variables"
category: "Go"
tags: ["golang", "basics", "variables", "types"]
---

# 01. Variables: The First Bricks

After understanding the philosophy, let's start laying the first bricks of your source code. In this chapter, we will learn how Go defines data through Variables, Constants, and basic Data Types.

## 1. Declaring Variables

There are two common ways to declare variables in Go. The difference lies in **explicitness** and **convenience**.

### Using the `var` Keyword
This method allows you to declare variables at the Package level or inside a Function.

```go
var name string = "Gopher"
var age int = 15
```

### Short Variable Declaration Operator `:=`
This is an extremely common shorthand but only valid **inside** a Function. Go will automatically infer the data type based on the initialization value.

```go
location := "Vietnam" // Go infers this as a string
count := 10           // Go infers this as an int
```

> When using `:=`, at least one variable on the left side must be a newly created variable. If all variables have been declared previously, you must use the standard assignment operator `=`.

### Tuple Assignment

Go allows assigning multiple values simultaneously on a single line of code. This is particularly useful when you want to swap values without a temporary variable:

```go
i, j = j, i // Swap values between i and j
```

## 2. Zero Values

One of the advantages of Go is: **Variables are always initialized with a default value.** You will never encounter "access to uninitialized memory" errors as in other low-level languages.

| Data Type | Zero Value |
| :--- | :--- |
| `int`, `float` | `0` |
| `string` | `""` (Empty string) |
| `bool` | `false` |
| `pointer`, `interface`, `slice`, `map` | `nil` |

## 3. Basic Data Types

Go categorizes data types very clearly to optimize memory usage:

- **Integers:** Includes `int8`, `int16`, `int32`, `int64`, and `uint` (unsigned). In most cases, we only need to use `int`.
- **Floating Point:** `float32`, `float64`.
- **Logic:** `bool` (only accepts `true` or `false`).
- **Strings:** `string`.

## 4. Constants

Constants are fixed values that do not change throughout the life of the program.

```go
const Pi = 3.14
const StatusOK = 200
```

> **Untyped Constants:** Constants in Go have high precision and are not tied to a specific data type until actually used. This allows you to write more flexible code, for example: `Math.Pi * distance` without caring if `distance` is `float32` or `float64`.

## 5. Type Declarations

This is a powerful tool to make source code explicit. You can create a new data type based on an existing underlying type:

```go
type Celsius float64
type Fahrenheit float64

var c Celsius = 100
// var f Fahrenheit = c // ERROR! Although both are float64, they are different Types.
```

This technique helps you avoid basic logic errors, such as accidentally adding a temperature value to a currency value.

## 6. Scope

- **Package Scope:** Variables declared outside a Function, accessible from any file in the same Package.
- **Local Scope:** Variables declared inside a Function, existing only within the surrounding curly braces `{}`.
- **Universe Scope:** Includes entities pre-defined by the language like `int`, `string`, `true`, `false`.

## 7. Naming Convention

To keep code "Clean," follow the Gopher style:
- Use **camelCase** (lowercase first letter, subsequent words capitalized) instead of snake_case.
- Prioritize conciseness (e.g., `i` for loop index, `err` for error variable).
- **Publicity:** If a name starts with an UPPERCASE letter (e.g., `User`), it is **Exported** (accessible from other packages). Otherwise (e.g., `user`), it is **Unexported** (internal use only).

---

> Go is a **Strongly Typed** language. You cannot perform operations between different data types (e.g., adding `int` to `float64`) without an explicit type conversion (casting).

**Example:**
```go
var x int = 10
var y float64 = 5.5
// z := x + y // COMPILATION ERROR!
z := float64(x) + y // CORRECT
```

---
