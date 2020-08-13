pipeline {
  agent any

  stages {
    stage('Build') {
      agent {
        docker { image 'node:12-alpine' }
      }
      steps {
        echo 'node -v'
        echo 'npm -v'
        echo 'Building...'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
      }
    }
  }
}
