---
author: Brad Harris
title: "Farewell Slack"
slug: farewell-slack
date: 2022-10-07
heroImage: "/post-heros/slack-sign.jpg"
heroImageAlt: "Picture of snowy landscape with trees and mountains"
thumbnailImage: "/post-thumbnails/slack-wall.jpg"
thumbnailImageAlt: "Picture of snowy trees and mountains"
tags:
  - post
  - new
excerpt: "A reflection on my time at Slack"
---

In 2018 I [joined Slack][] when Missions was acquired. I was excited and such a huge fan of Slack the product (still am!), that it seemed a bit surreal I'd get to help work on it in some way. Even with elevated hopes for the opportunity, I don't think I realized what an amazing adventure it would turn out to be. After 4 years at Slack, and 3 years prior working on 2 products ([BeepBoop][] & [Missions][]) built around Slack, I've decided to close that chapter and make space for new adventures. Slack will always be a highlight of my career. I've been lucky enough to work with some of _the best_ humans on some really fun projects and features.

After joining Slack I got to help grow and lead a frontend team as we built what is now [Workflow Builder][]. It was a process of taking the workflow tool we built for Missions, rethinking what it could look like as a native part of Slack, and blending that into an existing platform and suite of technologies that existed at Slack. With hard work from people across the entire company we launched the feature, and now millions of workflows run every day.

### Hitting Slack Bedrock

From the technology side, when I joined Slack they were already well into a migration to React on the frontend. Our frontend team building the new Workflow Builder interface got to benefit from so much work done here, which helped us build and iterate on product quickly.

* Frontend infra already in place, things like:
  * a build pipeline
  * data/state and network abstractions/patterns
  * i18n, metrics, and so. much. more.
* A suite of UI components representing our design system, called [Slack-Kit][]
* Slack's fast-booting frontend framework, called [Gantry][]

Some of these already had countless hours of effort and thought put into them by folks while others were still in an earlier stage. One of Slack's super-powers is how open to collaboration teams and individuals are. I loved being able to give feedback and contribute to pretty much anything I was motivated to help with. That stayed trued my entire time at Slack 😄.

At Slack we were largely using [BEM][] for scoping our css classes to avoid collisions. I've been a fan of [CSS modules][] and was able to introduce support for them into our frontend stack. While I was tinkering with our CSS build pipeline, I bumped into an issue when referencing relative image paths in CSS. With a successful change under my belt already, surely I could just add support for relative image paths as well! I rolled up my sleeves and got it "working". PR opened, reviewed, and merged. On to the next thing!

> "Anyone know of any changes that might have broken our legacy CSS build on staging?"

I saw that message and thought to myself _there's a legacy css build?_

...shortly followed by _phew, there's a staging environment._

I started digging through the layers of the css build pipeline. You know that feeling where the code you're looking at starts to look NOT like all the other code? I was definitely feeling that, and was getting into some seriously old stuff. I decided to peek at some git history to get an idea of who I could reach out to for some context. Wait, this file was last changed by... [Cal Henderson][]? Surely the CTO has more urgent matters than providing some context on some old css build configs. When I reached out to some more-adjacent colleagues, the best response I got was "You've hit bedrock!". I don't think I ever finished working on that, a minor defeat, but I told myself I had more pressing matters to attend to anyways.

Not too long after releasing Workflow Builder I got to help design and build how we could extend the capabilities of a workflow step to apps. This became known as [Workflow Steps for Apps][], and I got to [present][frontiers] at Slack's first digital Frontiers conference. Part of working on that feature included helping build the [Google Sheets for Workflow Builder][] app, which to this day is the most widely used app with workflow steps. People love spreadsheets.

### Full circle w/ SDKs and Frameworks

Prior to joining Slack, I helped build a Slack app framework called [Slapp][] with [Mike Brevoort][]. After joining, we met with 2 amazing people that were on the Slack Devrel team, [Ankur][] and [Shay][]. I recall Ankur asking something along the line of "Hey, so what are your plans with Slapp?". We were pretty focused on figuring out what Workflow Builder was going to be, and didn't have an immediate product need to evolve the framework, or plans to use it directly. I think the next question was something like, "So, can we have it? I guess we sorta _do_ have it since you've joined Slack".

So Slapp became what is now [Bolt for JS][]. It was originally called Bolt, and then grew into a suite of Slack maintained Bolt* frameworks for many languages. I can't take credit for that work, it was all the DevRel team at Slack. I was pretty happy to see Slapp carry on and receive some great improvements and have value.

The final area I got to focus on at Slack was helping build and design our [new platform][] (which just went into open beta). It focuses around a function-centric model, and includes a new hosted solution for that function-centric runtime that is powered by [Deno][]. As we prototyped, and circled around what building for this new platform could look like, we ended up building a collection of open source libraries, the core of which is a [new SDK][] for defining all the new entities that make up the new platform, and creating functions.

So in a way, I've come full circle. I helped build a Slack app framework before joining Slack, and book-ended my adventure at Slack by helping build a new framework. Slack's been an amazing chapter in my career, one I'll forever appreciate and relish.

---

![My Slack Badge in black and white](/images/slack-badge-mono.jpg)

[joined Slack]: https://slack.com/blog/productivity/slack-acquires-robot-pencils-missions-to-make-it-easy-for-non-tech-teams-to-streamline-work
[Workflow Builder]: https://slack.com/features/workflow-automation
[BeepBoop]: https://www.producthunt.com/posts/beep-boop
[Missions]: https://www.producthunt.com/posts/missions
[Slack-Kit]: https://slack.engineering/the-gradual-design-system-how-we-built-slack-kit/
[Gantry]: https://slack.engineering/gantry-slacks-fast-booting-frontend-framework/
[BEM]: https://getbem.com/
[CSS modules]: https://css-tricks.com/css-modules-part-1-need/
[Cal Henderson]: https://twitter.com/iamcal
[Workflow Steps for Apps]: https://api.slack.com/workflows/steps
[frontiers]: https://youtu.be/uKV4CztGOQ0
[Google Sheets for Workflow Builder]: https://missionsai.slack.com/apps/A01AWGA48G6-google-sheets-for-workflow-builder?tab=more_info
[Slapp]: https://medium.com/beep-boop-hq/slapp-a-new-library-for-slack-apps-13a6e91b6bf
[Mike Brevoort]: https://twitter.com/mbrevoort
[Ankur]: https://twitter.com/aoberoi
[Shay]: https://twitter.com/shaydewael
[Bolt for JS]: https://slack.dev/bolt-js/concepts
[new platform]: https://api.slack.com/future
[Deno]: https://deno.com/blog/slack-open-beta
[new SDK]: https://github.com/slackapi/deno-slack-sdk