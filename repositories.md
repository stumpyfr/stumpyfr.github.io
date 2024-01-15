---
layout: page
title: /Repositories
---

While most of my work is private, I do have some public repositories on GitHub: [stumpyfr](https://github.com/stumpyfr){:target="_blank"}

# Personal projects:

{% for repo in site.data.repositories.perso %}
# <a href="https://github.com/{{ repo.repo }}" target="_blank">{{ repo.repo }}</a>
{{ repo.description }}
{% endfor %}

# Open-source / Contributions:


{% for repo in site.data.repositories.contrib %}
# <a href="https://github.com/{{ repo.repo }}" target="_blank">{{ repo.repo }}</a>
{{ repo.description }}
{% endfor %}


# Family projects:

{% for repo in site.data.repositories.family %}
# <a href="https://github.com/{{ repo.repo }}" target="_blank">{{ repo.repo }}</a>
{{ repo.description }}
{% endfor %}
