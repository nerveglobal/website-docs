---
id: buyback-and-burn
sidebar_position: 3
---

# BuyBack Model & NexusBurn Contract

Once the function 

```solidity
    initiateBuyBack(uint356 timestamp)
```

is called from the NexusBurn Contract, the collected fees are used to buy back NERVE tokens via the NerveswapV2Router. These are transferred to the NexusBurn Contract and destroyed using the following burn function. 

```solidity
    NERVE.burnNerve(address(this), NERVE.balanceOf(address(this)) - incentiveFee);
```

To ensure the highest possible execution rate of this function, the app displays it to users. As an incentive, the user receives a bonus of 0.10% of the repurchased NERVE tokens. As soon as the bonus exceeds the transaction costs incurred, it is worthwhile for the user to execute the function.