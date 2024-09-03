@Library('hibernate-jenkins-pipeline-helpers@1.5') _

import org.hibernate.jenkins.pipeline.helpers.version.Version

pipeline {
    agent {
        label 'Worker&&Containers'
    }
    tools {
        maven 'Apache Maven 3.9'
        jdk 'OpenJDK 17 Latest'
    }
    options {
        buildDiscarder logRotator(daysToKeepStr: '30', numToKeepStr: '10')
        disableConcurrentBuilds(abortPrevious: false)
    }
    parameters {
        string(
                name: 'RELEASE_VERSION',
                defaultValue: '',
                description: 'The version to be released, e.g. 3.0.0.Final.',
                trim: true
        )
        string(
                name: 'DEVELOPMENT_VERSION',
                defaultValue: '',
                description: 'The next version to be used after the release, e.g. 3.0.1-SNAPSHOT.',
                trim: true
        )
        booleanParam(
                name: 'RELEASE_DRY_RUN',
                defaultValue: false,
                description: 'If true, just simulate the release, without pushing any commits or tags, and without uploading any artifacts or documentation.'
        )
    }
    stages {
        stage('Build') {
            steps {
                withMaven(mavenLocalRepo: env.WORKSPACE_TMP + '/.m2repository') {
                    sh "./mvnw clean verify"
                }
            }
        }
    }
}
