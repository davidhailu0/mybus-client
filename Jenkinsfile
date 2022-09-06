pipeline{
    agent {
        docker{
            image "davidhailu0/customnode"
            args "-p 3000:3000"
        }
    }
    // environment{
        // NEW_VERSION = "1.3"
        // SERVER_CREDENTIAL = credentials("CREDENTIAL ID")
    // }
    // tools{
        
    // }
    stages{
        stage("Build"){
            steps{
                sh "npm install -g yarn"
                sh "sudo npm cache clean --force"
                sh "yarn install"
            }
        }

        stage("Test"){
            // when{
            //     expression{
            //         env.BRANCH_NAME == "DEV"
            //     }
            // }
            steps{
                sh "yarn run test"
            }
        }

        stage("Deploy"){
            steps{
                sh "yarn start"
                // sh "${SERVER_CREDENTIAL}"
                // //another
                // withCredentials([usernamePassword(credentials:"credential ID",usernameVariable:USER,passwordVariable:PWD)]){

                // }
            }
        }
    }
    // post{
    //     always{

    //     }
    //     success{

    //     }
    //     failure{

    //     }
    // }
}

