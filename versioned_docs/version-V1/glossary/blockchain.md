---
id: block
title: Blockchain
sidebar_position: 1
---

A public database that is updated and shared across many computers in a network.

"Block" refers to data and state being stored in consecutive groups known as "blocks". If you send i.e. ETH to someone else, the transaction data needs to be added to a block to be successful.

"Chain" refers to the fact that each block cryptographically references its parent. In other words, blocks get chained together. The data in a block cannot change without changing all subsequent blocks, which would require the consensus of the entire network.

Every computer in the network must agree upon each new block and the chain as a whole. These computers are known as "nodes". Nodes ensure everyone interacting with the blockchain has the same data. To accomplish this distributed agreement, blockchains need a consensus mechanism.

Ethereum currently uses a proof-of-work consensus mechanism. This means that anyone who wants to add new blocks to the chain must solve a difficult puzzle that requires a lot of computing power. Solving the puzzle "proves" that you have done the "work" by using computational resources. Doing this is known as mining. Mining is typically brute force trial and error, but successfully adding a block is rewarded in ETH.

New blocks are broadcast to the nodes in the network, checked and verified, thus updating the state of the blockchain for everyone.

So to summarise, when you send ETH to someone, the transaction must be mined and included in a new block. The updated state is then shared with the entire network.