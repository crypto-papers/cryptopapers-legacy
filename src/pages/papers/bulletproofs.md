---
path: 'bulletproofs'
title: 'Bulletproofs: Efficient Range Proofs for Confidential Transactions'
author: 'Benedikt B&#252;nz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, Greg Maxwell'
cover: 'bulletproofs.png'
pdf: 'bulletproofs.pdf'
page_count: 40
language: 'en'
category: 'research'
is_currency: false
date_published: '2017-11-01'
date_added: '2018-01-24'
source: 'https://iacr.org'
---

<object class="pdf_embed" data="/assets/pdf/bulletproofs.pdf" type="application/pdf" width="100%" height="100%">
   <p><b>DOCUMENT UNAVIALABLE</b>: This browser does not support PDFs. Please <a href="/assets/pdf/bulletproofs.pdf">download the PDF</a> to view it.</p>
</object>

by Benedikt B&#252;nz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, & Greg Maxwell | Nov. 1, 2017

#### Description
In this work the authors propose a new zero-knowledge proof protocol featuring very short proofs, no trusted setup, and a logarithmic in the witness size. They dub these 'bulletproofs' and discuss in depth how they would function.

**Source:** https://iacr.org

#### Excerpt
> Bulletproofs greatly improve on the linear (in n) sized range proofs currently used to implement Confidential Transactions (CT) in Bitcoin and other cryptocurrencies. Moreover, Bulletproofs supports aggregation of range proofs, so that a party can prove that m commitments lie within a given range by providing only an additive O(log(m)) group elements over the length of a single proof. To aggregate proofs from multiple parties, we enable the parties to generate a single proof without revealing their inputs to each other via a simple multi-party computation (MPC) protocol for constructing Bulletproofs. This MPC protocol uses either a constant number of rounds and linear communication, or a logarithmic number of rounds and logarithmic communication.
