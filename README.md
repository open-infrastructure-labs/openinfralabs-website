# Website for MOC and OpenInfra Labs

This is the public repo to mantain the OpenInfra Labs website at [openinfralabs.org](https://openinfralabs.org).

## Overview

openinfralabs.org is built using [starter template](https://github.com/netlify-templates/gatsby-starter-netlify-cms), based on [Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)

## Setup

Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

## Clone repo

```sh
$ git clone https://gitlab.com/open-infrastructure-labs/openinfralabs-website.git
$ yarn 
```

## Available scripts

### `build`

Build the static files into the `public` folder. 

#### Usage

```sh
$ yarn build
```

### `clean`

Runs `gatsby clean` command.

#### Usage

```sh
yarn clean
```

### `develop` or `start`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`.

#### Usage

```sh
yarn develop
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```

## Merge Requests

To request changes, [submit an issue](https://gitlab.com/open-infrastructure-labs/openinfralabs-website/-/issues) or [submit a merge request](https://gitlab.com/open-infrastructure-labs/openinfralabs-website/-/merge_requests).
