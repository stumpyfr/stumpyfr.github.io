---
layout: page
title: /Articles
---

<ul>
{% for post in site.posts %}
  {% if post.tags contains "Article" %}
     <li><a href="{{ post.url }}">[ {{ post.date | date: "%Y-%m-%d" }} ] {{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
