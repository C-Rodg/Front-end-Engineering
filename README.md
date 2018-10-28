# Front-end Engineering Resources

A list of common data structures, algorithms, and resources for Front-end Engineers.

## Data Structures

- Stack
- Queue
- Linked List
- Hash Table
- Sets
- Trie
- Heap
- Tree
- Binary Search Tree
  - Breadth First Search (BFS)
  - Depth First Search (DFS)
    - Preorder (root, left, right): serializing/deserializing
    - Inorder (left, root, right): BST 0->99
    - Postorder (left, right, root)
- AVL Tree
- Graphs
  - Adjacency Matrix
  - Adjacency List
  - Dijkstra's Algorithm

## Sorts

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort

## Patterns

- Singleton Design Pattern
- Factory Design Pattern

## Problems (TODO:)

- **Binary Search Trees:**

* **Dynamic Programming:**
  - GameScoring
  - CoinChanging

## Common Considerations

- Time complexity (Big O) - important?
- Space complexity - important?
- What is the expected size of this?
- Can I destroy the data structure - in-place (save space) vs. out-of-place (no side effects)?
- Can there be negative numbers?
- Can there be duplicates?
- Is the list already sorted?

## Runtimes & Space Complexity - Big O Notation

- Constant Time O(1): no matter how many elements, will always take the same time.
- Logarithmic Time O(log n): occurs when doubling number of elements doesn't double the amount of work. Most searches of sorted data are logarithmic.
- Linear Time O(n): iterating through all elements. 1 more element = 1 more unit of work.
- Quasilinear Time O(n \* log n): divide and conquer, but must iterate through n. Most sorts are quasilinear.
- Quadratic Time O(n^2): every element has to be compared to every other element
- Exponential Time O(2^n): for every one more element, processing power required doubles.

**Space Complexity** measures the amount of space needed to perform. Most primitives (numbers, bools, etc.) are O(1). Strings, arrays, and objects are O(n.length) because a string that is length of n, will take up twice as much memory for a string length of 2n.

**Logarithms**: log2^value = exponent || 2^exponent = value. How many times you can divide a number by 2 before it reaches 1.

## Useful Formulas

- **Compact Array Formula:** (typically used with binary heaps)

  - "i"'s parent = Math.floor((i-1) / 2)
  - "i"'s left child = 2i + 1
  - "i"'s right child = 2i + 2

- **Normalize Array Shifts:** (useful for array rotations)

  - (current index + amount shifted left or right (+/-)) % array.length = new index
  - if new index is less than 0, then add array.length

