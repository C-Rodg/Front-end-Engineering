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
    - Preorder (root, left, right)
    - Inorder (left, root, right)
    - Postorder (left, right, root)
- AVL Tree
- Graphs
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

## Problems

- Reverse String
- Reverse Integer
- Palindrome String
- Anagram String
- Is Prime
- Chunk Array
- Fibonacci Sequence (with memoization)
- Spiral Matrix
- Number Pairs
- Product Without Self
- Connected Cells Graph

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

### Contributors

Curtis Rodgers (me) : https://curtisrodgers.com
