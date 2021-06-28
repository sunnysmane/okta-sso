# OktaSso

## Setup Developer Environment
1. Goto `https://developer.okta.com/signup/`
2. Signup and Create a developer account for creating application.
3. Once you have created your account, you will be redirected to `https://your-sub-domain.okta.com/admin/getting-started`
4. Here click on `Customize Goals` and fill the details like role and stack of your application (For SPA select Angular, React, etc).
5. Then, below you will find the `Embed Auth Into Your App` option, Select `Add Single-Page App` and after that on next page select `Create New App`.
6. It will show popup window select Signon method as `OIDC - OpenID Connect` and Application type as `Single Page Application`.
7. On next page add application name, sign-in redirect URIs (e.g. for local environment angular http://localhost:4200/login/callback), sign-out redirect URIs (e.g. for local environment angular http://localhost:4200/login) and trusted Origins (e.g. for local environment angular http://localhost:4200)


## Development on EC2
1. Create EC2 instance on AWS
2. Install Docker with following steps:
    1. `sudo apt-get update`
    2. `sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common`
    3. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
    4. `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
    5. `sudo apt-get update`
    6. `sudo apt-get install docker-ce docker-ce-cli containerd.io`
    7. Check if docker service is running `sudo service docker status`
3. Build your application's docker image and push it to docker repository by using following commands
    1. `sudo docker build -t docker-repo/image-name:tag .`
    2. `sudo docker push docker-repo/image-name:tag`
3. Once docker is installed run following command to run angular SPA `sudo docker run -p 30000:80 -itd docker-repo/image-name:tag`
4. Now your application is deployed and accessible on `http://SERVER_IP:30000`
5. Add this `http://SERVER_IP:30000` in the trusted origins of application created in okta dashboard. 

## Demo application
Demo URL: [`http://3.142.49.46:30000/`](http://3.142.49.46:30000/)

