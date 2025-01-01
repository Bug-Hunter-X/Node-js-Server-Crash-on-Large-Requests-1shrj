# Node.js Server Crash on Large Requests

This repository demonstrates a common Node.js server issue: crashing on large requests due to stack overflow. The provided code reproduces the problem and offers a solution using streams for efficient large-data handling.

## Problem

The original `bug.js` code lacks proper handling of large incoming requests, causing a stack overflow error when the request body exceeds a certain size. This is because the `data` event listener keeps appending to a string without any checks or limits.

## Solution

The `bugSolution.js` demonstrates a fix that uses streams to process large requests. Streams process data in chunks, preventing the server from exhausting memory when dealing with large files or payloads. This approach avoids stack overflow and memory leaks.

## How to run

1. Clone the repository: `git clone https://github.com/yourusername/node-large-request-bug.git`
2. Navigate to the directory: `cd node-large-request-bug`
3. Run the buggy code (bug.js): `node bug.js`
4. Run the corrected code (bugSolution.js): `node bugSolution.js`

Try sending a large request using tools like `curl` to observe the difference in behavior between the original buggy code and the fixed version.
