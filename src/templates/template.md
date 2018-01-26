---
path: 'desired-slug' # Desired slug for the paper landing page, should be based on the paper title and similar to the markdown file name
title: 'Paper's Title' # Full paper title
author: 'Author Name' # Omit if no author name provided
cover: 'paper_cover.png' # Slug for the cover image, must be saved in the /covers directory at the site root
pdf: 'paper_file.pdf' # Slug for the PDF, must be saved in the /pdf directory at the site root
page_count: 'xx' # Number of pages in the PDF
category: 'whitepaper' # Choose from 'whitepaper', 'documentation', and 'research'
is_currency: true # Boolean, if paper is about a currency true, otherwise false
currency: 'Name of Coin' # If paper is about a cryptocurrency list it here, otherwise omit
date_published: 'YYYY-MM-DD' # Date of paper's original publication, be precise as possible, if no date know put unknown
date_added: 'YYYY-MM-DD' # Date paper was added to the site
source: 'https://source_site.com' # Website from where the paper was taken
---

<object class="pdf_embed" data="/pdf/paper_file.pdf" type="application/pdf" width="100%" height="100%">
   <p><b>DOCUMENT UNAVIALABLE</b>: This browser does not support PDFs. Please <a href="/pdf/paper_file.pdf">download the PDF</a> to view it.</p>
</object>

by Author Name | YYYY-MM-DD

#### Description
One-line description of the paper (who, what, why).

**Source:** https://source_site.com

#### Excerpt
> Brief (~one paragraph) excerpt taken from the paper. Ideally, something from the abstract, introduction, or conclusion of the paper which summarizes it's findings or purpose.

#### Related
Date Published | Title                                                                          | Page Count
---------------|--------------------------------------------------------------------------------|------------
YYYY-MM-DD     | Older Version [![Download](/assets/download_cloud.svg)](/pdf/paper_file_2.pdf) | xx
