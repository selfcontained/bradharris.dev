---
author: Brad Harris
title: "PHP Sessions in the db"
slug: php-sessions-in-the-db
date: 2007-05-03 08:39:46
publish: true
url: "/legacy/2007-05-03/php-sessions-in-the-db/"
tags:
  - post
  - legacy
  - adroit
  - php
---

I read an article today that I thought was great, and may be the answer to some oddities I've experienced lately.  I host my sites on a MediaTemple GridServer account.  Occasionally, as I'm logged into a site I've done, my session seems to just get blown away, and I lose my log in credentials.  I noticed this recently as I was working on AdroitAuthentication class and trying to clean up how I was handling user authentication.  I added in cookie handling to allow automatic logins if desired, and this seems to have alleviated the problem I was having with dissapearing sessions.  Anyways, back to the article I read...

[Storing PHP Sessions in a Database][db-sessions]

This article described how a common problem with a multiple server environment, which helps for load balancing, is that sessions in PHP are by default stored on the hard disk.  As you bounce around servers from load balancing, those files may not get copied with you, thereby causing your session to either be non-existent, or stale.  A solution is to change PHP to use the database for sessions instead.  Its a great article, and I'm going to give it a shot tonight and make it a feature in Adroit php framework.  After excitingly discussing this with a co-worker of mine, he smiled at me and said he wouldn't comment on how [Rails][] has that built into it already.  Its funny how the more I develop Adroit, the more Rails-like features I find myself implementing...  One day I'll give Rails a shot, but I really love PHP and without people pushing the envelope with it it won't progress as a language.

[db-sessions]: http://www.devshed.com/c/a/PHP/Storing-PHP-Sessions-in-a-Database/
[Rails]: http://rubyonrails.org/

