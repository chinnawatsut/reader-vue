pipeline {
  agent any
  environment { 
    HOME = '.'
    registry = "worgate/reader-vue"
    registryCredential = 'dockerhub'
  }
  stages {
    stage('Test') {
      agent { docker { image 'node:12-alpine' } }
      steps {
        sh 'npm install'
        sh 'npm run test:unit'
      }
    }
    stage('Build image') {
      steps {
        script {
          docker build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
