# React useEffect Cleanup Not Called
This repository demonstrates a common issue in React where the cleanup function within a `useEffect` hook is not being called properly when the component unmounts. This can lead to memory leaks and unexpected behavior.

## Problem
The provided code includes a `useEffect` hook with a cleanup function. However, under specific circumstances (such as rapidly switching components), the cleanup function might not execute, leaving resources uncleaned.

## Solution
The solution ensures that the cleanup function is reliably called during unmounting, preventing resource leaks.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs to see if the cleanup function ('Unmounted!') is always printed when the component unmounts.
