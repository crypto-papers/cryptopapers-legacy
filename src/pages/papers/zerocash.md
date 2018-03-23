---
path: 'zerocash'
title: 'Zerocash: Decentralized Anonymous Payments from Bitcoin'
author: 'Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers, Eran Tromer, Madars Virza'
cover: 'zerocash.png'
pdf: 'zerocash.pdf'
page_count: 56
language: 'en'
category: 'research'
is_currency: false
currency: 'Zcash'
date_published: '2014-05-18'
date_added: '2018-03-23'
source: 'http://zerocash-project.org'
---

<object class="pdf_embed" data="/assets/pdf/zerocash.pdf" type="application/pdf" width="100%" height="100%">
   <p><b>DOCUMENT UNAVIALABLE</b>: This browser does not support PDFs. Please <a href="/assets/pdf/zerocash.pdf">download the PDF</a> to view it.</p>
</object>

by Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers, Eran Tromer, and Madars Virza | May 18, 2014

#### Description
In this paper, the authors describe their concerns about the inherent lack of privacy stemming from Bitcoin's design. Their work (which later led to the creattion of Zcash) provides background on the zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) cryptographic primative. They go on to describe decentralized anonymous payment (DAP) schemes and their construction. They then discuss concrete instantiation in Zerocash and the integration of Zerocash into existing ledger-based currencies. The paper then describes some experiments conducted with their prototype implementation and suggest some possible optimizations.

**Source:** http://zerocash-project.org

#### Excerpt
> In this paper, we construct a full-fledged ledger-based digital currency with strong privacy guarantees. Our results leverage recent advances in zero-knowledge Succinct Non-interactive ARguments of Knowledge (zk-SNARKs).
We formulate and construct decentralized anonymous payment schemes (DAP schemes). A DAP scheme lets users pay each other directly and privately: the corresponding transaction hides the payment’s origin, destination, and amount. We provide formal definitions and proofs of the construction’s security.
We then build Zerocash, a practical instantiation of our DAP scheme construction. In Zerocash, transactions are less than 1 kB and take under 6 ms to verify — orders of magnitude more efficient than the less-anonymous Zerocoin and competitive with plain Bitcoin.

#### Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
2018-03-19     | Zcash Protocol Specification [![Download](/assets/download_cloud.svg)](/assets/pdf/zcash_protocol.pdf) | 62
