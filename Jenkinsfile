pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/training-plan"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/training-plan/"
            }
        }
    }
    post {
        failure {
            emailext body: "Something is wrong with ${env.BUILD_URL}", recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: "Failed Pipeline: ${currentBuild.fullDisplayName}"
        }
        success {
            emailext body: "Application is up and running ${env.BUILD_URL}", recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: "Pipeline succeeded: ${currentBuild.fullDisplayName}"
        }
    }
}