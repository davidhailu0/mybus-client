pipeline{
    agent {
        docker{
            image "davidhailu0/customnode:latest"
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
                sh "npm install"
            }
        }

        stage("Test"){
            // when{
            //     expression{
            //         env.BRANCH_NAME == "DEV"
            //     }
            // }
            steps{
                sh "npm run test"
            }
        }

        stage("Deploy"){
            steps{
                sh "npm start"
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