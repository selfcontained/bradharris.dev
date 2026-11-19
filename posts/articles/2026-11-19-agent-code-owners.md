---
author: Brad Harris
title: "Agents don't need our org chart"
slug: agent-code-owners
date: 2026-11-19
thumbnailImage: "/images/agent-code-owners/neon-sculptural-roles.png"
thumbnailImageAlt: "Four large ceramic forms alongside smaller specialized shapes in neon colors"
tags:
  - post
  - new
excerpt: "Mapping agents onto our familiar engineering roles is a lossy compression of how they can work. Agent code owners give reviewers smaller scopes and specific rules to check."
---

I've been changing how I organize agent code reviews while building [Dispatch](https://github.com/selfcontained/dispatch). The part that's been most useful is letting the roles get much smaller than I'd usually think to make them.

We're used to backend, frontend, infrastructure, database, etc. Each of those roles covers a lot of ground. When we start handing work to agents, it's pretty natural to reach for the same divisions. Get a frontend reviewer to look at the frontend changes. Makes sense.

But I think there's some **lossy compression** happening there. We're squeezing all the specific things an agent could focus on into a handful of job descriptions we've gotten comfortable with.

[![Four large ceramic forms give way to many smaller distinct shapes in electric teal, hot pink, blue, and neon yellow on a dark background.](/images/agent-code-owners/neon-sculptural-roles.png)](/images/agent-code-owners/neon-sculptural-roles.png)

An agent doesn't need enough responsibilities to fill a person's week. It can have a very small job: review this part of the code, and check that these particular rules still hold. We can have lots of those roles.

### How small?

In Dispatch, I have a reviewer focused on stream delivery. It checks things like whether reconnecting loses a message or delivers the same one twice. Another focuses on stream interactions, including whether the draft you're writing survives switching agents and coming back.

Those are different jobs, even though both involve some frontend and some backend code. Each persona has instructions for its particular concerns, and a mapping to the files where those concerns matter. I've been thinking of them as **agent code owners**.

I've found the reviews are more consistent this way, and faster. Each reviewer gets fewer changes to focus on and a smaller set of rules to think about. “Check that replay doesn't duplicate messages” gives it a pretty specific job compared to “review the backend.”

### Same code, different things to check

The ownership doesn't have to be exclusive either. Changes to Dispatch's stream routes can go to the delivery, interactions, and review lifecycle owners. They're looking at the same code with different things in mind. I don't have to pick which one gets to care about that file.

They still need context, of course. A reviewer can follow dependencies and look at related code to understand the change. A smaller job doesn't mean pretending the rest of the system isn't there.

### Trying it in a project

In Dispatch, this is just a couple of files in your repo. A persona describes the job, and an ownership map connects it to the code. Here's a small example.

`.agents/personas/stream-delivery.md`

```markdown-frontmatter
---
name: Stream Delivery
description: Checks message delivery and replay.
type: review
---

Review changes for these rules:
- Reconnecting must not lose messages.
- Replaying must not deliver a message twice.

Follow related code for context. Report concrete defects
introduced or made worse by the change.
```

`.agents/owners.json`

```json
{
  "version": 1,
  "rules": [
    {
      "paths": ["src/streams/**", "test/streams/**"],
      "personas": ["stream-delivery"]
    }
  ],
  "fallback": ["code-review"]
}
```

Any project with this `.agents` setup can use code owner reviews in Dispatch.
