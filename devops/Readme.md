---

# **DevOps 8-Week Learning Path**

## **Overview**
This DevOps roadmap is designed to give you a hands-on, deep understanding of the core tools and concepts of DevOps. By the end of this 8-week program, you will have a strong foundation in **Version Control**, **Continuous Integration**, **Cloud Deployment**, **Docker & Kubernetes**, and **Monitoring**.

Each week consists of assignments and practical projects to build your DevOps skillset.

---

## **Week 1: Version Control with Git & GitHub**
### **Objective**: Learn the fundamentals of **Git** for version control and collaboration using **GitHub**.
#### **Assignments**:
1. **Learn Git Basics**:
   - Understand what Git is and why it's important for DevOps.
   - Learn Git commands: `git init`, `git add`, `git commit`, `git status`, `git log`, `git diff`, `git branch`, `git checkout`.
   - Learn about the `.gitignore` file and its use.
   
2. **GitHub Workflow**:
   - Create a GitHub account if you don't have one.
   - Initialize a Git repository locally and push it to GitHub.
   - Learn to clone, fork, and create pull requests on GitHub.
   - Set up a project repository and practice committing changes.
   - Understand collaboration workflows (e.g., Git Flow, Feature Branching).
   
3. **Assignment Project**:
   - Create a personal GitHub repository for a project.
   - Collaborate with a peer on a small project (e.g., a static website) using Git and GitHub. Focus on branches, pull requests, and merging.

---

## **Week 2: Introduction to CI/CD & Jenkins**
### **Objective**: Learn the basics of **Continuous Integration (CI)** and **Continuous Deployment (CD)** with **Jenkins**.
#### **Assignments**:
1. **Learn CI/CD Concepts**:
   - Understand the concepts of **Continuous Integration** and **Continuous Deployment**.
   - Learn why CI/CD is crucial in a DevOps pipeline.
   - Explore the benefits of automated testing and deployment.

2. **Set Up Jenkins**:
   - Install Jenkins on your local machine or use a cloud service.
   - Create your first Jenkins job to run a basic shell script.
   - Integrate Jenkins with GitHub to trigger builds on code pushes.
   - Learn how to configure Jenkins for automatic builds and tests.

3. **Assignment Project**:
   - Set up a **simple CI pipeline** in Jenkins:
     - A basic pipeline that automatically builds and tests a Node.js or Python application.
     - Automate the deployment of your application to a testing environment once tests pass.
   
4. **Bonus**:
   - Integrate **Jenkins with Slack** to get notifications about build statuses.

---

## **Week 3: Containerization with Docker**
### **Objective**: Learn **Docker** and containerization principles.
#### **Assignments**:
1. **Learn Docker Basics**:
   - Understand what Docker is and why it’s important.
   - Learn how to build a simple Docker image using `Dockerfile`.
   - Learn how to use `docker build`, `docker run`, `docker ps`, and `docker-compose`.
   
2. **Create a Dockerized Application**:
   - Create a simple Node.js or Python application (e.g., a "Hello World" API).
   - Dockerize the application by creating a `Dockerfile` and using `docker-compose` for multi-container setups.

3. **Docker Networking and Volumes**:
   - Understand Docker networks and how containers communicate with each other.
   - Learn how to mount volumes to persist data outside containers.

4. **Assignment Project**:
   - Build and Dockerize a **multi-container application** that involves at least two services (e.g., a Node.js API and a MongoDB database).
   - Use **Docker Compose** to manage and scale the application.

---

## **Week 4: Infrastructure as Code with Terraform**
### **Objective**: Learn the basics of **Infrastructure as Code (IaC)** using **Terraform**.
#### **Assignments**:
1. **Learn Terraform Basics**:
   - Understand the importance of IaC and Terraform.
   - Learn how to define infrastructure in Terraform.
   - Install Terraform and set up your first provider (e.g., AWS, Azure).

2. **Provision Basic Resources**:
   - Use Terraform to provision a basic infrastructure:
     - Create an EC2 instance (AWS) or a virtual machine (Azure/GCP).
     - Set up a storage bucket.
   
3. **Variables and Outputs**:
   - Learn how to use variables and outputs in Terraform scripts.
   - Practice creating reusable and modular Terraform code.

