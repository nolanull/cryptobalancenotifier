# CryptoBalanceNotifier

CryptoBalanceNotifier alerts users to changes in Ethereum address balances, powered by ChainTasker and offering integration with email notifications for immediate updates.

**EthEventWatcher** and **CryptoBalanceNotifier** are two distinct extensions of **ChainTasker**'s functionality, tailored to monitoring blockchain events and managing address balance notifications, respectively. They exemplify the modular and expandable nature of building Web3 tools with **ChainTasker** as a foundational dependency.


## Features

- Monitors multiple Ethereum addresses for balance changes.
- Sends email notifications detailing the latest balances.

## Installation

npm install cryptobalancenotifier

## Usage

const CryptoBalanceNotifier = require('cryptobalancenotifier');
const notifier = new CryptoBalanceNotifier('<provider_url>', {
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

notifier.notifyBalanceChanges(['0x...'], 'recipient_email@gmail.com');