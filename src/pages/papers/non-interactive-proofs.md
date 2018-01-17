---
path: 'non-interactive-proofs'
title: 'Non-Interactive Proofs of Proof of Work'
author: 'Aggelos Kiayias, Andrew Miller, Dionysis Zindros'
cover: 'non-interactive-proofs.png'
pdf: 'non-interactive-proofs.pdf'
category: 'research'
is_currency: false
date_published: '2017-12-04'
date_added: '2018-01-12'
source: 'https://iohk.io/research/papers/'
---

[![Cover of Non-Interactive Proofs of Proof of Work](/covers/non-interactive-proofs.png)](/pdf/non-interactive-proofs.pdf)

by Aggelos Kiayias, Andrew Miller, and Dionysis Zindros

#### Description
In this paper the authors propose a new primitive for blockchain protocols called Noninteractive-Proofs-of-Proof-of-Work (NIPoPoWs), which require resources only logarithmic in the length of the blockchain rather than verifying the entire linearly-growing chain.

**Source:** https://iohk.io/research/papers/

#### Excerpt
> Blockchain protocols such as Bitcoin provide decentralized consensus mechanisms based on proof-of-work (PoW). In this work we introduce and instantiate a new primitive for blockchain protocols called Non-Interactive-Proofs-of-Proof-of-Work (NIPoPoWs) which can be adapted into existing PoW-based cryptocurrencies. Unlike a traditional blockchain client which must verify the entire linearly-growing chain of PoWs, clients based on NIPoPoWs can verify a certain blockchain property requiring resources only logarithmic in the length of the blockchain. NIPoPoWs solve two important open questions for PoW based consensus protocols: The problem of constructing efficient transaction verification (SPV) clients and the problem of constructing efficient sidechain proofs. We provide a formal model for NIPoPoWs and two constructions for blockchain properties that we prove secure and are of interest with respect to the above applications. We also provide simulations and experimental data to measure the concrete communication efficiency and security of our construction. We also present an attack against the only previously known (interactive) PoPoW protocol that showcases the difficulty of designing such protocols. Finally, we provide two ways that our NIPoPoWs can be adopted by existing blockchain protocols, first via a soft fork, and second via a new update mechanism that we term a “velvet fork” that enables harnessing some of the performance benefits of NIPoPoWs even with a minority upgrade.

Date Published | Title                                                                                | Page Count
---------------|--------------------------------------------------------------------------------------|------------
2017-12-04     | Non-Interactive Proofs of Proof of Work [![Download](/assets/download_cloud.svg)](/pdf/non-interactive-proofs.pdf) | 35
