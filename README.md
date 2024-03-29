## Magda Linked Data Minion

![CI Workflow](https://github.com/magda-io/magda-minion-linked-data-rating/workflows/Main%20CI%20Workflow/badge.svg?branch=master) [![Release](https://img.shields.io/github/release/magda-io/magda-minion-linked-data-rating.svg)](https://github.com/magda-io/magda-minion-linked-data-rating/releases)

A [Magda](https://github.com/magda-io/magda) minion is a service that listens for new records or changes to existing records, performs some kind of operation and then writes the result back to the registry. For instance, we have a broken link minion that listens for changes to distributions, retrieves the URLs described, records whether they were able to be accessed successfully and then writes that back to the registry in its own aspect.

Other aspects exist that are written to by many minions - for instance, we have a "quality" aspect that contains a number of different quality ratings from different sources, which are averaged out and used by search.

This magda minion generates dataset rating based on https://data.gov.au/page/linked-data-rating.

### Release Registry

Since v2.0.0, we use [Github Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) as our official Helm Chart & Docker Image release registry.

It's recommended to deploy minions with as [dependencies](https://helm.sh/docs/topics/chart_best_practices/dependencies/) of a Magda helm deployment.

```yaml
dependencies:
  - name: magda-minion-linked-data-rating
    version: "2.0.0"
    repository: "oci://ghcr.io/magda-io/charts"
```

## Requirements

Kubernetes: `>= 1.14.0-0`

| Repository | Name | Version |
|------------|------|---------|
| oci://ghcr.io/magda-io/charts | magda-common | 2.1.1 |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| defaultAdminUserId | string | `"00000000-0000-4000-8000-000000000000"` |  |
| defaultImage.imagePullSecret | bool | `false` |  |
| defaultImage.pullPolicy | string | `"IfNotPresent"` |  |
| defaultImage.repository | string | `"ghcr.io/magda-io"` |  |
| global.image | object | `{}` |  |
| global.minions.image | object | `{}` |  |
| global.rollingUpdate | object | `{}` |  |
| image.name | string | `"magda-minion-linked-data-rating"` |  |
| resources.limits.cpu | string | `"100m"` |  |
| resources.requests.cpu | string | `"10m"` |  |
| resources.requests.memory | string | `"30Mi"` |  |