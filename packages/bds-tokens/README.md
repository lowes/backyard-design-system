# Lowe's Backyard Design Tokens

[![Quality Gate Status](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=alert_status)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Maintainability Rating](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=sqale_rating)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Reliability Rating](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=reliability_rating)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Security Rating](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=security_rating)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Coverage](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=coverage)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Bugs](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=bugs)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Code Smells](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=code_smells)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)
[![Vulnerabilities](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=backyard-bds-design-tokens&metric=vulnerabilities)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=backyard-bds-design-tokens)

Welcome to the Lowe's Backyard Design Token generator.  These tokens are the source of truth for all Lowe's Digital design properties see below for the token categories included.

This generator will take the YAML files and create variable files for both web and applications depending on platform need.

All platform specific generated tokens are located in the 'dist' directory.  You can see all the themes, types and formats that are created in the table below.

## Quick Start
1. Run `cd packages/bds-token` to enter backyard-tokens directory.
2. Run `npm install` in the backyard-tokens directory.


### Available Commands
1. `npm run build` to build all Design Token files.


### All Themes created

| Theme | Format(s) |
| :--- | :--- |
| android | xml |
| associate | xml |
| backyard | scss, sass, less, json, module.js, common.js, stylus, custom-properties |
| core-platform | scss, sass, less, json, module.js, common.js, stylus, custom-properties |
| dotcom | scss, sass, less, json, module.js, common.js, stylus, custom-properties |
| iOS | json |
| omnia | scss, sass, less, json, module.js, common.js, stylus, custom-properties |

### Token Categories Included
* Colors
    * Background
    * Border
    * Icon
    * Font
    * Shared
    * Chart (*Core Platform only)
* Typography
    * Font Stack
    * Font Weight
* Sizing
* Layout
    * Media Queries
    * Gutters
* Borders
    * Border Width
    * Border Radius
    * Box Shadow

### Encapsulated Theme Note

The encapsulated theme will create itself from both light and dark themes, so that all tokens for both are available with the prefix of 'theme-light' or 'theme-dark'.

Both Associate Theme and Omnia Theme consume this encapsulated theme for their color tokens.

When needing to override a color token in either Associate or Omnia, make sure you override using the correct prop name

`theme-light-<color-name>`
`theme-dark-<color-name>`

Output will be: 
Android XML: `THEME_LIGHT_<color>` or `THEME_DARK_<color>`
WEB SCSS: `$theme-light-<color>` or `$theme-dark-<color>`

These prefixes will ONLY be for colors, all other tokens will not have prefixes as they should not change from light to dark themes.




