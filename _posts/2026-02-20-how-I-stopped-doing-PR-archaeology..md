---
layout: article
title: I Let an AI Agent Read My Jira Tickets Before Reviewing PRs
tags: [Article, Agent, GenAI, AI, Github]
link: https://nielsfreier.substack.com/p/i-let-an-ai-agent-read-my-jira-tickets
---

Every code review starts with the same ritual: find the Jira ticket, find the Confluence page, mentally reconstruct why the change exists. Then you can finally look at the diff.

I built a GitHub Agentic Workflows automation that does all of that automatically.
It reads the Jira issue and linked Confluence page when a PR opens, and posts a structured context briefing before any human touches the review.

The workflow is a markdown file. No Python scripts, no hosted webhooks, no YAML gymnastics.

Write-up covers the full setup: the shared MCP config for Atlassian, the enricher workflow itself, what the output actually looks like, and where I'm taking it next.
