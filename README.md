# Expo AsyncStorage Unexpected Data Issue

This repository demonstrates a bug where Expo's AsyncStorage returns undefined or unexpected data, likely due to race conditions or improper asynchronous operation handling. The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to read data from AsyncStorage before it's fully written, leading to inconsistencies in the returned value.  The problem is exacerbated in situations where multiple asynchronous actions interact with the same data in AsyncStorage.

## Solution

The solution uses `Promise.all` to ensure all asynchronous operations (writing and reading data) are completed before proceeding. This prevents race conditions by synchronizing the process.  Additionally, error handling is improved to provide more robust behavior.