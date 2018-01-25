---
path: 'bulletproofs'
title: 'Bulletproofs: Efficient Range Proofs for Confidential Transactions'
author: 'Benedikt B&#252;nz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, Greg Maxwell'
cover: 'bulletproofs.png'
pdf: 'bulletproofs.pdf'
category: 'research'
is_currency: false
date_published: '2017-11-01'
date_added: '2018-01-24'
source: 'https://iacr.org'
---

[![Cover of the Paper](/covers/bulletproofs.png)](/pdf/bulletproofs.pdf)

by Benedikt B&#252;nz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, & Greg Maxwell

#### Description
In this work the authors propose a new zero-knowledge proof protocol featuring very short proofs, no trusted setup, and a logarithmic in the witness size. They dub these 'bulletproofs' and discuss in depth how they would function.

**Source:** https://iacr.org

#### Excerpt
> Bulletproofs greatly improve on the linear (in n) sized range proofs currently used to implement Confidential Transactions (CT) in Bitcoin and other cryptocurrencies. Moreover, Bulletproofs supports aggregation of range proofs, so that a party can prove that m commitments lie within a given range by providing only an additive O(log(m)) group elements over the length of a single proof. To aggregate proofs from multiple parties, we enable the parties to generate a single proof without revealing their inputs to each other via a simple multi-party computation (MPC) protocol for constructing Bulletproofs. This MPC protocol uses either a constant number of rounds and linear communication, or a logarithmic number of rounds and logarithmic communication.

#### Download & Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
2017-11-01     | Bulletproofs [![Download](/assets/download_cloud.svg)](/pdf/bulletproofs.pdf)  | 40
