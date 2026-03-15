---
title: "00. Introduction"
category: "Go"
tags: ["golang", "philosophy", "intro"]
---

# 00. Introduction: The Mindset of a Gopher

Welcome to the first chapter of your journey to master Golang (Go). Before we touch our first lines of code, we need to understand **why Go exists** and the **legacy of its predecessors**.

## 1. Origins: A Gathering of Masters

Go was not born just to "add" to the programming world. It was molded by **Robert Griesemer, Rob Pike, and Ken Thompson** (who laid the foundations for C and Unix) at Google in 2007.

Go inherits DNA from classic language lineages:
- **From C:** Concise syntax, maximum execution performance, and a memory model close to the hardware.
- **From Pascal/Modula/Oberon:** Package structure and strict discipline regarding data types.
- **From CSP (Communicating Sequential Processes):** A Concurrency model based on **Channels**.

## 2. Less is More

While other languages race to add complex features, Go chooses the opposite path: **Simplicity**.

Go's philosophy is: **The fewer redundant features a language has, the less developers have to worry about "how to write" and can focus entirely on "solving problems."**

> Go has only 25 keywords. For comparison, C++ has over 90 and Java has over 50.

## 3. Simplicity Does Not Mean Laxity

Don't confuse *Simple* with *Easy*.
- Go is simple because it removes distracting elements.
- Go forces you to write code explicitly, without ambiguity.

**Evidence of Explicitness:**
In Go, there is no concept of "ignoring errors." Errors are treated as values, and you **must** handle them. This makes your system more stable and predictable.

```go
f, err := os.Open("filename")
if err != nil {
    return err
}
```

## 4. Composition Over Inheritance

Go discards the complex inheritance hierarchies of traditional object-oriented programming. Instead, Go leverages the power of **Composition** and **Interfaces**.

Imagine you are playing with Lego. You don't need a "parent brick" to create a "child brick." You just assemble small blocks together to build a great structure. That is exactly how Go operates.

## 5. "Do not communicate by sharing memory..."

This is Go's most famous tenet on Concurrency:
> *Do not communicate by sharing memory; instead, share memory by communicating.*

Instead of using complex Locks/Mutexes to protect shared data, Go uses **Channels** so that processes (Goroutines) can exchange information directly. This eliminates most Race Condition bugs.

## 6. Conclusion: The Journey to Becoming a Gopher

Learning Go is not just about learning syntax; it's about learning how to **simplify your thinking**. A true Gopher always prioritizes clarity over cleverness (Clarity over Cleverness).

---

**Common Mistake:** Trying to impose the thinking of Java or C++ (like multi-layered inheritance or using try-catch) on Go.

> Keep your mind empty and embrace Go in its most original way.
