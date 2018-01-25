---
path: 'increasing-anonymity'
title: 'Increasing Anonymity in Bitcoin'
author: 'Horas Yuan Mouton'
cover: 'increasing_anonymity.png'
pdf: 'increasing_anonymity.pdf'
category: 'research'
is_currency: false
date_published: '2013-08-21'
date_added: '2018-01-24'
source: 'https://wpsoftware.net/bitcoin'
---

[![Cover of the Paper](/covers/increasing_anonymity.png)](/pdf/increasing_anonymity.pdf)

by Horas Yuan Mouton

#### Description
This paper introduces the concept of one-way  aggregate  signature (OWAS) as a way to enhance the anonymity of cryptocurrencies such as Bitcoin. Using OWAS, multiple transactions are grouped together into a larger transaction thereby obfuscating the links between the inputs and outputs of the original transactions remain and providing parties to the transactions with plausible deniability.

**Source:** https://wpsoftware.net/bitcoin

#### Excerpt
> Bitcoin is a peer-to-peer cryptocurrency that prevents double spending using a distributed public ledger (known as the blockchain). Due to this, true anonymity is not present in Bitcoin because funds can be traced as they pass via different addresses. It is sometimes possible to link various addresses and obtain information not apparent in the beginning (such as loops). We present a method to enhance the anonymity of Bitcoin-type cryptocurrencies. Our method uses a new primitive known as one-way aggregate signature (OWAS). The anonymity in our scheme is based on the hardness of the computation Diffie-Hellman assumption in bilinear maps and the knapsack problem. At a high level, the idea is based on ‘mixing’ funds and can be summarized as follows. In the blockchain, each individual block holds a list of transactions that cryptographically link the sending and receiving addresses. We modify the protocol so that transactions (and blocks) do not contain any links between sending and receiving address. Using this, we obtain a far higher degree of anonymity than what is currently offered. We use two techniques to unlink the input and output addresses of a transaction - using OWAS and applying the knapsack problem to further obfuscate the funds going in and out.

#### Download & Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
2013-08-21     | Increasing Anonymity in Bitcoin [![Download](/assets/download_cloud.svg)](/pdf/increasing_anonymity.pdf) | 14
