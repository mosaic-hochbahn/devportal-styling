# devportal-content
User content for Ambassador Edge Stack Dev Portal

## How to customize
Do all changes in this repository and change the relevant parts. 

## kinds of content

Kinds of information you can put on dev portal:

| Kind               | Location                       | Preprocessing | Go templates |
|--------------------|--------------------------------|---------------|--------------|
| landing page       | `/landing.gomd`                | Markdown      | Yes          |
| page               | `/pages/`_name_`.gomd`         | Markdown      | Yes          |
| site layout        | `/layout.gohtml`               |               | Yes          |
| template fragments | `/fragments/`_name_`.gohtml`   |               | Yes          |
| CSS stylesheets    | `/styles/`                     |               | No           |
| Assets             | `/assets/`                     |               | No           |

## Golang Templating

As shown in the table above, much of the content that you are able to customize supports Golang templating. You can see examples of this in [`layout.gohtml`](./layout.gohtml).

Templating allows you to customize how pages look, create variables to use in static content throughout the site, and use control loops to display multiple kinds of content.

### Variables
These variables are available in all template-able file types
| Name                | Description                                                        | Values (example)            |
| ------------------- | ------------------------------------------------------------------ | --------------------------- |
| `.Ctx`              | The current type of page being served                              | "landing", "page", or "doc" |
| `.Prefix`           | The url prefix of the current request                              | `/docs/`                    |
| `.Pages`            | List of static pages in the `pages/` directory                     | `[Content Introduction]`    |
| `.CurrentPage`      | The current page being accessed                                    | `Content`                   |
| `.CurrentNamespace` | The namespace of the service for the current OpenAPI documentation | `default`                   |
| `.CurrentService`   | The name of the service for the current OpenAPI documentation      | `quote`                     |

# Deployment

### Ambassador Dev-Portal
The Ambassador Dev-Portal is part of the Ambassador installation. There is no separate deployment.

### Styles
The 3 Dev-Portals pull the styles live from this projects master (https://git.hochbahn.cloud/cicd/dev-portal-styling).  

Any changes will immediately be visible on all 3 Dev-Portals after being merged to master. 