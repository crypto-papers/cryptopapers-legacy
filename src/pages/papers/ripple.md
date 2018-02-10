---
path: 'ripple'
title: 'The Ripple Protocol Consensus Algorithm'
author: 'David Schwartz, Noah Youngs, Arthur Britto'
cover: 'ripple.png'
pdf: 'ripple.pdf'
page_count: 08
language: 'en'
category: 'whitepaper'
is_currency: true
currency: 'Ripple'
ticker: 'XRP'
date_published: '2014'
date_added: '2018-01-19'
socurce: 'https://ripple.com'
---

<object class="pdf_embed" data="/assets/pdf/ripple.pdf" type="application/pdf" width="100%" height="100%">
   <p><b>DOCUMENT UNAVIALABLE</b>: This browser does not support PDFs. Please <a href="/assets/pdf/ripple.pdf">download the PDF</a> to view it.</p>
</object>

by David Schwartz, Noah Youngs, and Arthur Britto

#### Description
The paper begins by defining the components of the Ripple protocol (namely, a server, ledger, last-closed ledger, open ledger, unique node list, and proposer). Next, it describes the Ripple Protocol consensus algorithm (RPCA) by which the network comes to agreement.

**Source:** https://ripple.com

#### Excerpt
> While several consensus algorithms exist for the Byzantine Generals Problem, specifically as it pertains to distributed payment systems, many suffer from high latency induced by the requirement that all nodes within the network communicate synchronously. In this work, we present a novel consensus algorithm that circumvents this requirement by utilizing collectively-trusted subnetworks within the larger network. We show that the “trust” required of these subnetworks is in fact minimal and can be further reduced with principled choice of the member nodes. In addition, we show that minimal connectivity is required to maintain agreement throughout the whole network. The result is a low-latency consensus algorithm which still maintains robustness in the face of Byzantine failures. We present this algorithm in its embodiment in the Ripple Protocol.
