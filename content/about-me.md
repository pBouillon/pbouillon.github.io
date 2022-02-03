+++
title = "About Me"
+++

## Hi, I'm Pierre Bouillon

I'm a french software engineer, passionate about new technologies,
programming and sharing what I managed to learn along the way.

I'm mostly into programming and software architecture, also curious
about IoT and functional programming.

I love making things work, usually using Python or C#, mostly fueled with
optimism, enthusiasm and coffee. ☕

You can find more about my projects on [my GitHub](https://github.com/pbouillon).

---

## Skills

I'm always keen to learn new languages, technologies or else. However, here
are some of the one I worked with:

{{< highlight json >}}
{
    "langages": [ "C#", "Java", "Python", "TypeScript", "JavaScript" ],
    "technologies": {
        "backend": [".NET", "Spring", "Flask"],
        "frontend": ["Angular", "Tailwindcss"],
        "ops": ["Docker", "docker-compose"]
    },
    "meta": {
        "methodologies": ["Agile (with Scrum)", "git flow"],
        "editors": ["VS Code", "Visual Studio", "JetBrains suite"],
        "scm": ["GitHub", "GitLab", "Azure DevOps"],
        "vcs": ["git"]
    }
}
{{< /highlight >}}

---

## Achievements

### MQTTTopicBuilder creator

With around **3.3K downloads**, this C# library aims to provide a robust way for
developer to handle MQTT topics in an OOP way instead of raw values by enforcing
the various constraints that a topic must respect.

{{< highlight "c#" >}}
// Creating a topic as "Hello/From/Mqtt/Topic/Builder/#"
var subscribeTo = new TopicBuilder(TopicConsumer.Subscriber)
    .AddTopic("Hello")
    .AddTopic("From")
    .AddTopics("Mqtt", "Topic", "Builder")
    .AddMultiLevelWildcard()
    .Build();

var topic = Topic.FromString("Hello/World");  // or (Topic) "Hello/World";
Console.WriteLine(topic.Value);   // -> "Hello/World"
Console.WriteLine(topic.Levels);  // -> 2
{{< /highlight >}}

> More about it:
>
> - [GitHub repository](https://github.com/pBouillon/mqtttopicbuilder)
> - [NuGet page](https://www.nuget.org/packages/MqttTopicBuilder/)
> - [Documentation](https://pbouillon.gitbook.io/mqtttopicbuilder/)

### Bourse Coddity 2021 winner

Along with another student of my school, we built an ecosystem of tools around
fake-news prevention. On the top of a RESTful API, we created a front-end,
a micro-service and a browser extension to allow users to rate the medias
based on their trustfulness and assign them a trust index.

> More about it:
>
> - [Contest page](https://bourse.coddity.com/)
> - [Github repository](https://github.com/pbouillon/shepherd)

### Bourse Coddity 2020 winner

Along with a friend of mine I built from the ground a
RESTful API and the associated front-ends to help teachers organize virtual
workshops for teenagers organized around tech topics such as the security,
raising awareness, etc.

> More about it:
>
> - [Contest page](https://bourse.coddity.com/)
> - [Github repository](https://github.com/pBouillon?tab=repositories&q=intechnet)

### Hacktoberfest organizer (2019 & 2020)

With the help of my engineering school, I organized my home town's first
Hacktoberfest hub. Managing the local event, I was also a speaker to help
newcomers to dive into the Open Source software and get started with git and
GitHub.

> More about it:
>
> - [Hacktoberfest page](https://hacktoberfest.digitalocean.com/)
> - [School page](https://telecomnancy.univ-lorraine.fr/open-source)
