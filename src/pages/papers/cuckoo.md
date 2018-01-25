---
path: 'cuckoo'
title: 'Cuckoo Cycle: A Memory Bound Graph-Theoretic Proof-of-Work'
author: 'John Tromp'
cover: 'cuckoo.png'
pdf: 'cuckoo.pdf'
category: 'research'
is_currency: false
date_published: '2015-07-24'
date_added: '2018-01-24'
source: 'https://github.com/tromp/cuckoo/'
---

[![Cover of the Paper](/covers/cuckoo.png)](/pdf/cuckoo.pdf)

by John Tromp

#### Description
In this work the author proposes a new model for proof-of-work, which minimizes the advantages of certain pricey hardware architectures. The proofs consist of finding certain subgraphs in large pseudo-random graphs and are bound to memory latency.

**Source:** https://github.com/tromp/cuckoo/

#### Excerpt
> We introduce the first graph-theoretic proof-of-work system, based on finding small cycles or other structures in large random graphs. Such problems are trivially verifiable and arbitrarily scalable, presumably requiring memory linear in graph size to solve efficiently. Our cycle finding algorithm uses one bit per edge, and up to one bit per node. Runtime is linear in graph size and dominated by random access latency, ideal properties for a memory bound proof-of-work. We exhibit two alternative algorithms that allow for a memory-time trade-off (TMTO)—decreased memory usage, by a factor k, coupled with increased runtime, by a factor Ω(k). The constant implied in Ω() gives a notion of memory-hardness, which is shown to be dependent on cycle length, guiding the latter’s choice. Our algorithms are shown to parallelize reasonably well.

#### Download & Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
2015-07-24     | Cuckoo Cycle [![Download](/assets/download_cloud.svg)](/pdf/cuckoo.pdf)        | 13