- **Max Sub Array:** (Kandane's Algorithm)

  - set current, global = arr[0]
  - loop: for 1...arr.length - 1
  - current = Math.max(arr[i], current + arr[i])
  - current > global ? then global = current

- **Triangular Series:**

  - a series of numbers where each number could be a row in an equilateral triangle (starts with 1 and increases by 1)
  - Example: 1,2,3,4,5; Sum = 15
  - Pairs of numbers on each side will always add up to the same value which will be 'n' + 1. i.e. 1 + 5 = 6, 2+ 4 = 6, 3 + 3 = 6
  - The formula for this would be:
    - (n^2 + n) / 2 = Sum of integers to 'n'
  - This formula can be re-written as: (n^2 + n) = 2 \* Sum, which is quadratic
    -Quadratic formula format: ax^2 + bx + c = 0
    -Quadratic formula: ( -b +/- sqrt(b^2 - 4ac) ) / 2a

- **Sum Formula:**

  - useful for finding the missing number in a series of 1 to n
  - Sum of 1 to 'n' === (n \* (n+1)) / 2

- **Euclidean/Manhattan Distance Formula:**
  - useful for finding the distance between two points
  - allows for diagonal distance. If not needed use the 'Manhattan Distance' instead
  - Euclidean Distance 'd' = sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
  - Manhattan Distance 'd' = abs(x2-x1) + abs(y2-y1)

## Problem Solving Patterns

- **Frequency Counters:**

  - build 1 map, then subtract (or build 2)
  - Examples: strings, anagrams...
  - `{ a: 2, c: 1: t: 2}`

- **Multiple Pointers:**

  - uses two pointers (usually a read and a write pointer) and moves them in direction toward solution
  - Examples: Pairs of sorted integers, unique values

- **Sliding Window:**

  - create a window which can either be an array or number from one position to another
  - Examples: Find max sum of 'n' adjacent indexes (Kandane's Algorithm), find longest set of unique characters

- **Divide & Conquer:**

  - Consistently divide solution down to 1 (logarithm)
  - Examples: Merge sort, quick sort, binary search

- **Dynamic Programming:**

  - used when a naive approach will result in exponential (2^n) runtime
  - problem to be solved must have an _optimal substructure_ and _overlapping subproblems_
  - uses pre-computed values for solved sub-problems so that we don't have to solve them again
  - Examples: Fibonacci sequence, Knapsack problem, Coin Changing, Game Scoring

  - **Bottom Up (Tabulation Method):**

    - faster, no recursion, constant lookups
    - Methodology:
      - create lookup array 'solutions' = [1, 0, 0, ... ] where length = amount + 1
      - loop through options and get currentOptionValue
      - for each currentOption, loop from currentOptionValue -> amount + 1 using 'j'
      - set solutions[j] = solutions[j] + solutions[j - currentOptionValue]
        -return solutions[amount]

  - **Top Down (Memoization Method):**
    - slower, recursive, but can be set to only solve needed subproblems
    - Methodology:
      - pass options, options length (idx), and amount
      - base cases: amount = 0 -> 1; amount < 0 -> 0; idx <= 0 && amount >= 1 -> 0;
      - rec(options, idx - 1, amount) + rec(options, idx, amount - options[idx - 1])

## The Interview

1. Clarify the problem

   - Ask for an example
   - State assumptions
   - Ask questions (use common consideration list above)

1. Design a solution

   - Iterate on solutions
   - Discuss tradeoffs with time & space complexity

1. Write code
1. Review

   - Always **TEST** your code! Test normal cases first, and edge cases later.

## System Design Interviews

- **Process:**
  - Break it down
    - Always clarify! _What are features? Sort by time? Store all content? What platform? Work offline?.._
  - Analyze tradeoffs
  - Navigate levels of abstraction

A type of system design interview might be something like 'how would you build an rss reader?'. These types of interviews are more about diagrams and pseudocode than real code.

## Notes

- Call stack can handle ~10,000 frames before stack overflow

### Video Resources

- [Stephen Grider's Coding Interview Bootcamp](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/)

- [Four Semesters of CS in 4 Hours](https://btholt.github.io/four-semesters-of-cs/)

- [Algorithms in Motion](https://www.manning.com/livevideo/algorithms-in-motion)

- [Beau Teaches Javascript](https://medium.freecodecamp.org/my-giant-javascript-basics-course-is-now-live-on-youtube-and-its-100-free-9020a21bbc27) [freeCodeCamp Quick Course](https://www.youtube.com/watch?v=t2CEgPsws3U)

- [CS Bootcamp](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/overview)

### Reading Resources

- [Geeks for Geeks](https://www.geeksforgeeks.org/)

  - [especially this](https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/)

- [LeetCode](https://leetcode.com/)

- [Coding University](https://github.com/jwasham/coding-interview-university)

- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/)

- [The Algorithm Design Manual](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.471.4772&rep=rep1&type=pdf)

- [Nicholas C. Zakas - Human Who Codes](https://humanwhocodes.com/blog/tag/computer-science/)

- [Learneroo Algorithms](https://www.learneroo.com/subjects/8)

- [Mastering Programming Interview Questions](https://courses.csail.mit.edu/iap/interview/materials.php)

- [Coderust 3.0](https://www.educative.io/collection/5642554087309312/5679846214598656?authorName=Coderust)

- [Coderust Alternative](https://github.com/kevinfiol/coderust-free)

### Contributors

Curtis Rodgers (me) : https://curtisrodgers.com
