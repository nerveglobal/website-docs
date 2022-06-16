---
id: tokenomics
sidebar_position: 2
---

# Tokenomics

:::caution
The NERVE token carries no governance voting rights, and conveys no ownership in the protocol.
:::

The NERVE token is an extended ERC-20 token based on the Ethereum blockchain. The token is the value capture mechanism for the app and is minted in direct proportion to usage of the app.  The token is backed by the native token of the underlying blockchain.  When Tasks are created and Loot is paid out, the fees collected by the protocol are swapped into NERVE token and distributed through the [Funds Distribution Contract](https://docs.nerveglobal.com/sdk/token-economy/funds-distribution).

The total supply of NERVE is fixed and is indefinitely locked into the internal [AMM](https://docs.nerveglobal.com/sdk/automated-market-maker) liquidity pool on the Token Generation Event. The emission rate is based solely on usage of the protocol and directly proportional to collected fees. None of the Team, Presale Investors or DAO allocation buckets receive any NERVE tokens in advance. Rather, they only receive NERVE token when NERVE is minted from collection of fees from use of the app.

In the process of creating a task, 5.00% fee is deducted from the initial stake, which on the one hand benefits the community and on the other hand counteracts possible attack scenarios. The initial stake of the task creator is obligatory for all further participants as a minimum stake. 
The fee of 5.00% also exists here.

**Two final scenarios will be created for each task**:

- The task is scored Negative by the majority. In this outcome, all participants, as well as the creator of the task, will receive their stake back. The previously collected fee is not returned.

- The task is evaluated positively by the majority. In this outcome, the creator of the task receives 95.00% of the total stake. 5.00% will go to the NexusBurn (see below).

## Fees
:::note
This fee structure incentivizes good faith Task creation and reduces spam within the economy.
:::

The fees are collected in the native token of the blockchain to be used to buy back the NERVE token through the internal [AMM](https://docs.nerveglobal.com/sdk/automated-market-maker). These tokens are then burned. Learn more about it [here](https://docs.nerveglobal.com/sdk/token-economy/buyback-and-burn).

Each time a fee is collected, the protocol mints an amount of NERVE tokens equal to the fee value using the internal AMM exchange rate. These NERVE tokens are then distributed back according to the token allocation pools with 60% of the initial Task creation/join fees returned to the Host and Fans and 60% of the payout fees returned to the Hero.

The result of this model is a tradeable NERVE token that is fully backed by native tokens of the underlying blockchain, with fair distribution to the users of the app.
