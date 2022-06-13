---
id: automated-market-maker
sidebar_position: 2
---

# Automated Market Maker

The internal Automated Market Maker (AMM) serves a primary function to facilitate the swap of collected fees into NERVE tokens.  The AMM is a Uniswap V2 clone and you can read more about the mechanics of the swap [here](https://docs.uniswap.org/protocol/concepts/V3-overview/swaps).

However, the Nerve Global AMM has a special feature where NERVE tokens can only be sold through the AMM, not purchased.  This applies to all users outside of the protocol smart contract, which is the only address able to buy NERVE through the AMM.

To reiterate, users can only sell NERVE tokens for network tokens via the AMM—they cannot buy NERVE.  Only the protocol can buy NERVE through the AMM.
Since NERVE tokens can only be initially earned through using the Nerve Global App, and is backed by native tokens, the AMM establishes a price floor for the NERVE token resulting from the difference between the NERVE that the protocol buys back and the NERVE tokens that are sold by users.

NERVE token holders can also provide liquidity to the AMM and earn their share of the fees accrued by the AMM.  100% of all fees go back to LPs and trading fees with this AMM are 1% of the sale.  Providing liquidity is intended for experienced liquidity providers and there are significant risks in doing so.  If you wish to read more about the risk of providing liquidity on an AMM, please read this [article](https://academy.binance.com/en/articles/impermanent-loss-explained).

Eventually, we do anticipate NERVE token liquidity to make its way onto third party Decentralized and Centralized Exchanges and expect there to be further price discovery for the NERVE token.