4. **Assignment Project**:
   - Write a Terraform script to create a **Web Server Setup** on AWS:
     - Provision an EC2 instance, install a web server (e.g., Apache or Nginx), and output the public IP address.
   
---

## **Week 5: Cloud Infrastructure & Deployment (AWS/GCP/Azure)**
### **Objective**: Gain hands-on experience with **cloud infrastructure** using a major cloud provider (AWS, GCP, or Azure).
#### **Assignments**:
1. **Learn Cloud Concepts**:
   - Understand the core concepts of cloud computing (IaaS, PaaS, SaaS).
   - Explore the **Elastic Compute Cloud (EC2)**, **S3**, and **Lambda** (AWS) or their equivalents in GCP/Azure.

2. **Cloud Deployment**:
   - Set up an account with AWS, GCP, or Azure.
   - Learn how to deploy a simple application (e.g., a Node.js or Flask app) to a cloud service.

3. **Set Up Load Balancers and Auto-scaling**:
   - Learn how to create and configure cloud **load balancers** and **auto-scaling groups**.
   
4. **Assignment Project**:
   - Deploy a **web application** to a cloud provider (AWS/GCP/Azure).
   - Set up **auto-scaling** to handle traffic spikes.

---

## **Week 6: Kubernetes Fundamentals**
### **Objective**: Learn the basics of **Kubernetes** for container orchestration.
#### **Assignments**:
1. **Learn Kubernetes Basics**:
   - Understand what Kubernetes is and why it's important for managing containers at scale.
   - Learn about **pods**, **deployments**, **services**, and **volumes**.
   
2. **Set Up Minikube**:
   - Install **Minikube** to run a local Kubernetes cluster on your machine.
   - Deploy a simple application (e.g., a web app) on your local cluster.

3. **Kubernetes Deployments & Services**:
   - Learn how to define a **deployment** and expose it using a **service** in Kubernetes.
   
4. **Assignment Project**:
   - Deploy a Dockerized **multi-service application** (e.g., frontend and backend services) on Kubernetes.
   - Expose the app with a **Kubernetes service**.

---

## **Week 7: CI/CD with Kubernetes & Helm**
### **Objective**: Extend your CI/CD pipeline to work with **Kubernetes** using **Helm**.
#### **Assignments**:
1. **Learn Helm**:
   - Understand the purpose of **Helm** in Kubernetes.
   - Learn how to use Helm to deploy and manage applications on Kubernetes.
   
2. **Set Up CI/CD Pipeline**:
   - Set up a Jenkins pipeline that deploys your application to a **Kubernetes cluster**.
   - Integrate Jenkins with Kubernetes to automatically deploy to your cluster.

3. **Helm Charts for Application Deployment**:
   - Learn how to create Helm charts for packaging and deploying Kubernetes applications.

4. **Assignment Project**:
   - Create a **CI/CD pipeline** that uses Jenkins to build, test, and deploy an application to a Kubernetes cluster using Helm.

---

## **Week 8: Monitoring and Logging**
### **Objective**: Learn about **monitoring** and **logging** in DevOps using **Prometheus**, **Grafana**, and **ELK Stack**.
#### **Assignments**:
1. **Learn Prometheus & Grafana**:
   - Understand how **Prometheus** works for monitoring Kubernetes and applications.
   - Learn how to visualize metrics using **Grafana**.

2. **Set Up ELK Stack**:
   - Learn about the **ELK stack** (Elasticsearch, Logstash, and Kibana) for logging and visualizing logs.
   - Set up Elasticsearch and Kibana to monitor and analyze logs from your application.

3. **Assignment Project**:
   - Set up **Prometheus** and **Grafana** for monitoring your Kubernetes cluster.
   - Set up **ELK Stack** to monitor and log application events.

---

## **Conclusion**
By the end of these 8 weeks, you will have:
- Hands-on experience with version control using **Git** and **GitHub**.
- Set up **CI/CD pipelines** using **Jenkins** and Docker.
- Deployed applications using **Terraform** and **Cloud Providers** (AWS/GCP/Azure).
- Managed containers with **Docker** and orchestrated them with **Kubernetes**.
- Implemented monitoring and logging solutions using **Prometheus**, **Grafana**, and the **ELK Stack**.

This roadmap will set a strong foundation for your DevOps journey, enabling you to manage complex infrastructures and applications efficiently.