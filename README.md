# devportal-content

User content for Ambassador Edge Stack Dev Portal.

V2 is compatible with Edge Stack 1.13+.

If using an earlier version, use v1 of the DevPortal content [here](https://github.com/datawire/devportal-content).

## How to customize

Do all changes in this repository and change the relevant parts. 

## Kinds of content

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

| Name                  | Description                                                        | Values (example)            |
|-----------------------|--------------------------------------------------------------------|-----------------------------|
| `.Ctx`                | The current type of page being served                              | "landing", "page", or "doc" |
| `.Prefix`             | The url prefix of the current request                              | `/docs/`                    |
| `.Pages`              | List of static pages in the `pages/` directory                     | `[Content Introduction]`    |
| `.CurrentPage`        | The current page being accessed                                    | `Content`                   |
| `.CurrentNamespace`   | The namespace of the service for the current OpenAPI documentation | `default`                   |
| `.CurrentService`     | The name of the service for the current OpenAPI documentation      | `quote`                     |
| `.CurrentServicePath` | Relative service path for currently displayed service              | `default/quote`             |

# Deployment

## Local test

Run `docker-compose up` and open http://localhost:1080/docs/. This will display the developer portal with the default "Pet Store" demo services.

For a more comprehensive local test with more displayed services, check out the project at https://git.hochbahn.cloud/sandbox/devportal-styling-playground

## Deploying the Ambassador Dev-Portal

The Ambassador Dev-Portal is part of the Ambassador installation. There is no separate deployment.

## Deploying Styles and Content

The 3 Dev-Portals (dev, qa, prod) pull the styles live from our public Github project at https://github.com/mosaic-hochbahn/devportal-styling. This configuration is managed by Claranet.

Our Gitlab-project is mirrored to Github automatically. Changes will immediately be visible after being synced to Github.

__Careful!__: This sync will overwrite any changes that might have been committed to GitHub.

Due to this behavior, changes can __ONLY__ be committed to the Gitlab-project:
https://git.hochbahn.cloud/cicd/dev-portal-styling

The Sync is defined in Gitlab:
https://git.hochbahn.cloud/cicd/dev-portal-styling/-/settings/repository under "Mirroring repositories"

### DEV

The Dev-Portal on the Dev-Environment is styled by the Gitlab branch "develop". Any changes pushed there will be synced and visible on https://api.dev.hochbahn.cloud/docs/ 

This is defined in a global yaml config managed by Claranet.

### QA + Prod

The Dev-Portals on QA and Prod are both styled by the master-branch.

This is defined in a global yaml config managed by Claranet.

# Links
Original user content template:
https://github.com/datawire/devportal-content-v2

Ambassador Developer Portal documentation:
https://www.getambassador.io/docs/edge-stack/latest/topics/using/dev-portal/
