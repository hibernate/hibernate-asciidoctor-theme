Guide for maintainers
====

This guide is intended for maintainers of this project,
i.e. anybody with direct push access to the git repository.

## Continuous integration

Continuous integration happens on a self-hosted Jenkins instance at https://ci.hibernate.org/job/hibernate-asciidoctor-theme/.

## Release

* Go to [CI](https://ci.hibernate.org/job/hibernate-asciidoctor-theme/).
* Click the "play" button (green triangle) to launch a build.
* Input the parameters.
* Click "Build".
* Release the artifacts on the [OSSRH repository manager](https://oss.sonatype.org/#stagingRepositories).
  * Log into Nexus. The credentials can be found on Bitwarden; ask a teammate if you don't have access.
  * Click "staging repositories" to the left.
  * Select your newly created repository.
  * Click "Close".
  * Wait a bit; click "Refresh" if necessary.
  * Click "Release".
* If something doesn't work, [call for help](https://hibernate.org/community/#contribute).
