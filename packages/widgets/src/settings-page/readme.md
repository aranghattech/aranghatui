# art-settings-page



<!-- Auto Generated Below -->


## Overview

Settings Page — the shadcn settings layout: a page heading, a section nav (vertical beside the
content on wide screens, a scrolling row above it on narrow ones) and the section's heading,
description and content. Links are plain `<a slot="nav">`s (or router links) and
`aria-current="page"` marks the open section.

## Properties

| Property             | Attribute             | Description                         | Type                  | Default                                                      |
| -------------------- | --------------------- | ----------------------------------- | --------------------- | ------------------------------------------------------------ |
| `description`        | `description`         |                                     | `string`              | `'Manage your account settings and set e-mail preferences.'` |
| `heading`            | `heading`             |                                     | `string`              | `'Settings'`                                                 |
| `navLabel`           | `nav-label`           | Accessible name of the section nav. | `string`              | `'Settings sections'`                                        |
| `sectionDescription` | `section-description` |                                     | `string \| undefined` | `undefined`                                                  |
| `sectionHeading`     | `section-heading`     | The open section's heading.         | `string \| undefined` | `undefined`                                                  |


## Slots

| Slot        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
|             | The section content (a form).                                  |
| `"actions"` | Buttons beside the page heading.                               |
| `"nav"`     | The section links (`<a slot="nav" href aria-current="page">`). |


## Shadow Parts

| Part               | Description                      |
| ------------------ | -------------------------------- |
| `"content"`        | The content wrapper.             |
| `"header"`         | Page heading and description.    |
| `"nav"`            | The `<nav>`.                     |
| `"section"`        | The section wrapper.             |
| `"section-header"` | Section heading and description. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
