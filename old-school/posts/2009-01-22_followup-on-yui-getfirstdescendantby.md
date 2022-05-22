---
author: Brad Harris
title: "Followup on YUI : getFirstDescendantBy()"
slug: followup-on-yui-getfirstdescendantby
date: 2009-01-22 16:59:09
publish: true
url: "/old-school/2009-01-22/followup-on-yui-getfirstdescendantby/"
tags:
  - post
  - legacy
  - javascript
  - yui
---

Awhile ago [I posted on an additional function for YAHOO.util.Dom called **getFirstDescendantBy()**][first-post].  I was following [the ticket submitted to the YUI Sourceforge tracker][ticket], and saw that it had been closed out, and that a new function called ```YAHOO.util.Dom.getElementBy()``` was added to fill this request.  I decided to check out [the newly available YUI source code on github][yui-source], and noticed some nice enhancements.  ```YAHOO.util.Dom.getElementBy(method, tag, root)``` is now available (not in the latest stable release yet though), and does what ```getFirstDescendantBy``` did, and in most cases its much faster.  Great job to the YUI team!

Instead of taking a recursive approach to walking the graph like I had, YUI is just grabbing all the children by tag name, even if you don't supply a tag name (in this case it will use '*').  This turns out to be much faster than the recursive approach for most cases.  If you happen to be looking for an element in a very large dom tree structure, and that object is located early on in the tree, the new YUI approach will be slower than the recursive approach.  Fortunately, when I say **"large"** dom tree, I'm talking about a tree about 8 nodes deep, iterated 500-1000 times.  Most of us don't work with sites displaying that much html on a single page, so its definitely not a concern in my book.

Digging in further, I noticed that the new ```getElementBy``` just delegates to ```YAHOO.util.Dom.getElementsBy()```, which has now been improved to accept a number of additional parameters than what 2.6.0 has available.  One of those is a boolean, ```firstOnly```, which will stop after it finds the first match, and return it.  It looks like there are also additional parameters for passing in an object to your apply method, and making that object the scope.

I'm excited about this change, and it means I will soon be able to use the native YUI function for what I needed.  I'd suggest that anyone else that was using something such as ```getFirstDescendantBy()``` that I had shared look at switching once YUI releases the new function.  Thanks again YUI.

[first-post]: http://www.selfcontained.us/2008/08/20/javascript-getfirstdescendantby/
[ticket]: http://sourceforge.net/tracker/?func=detail&atid=836479&aid=2068369&group_id=165715
[yui-source]: https://github.com/yui/yui2
