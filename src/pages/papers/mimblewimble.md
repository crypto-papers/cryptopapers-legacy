---
path: 'mimblewimble'
title: 'Mimblewimble'
author: 'Tom Elvis Jedusor'
cover: 'mimblewimble.png'
pdf: 'mimblewimble.pdf'
page_count: 05
language: 'en'
category: 'research'
is_currency: false
date_published: '2016-07-19'
date_added: '2018-01-24'
source: 'https://scalingbitcoin.org'
---

<object class="pdf_embed" data="/assets/pdf/mimblewimble.pdf" type="application/pdf" width="100%" height="100%">
   <p><b>DOCUMENT UNAVIALABLE</b>: This browser does not support PDFs. Please <a href="/assets/pdf/mimblewimble.pdf">download the PDF</a> to view it.</p>
</object>

by Tom Elvis Jedusor | July 19, 2016

#### Description
This paper points out privacy concern fundamental to the way that Bitcoin operates, namely that the blockchain allows for the creation of transaction graphs that can be used to monitor and potentially de-anonymize individual accounts. The author proceeds to explain several existing attempts to introduce greater privacy by confusing the transaction graph, but notes that they all have their own drawbacks. The author then suggest using modified confidential transactions, one-way aggregate signatures, and merging transactions across blocks to allow for confidential transactions and an obscured transaction graph.

**Source:** https://scalingbitcoin.org

#### Excerpt
> We introduce the first graph-theoretic proof-of-work system, based on finding small cycles or other structures in large random graphs. Such problems are trivially verifiable and arbitrarily scalable, presumably requiring memory linear in graph size to solve efficiently. Our cycle finding algorithm uses one bit per edge, and up to one bit per node. Runtime is linear in graph size and dominated by random access latency, ideal properties for a memory bound proof-of-work. We exhibit two alternative algorithms that allow for a memory-time trade-off (TMTO)—decreased memory usage, by a factor k, coupled with increased runtime, by a factor Ω(k). The constant implied in Ω() gives a notion of memory-hardness, which is shown to be dependent on cycle length, guiding the latter’s choice. Our algorithms are shown to parallelize reasonably well.

#### Download & Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
2016-10-06     | Mimblewimble [![Download](/assets/download_cloud.svg)](/assets/pdf/mimblewimble_followup.pdf) | 19
