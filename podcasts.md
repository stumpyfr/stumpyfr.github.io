---
layout: page
title: /Podcasts
---

<ul>
{% for post in site.posts %}
  {% if post.tags contains "Podcast" %}
     <li><a href="{{ post.url }}">[ {{ post.date | date: "%Y-%m-%d" }} ] {{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
