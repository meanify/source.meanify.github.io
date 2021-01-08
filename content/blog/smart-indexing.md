---
title: "Smart indexing of your business"
date: 2020-10-18T10:07:21+06:00
# post image
image: "images/blog/smart-indexing.png"
# post type (regular/featured)
type: "featured"
# meta description
description: "Going behind full-text indexing for improved search results"
# post draft
draft: false
---

#### Going behind full-text indexing for improved search results  

It is common to perform indexing of documents and do full-text indexing. It gives final users the ability to search for documents based on words contained in the documents. That has great results however there are techniques that are more promising on improving the results, reducing the time to find relevant documents. 

Most written text has a lot of functional words, like "a", "the", or "is" which are important to the person reading the content as they help it flow in a cohesive manner, but aren't necessary as important to someone searching the content of your documents. Consider the word "the", which in a standard email or attachment, could easily appear hundreds of times or more. When a user performs a search, part of the algorithm that calculates the relevancy of any document in the search index is to count the number of times a word appears in the text being searched. The more often it appears, the more relevant the document.

To avoid pointing out relevant documents based on words that add no meaning to the searches, best practices, point to some preprocessing/filtering to remove stop words, like the ones mentioned above, before indexing the documents based on a full-text field. 

Hitachi Content Intelligence (HCI) gives you that, out-of-the box, as also the ability to adjust the stop words list so you can adjust it to specific needs.

 > How many times do you end up searching and wasting time on un-relevant results not being able to find what you were looking for?

Just by filtering stop-words filtering won’t give you the best results you can get if you have objects, like emails and attachments that have a lot of words, cause many of those words won't and shouldn’t be considered stop words, however they will be indexed and not relevant. 

If we take in consideration that the goal of indexing documents is to find the relevant documents when a search is executed, the best search results are the ones that provide the fewest results with the highest coverage of relevant documents. 

Text indexing and retrieval techniques have their roots in the field of Information Retrieval where the task is to extract documents that best match a query. 

There are articles such as `Document Indexing Using Named Entities (2001), by Rada Mihalcea, Dan I. Moldovan` in `Studies in Informatics and Control`, say that a way to improve the relevance of documents retrieved from a large collections, show that indexing documents by using named entities, reduces the number of retrieved documents by a factor of 2, while still retrieving the relevant document.

When indexing huge number of documents using full-text indexing, even when applying filtering of stop-words, the results of a search can return non-relevant documents. In these cases, stemming and entity named recognition can be used to reduce the retrieved documents, however keeping the relevant ones.

There is still consideration to have in mind, as results will depend on the named entities you are recognizing and using for indexing. Also for different industries and business, there will be entities that are more important than others, so having some flexibility, can really make the difference on the results you provide to the end users, finding much faster the documents they were looking for.
 
#### Improving results with stemming and named entity recognition 

 > “The best search results are the ones that provide the fewest results with the highest coverage of relevant documents”, meaning that a good search result is the one that gives you all/as many as possible results covering the search, however restricting the results to that minimum. 

While Hitachi Content Platform (HCP) is great to store objects with relevant annotations, Hitachi Content Intelligence (HCI) is great for doing some pre-processing, enrichment and indexing of those documents in an easy and very performant way.

I am proposing that Stemming and Named Entity Recognition be performed on HCI, indexing documents in a way to retrieve less, however relevant, results.

HCI is flexible and allows us to create custom plugins, so that is why we have created a plugin with the goal of providing the fewest results with the highest coverage. 

Together with HCI, and while processing, pre-processing, enriching documents metadata, the plugin can, out-of-the-box, perform the following tasks: 

Named Entities Recognition (NER), in English language: 

![image](../../images/blog/smart-indexing-ner.png)

Stemming can be a bit trickier. There are two important phases when indexing documents: Index and Search. Stemming to be effective, should be applied on both indexing and search phases, and HCI allows to perform those configurations on internal indexes. 

 > Keep in mind that real value will come from training the models to recognize named entities for you specifically for your business, while steaming can be applied out-of-the-box, however applying both is where you will make the most improvements. 

Another advantage is that your indexes sizes will be reduced, giving you less costs over the required infrastructure and a better performance, both on indexing stages as well on retrieving search results. 

Do not waste valuable time on looking at non relevant results, improve efficiency of enterprise search results and give your users the time to perform crucial tasks for your business. 

Reach out to Miguel Gaspar (miguel.gaspar@meanify.org) and we will help you overachieving your business expectations.


