---
layout: labs_layout
title: "Labs-Projects"
permalink: category/labs-projects/
pagination:
    enabled: true
---

<!-- Aquí agregamos el contenido específico de la página notes -->
{% assign category_posts = site.posts | where_exp: "post", "post.categories contains 'Labs-Projects'" %}

<h2 class="categories__title">Labs and Projects</h2>

<div class="categories__posts">
    {% for post in category_posts %}

    <div class="categories__posts--item">

        <div class="categories__posts--flex">
            
            {% if post.img %}
                <div class="categories__posts--left">
                    <a href="{{ post.url | relative_url }}">
                        <img class="categories__posts--image" src="{{ post.img | relative_url }}" alt="{{ post.title }}">
                    </a>
                </div>
            {% endif %}

            <div class="categories__posts--right">

                <p class="categories__posts--words"><small class="index__author">Anthony Joaquin Martinez </small>| {{ post.date | date: "%d-%m-%Y" }}</p>
                
                <h3 class="categories__posts--title">
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h3>
 
                <div class="categories__posts--descriptions">
                    <p class="categories__posts--description">{{ post.description }}</p>
                </div>

                <div class="categories__posts--data">
                    <div class="index__posts--categories">
                        {% for category in post.categories %}
                            <a class="index__categories--element" href="/category/{{ category | slugify }}">{{ category }}</a>
                        {% endfor %}
                    </div>

                    <div class="index__tags--list">
                        {% for tag in post.tags %}
                            <a class="index__tags--element" href="/tag/{{ tag | slugify }}/">{{ tag }}</a>
                        {% endfor %}
                    </div>
                </div>

            </div>

        </div>

    </div>

    {% endfor %}
</div>

