# WY Coding Challenge

## Challenge description

The coding challenge for WY is as follows.

A simple web page with 2 inputs:

- a name
- a quantity
- a save button

Some validation needs to happen:

- The name input can  only contain `a-z` (upper and lower case), empty space and `#`, `&`, `(` and `)`.
- The quantity input needs to be a number, up to three decimals.

A curl example is:

```zsh
curl -X POST --data-raw '{"name":"blah","quantity":1}' -H 'Content-Type: application/json' https://staging-api1.workyard.com/record
```

This coding challenge was a one hour session where I was coding and talking mostly by myself with little interactions with the interviewees.

## Personal notes

The final result that I pushed is not what the interview ended with, but I wanted to "finish" it for my own sake.

My shortfalls during the interview:

- After taking five minutes to read the coding challenge, I came up with a plan of action but did not ask clarifying questions
- During the interview, I forgot the name of the native `fetch` API (had to ask)
- When implementing the `POST` call, I forgot the application `Content-Type` that was hinted in the `curl` command.
- I also forgot that the `content-type` goes in the Headers...
- My regex skills are as outdated as it gets...

One of the follow up questions were:

What would you do better to make this production ready:

- I did not implement the validation as it is now that I finished the task. There was no feedback on the user side, so this was one point
- The point that I forgot to mention is styling, as it is currently as bare bones as it gets.
- I would also improve the tests, especially now that validation renders
- The code itself is just in the App.ts file. Helpers and constants should be moved in the code
- Did not mention that either, but you'd probably want some github actions to automate deployments

Why did you not use snapshot tests:

- Snapshot tests would be OK to test the initial render, but not very useful to test the interactivity of the components.
- From past experience with snapshot tests, they become bloated and people tend to 1. just update then without really checking them and 2. don't review them because the changes are usually quite big.
- It is a test that also does not document the code very well

## Running the project

After cloning the repository

```zsh
cd wy
pnpm i
pnpm dev
```

This should start the project.

To run the unit tests run:

```zsh
pnpm test
```
