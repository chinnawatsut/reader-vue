pipeline {
  agent any
  environment { 
    HOME = '.'
    registry = "worgate/reader-vue"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  stages {
    // stage('Test') {
    //   agent { docker { image 'node:12-alpine' } }
    //   steps {
    //     sh 'npm install'
    //     sh 'npm run test:unit'
    //   }
    // }
    stage('Build Image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps {
        script {
           docker.withRegistry('https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
