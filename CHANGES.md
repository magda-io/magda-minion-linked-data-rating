> The repo was part of [magda main repo](https://github.com/magda-io/magda). For history before v1.0.0, please check [CHANGES.md of main repo](https://github.com/magda-io/magda/blob/master/CHANGES.md).

# 2.1.0

- Upgrade to Node.js 22: the docker image now uses `node:22-alpine` (was `node:14-alpine`), and CI uses Node.js 22
- Upgrade GitHub Actions (checkout, setup-node, setup-qemu & setup-buildx) to current versions

# 2.0.0

- Upgrade to node14
- Upgrade to typescript 4
- Release all artifacts to GitHub Container Registry (instead of docker.io & https://charts.magda.io)
- Release Multi-arch docker images

# 1.1.0

-   Upgrade dependencies
-   Related to https://github.com/magda-io/magda/issues/3229, Use magda-common for docker image related logic

# 1.0.0

-   #4 Make GeoTiff a 3 Star format
-   #7 Update format list according to format minion improvement
-   Make docker image version default to chart version
-   Upgrade CI scripts
