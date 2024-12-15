# ALCHEMY UNIVERSITY ASSIGNMENT - WEEK 7B
Disclaimer: A portion of the codes are not written by me, as it is already provided from Alchemy University. But the assignment is to be completed in our version, and here is my version on this week assignment :)

## ERC20 Governor

In this guide, we're going to talk about using an ERC20 for governance. The token will have two purposes:

1. It will be the token used for voting weight in our Governor contract.
2. It will have a mint function which can only be called when a proposal from the token holders has been successfully executed.

### Setup

1. Once you clone the repository, you can run npm i to install all the depedencies
2. Then, you can run npx hardhat test to run the unit tests
3. You should see all test cases passing

Next, follow the instructions on the Assignment on Week 7 about _The Governor Standard_