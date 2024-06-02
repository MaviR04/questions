const questions={
    1: "What is the purpose of RAM slots on a motherboard?",
    2: "How does the chipset contribute to the interaction between hardware components and the CPU?",
    3: "Describe the role of the GPU in a computer system?",
    4: "What is the function of expansion slots on a motherboard?",
    5: "Explain the significance of color coding RAM slots according to channels?",
    6: "What distinguishes the Von Neumann architecture from the Harvard architecture?",
    7: "What is the Von Neumann bottleneck, and how does it impact computer performance?",
    8: "Describe the purpose of registers within the CPU?",
    9: "How does the FETCH/EXECUTE cycle work within the CPU?",
    10: "Why is the Harvard architecture more commonly used in embedded systems rather than consumer PCs?",
    11: "Define network topology and discuss its importance in computer networks?",
    12: "Explain the OSI model layers and their respective functions?",
    13: "What are the strengths and weaknesses of different network topologies?",
    14: "How does the Data Link layer differ from the Network layer in the OSI model?",
    15: "Give examples of protocols used in each layer of the OSI model?"
    
}

const questions2={
    0: "Define Artificial Intelligence (AI) and its primary goals.",
    1: "Explain how Machine Learning (ML) differs from traditional programming.",
    2: "Describe the main focus of Deep Learning (DL) and how it extends Machine Learning.",
    3:'Name some real World applications of AI',
    4:"Name some technologies used in self driving cars",
    5:"What is the machine learning process",
    6:"explain the essential steps in preprocessing "
}

const questions3 = {
    1: "What is grid computing, and how does it benefit computational problem-solving?",
    2: "How does utility computing operate, and why is it considered cost-effective?",
    3: "What role does virtualization play in cloud computing?",
    4: "Explain the concept of Service-Oriented Architecture (SOA).",
    5: "How does SOA promote flexibility, reusability, and scalability in software systems?",
    6: "What is on-demand self-service in cloud computing, and how does it benefit consumers?",
    7: "How does broad network access enhance the accessibility of cloud services?",
    8: "Describe resource pooling in the context of cloud computing.",
    9: "What is rapid elasticity in cloud computing, and why is it important?",
    10: "How does the metered service model work in cloud computing?",
    11: "What is Software as a Service (SaaS), and how is it billed?",
    12: "Give two examples of SaaS applications.",
    13: "What capabilities does Platform as a Service (PaaS) provide to consumers?",
    14: "Provide examples of two PaaS offerings.",
    15: "What is Infrastructure as a Service (IaaS), and what kind of control does it offer to consumers?",
    16: "Name two examples of IaaS providers.",
    17: "What is a public cloud, and what are its potential security concerns?",
    18: "How does a private cloud differ from a public cloud in terms of cost and control?",
    19: "Explain the concept of a hybrid cloud.",
    20: "What are the benefits of using a community cloud, and who manages it?",
    21: "What are the key savings provided by cloud services?",
    22: "How do cloud services enable businesses to shift from capital expenditure to operating expenditure models?"
  };
  
  const questions4 = {
    1: "What is DevOps and what is its primary goal?",
    2: "Why is DevOps important for organizations?",
    3: "How does DevOps contribute to faster time-to-market?",
    4: "In what ways does DevOps improve collaboration between development and operations teams?",
    5: "How does automation in DevOps enhance efficiency?",
    6: "Explain how DevOps increases the reliability of software development.",
    7: "What role does continuous feedback play in DevOps?",
    8: "How does DevOps help in risk mitigation during software development?",
    9: "Describe how DevOps can lead to cost savings for an organization.",
    10: "What is Jenkins and what role does it play in DevOps?",
    11: "Explain the typical workflow Jenkins automates in a DevOps environment.",
    12: "What are the stages involved in continuous monitoring in DevOps?",
    13: "What is the role of version control in DevOps?",
    14: "What activities are performed during the continuous integration stage?",
    15: "What happens during the continuous delivery stage in DevOps?",
    16: "Describe the continuous deployment stage in DevOps."
  };
  
  const questions5 = {
    1: "What is the Internet of Things (IoT)?",
    2: "What capabilities do IoT drones with cognitive computing skills need?",
    3: "Why are lithium polymer batteries used in IoT drones?",
    4: "What technologies are commonly used in IoT drones?",
    5: "How do IoT drones recognize and track their targets?",
    6: "Explain the flight planning process for IoT drones.",
    7: "How are images captured by IoT drones processed?",
    8: "What is DECoDe, and what is its primary function?",
    9: "List the features offered by the DECoDe Layer.",
    10: "What is involved in the flight planning feature of DECoDe?",
    11: "How does real-time drone monitoring work in DECoDe?",
    12: "Describe the image analytics and AI/ML processing feature in DECoDe.",
    13: "How does enterprise integration work in DECoDe?",
    14: "What is included in edge device management in DECoDe?",
    15: "What types of alerts and notifications does DECoDe provide?",
    16: "How does DECoDe ensure security for IoT devices?"
  };





const answers={
1: "RAM slots on a motherboard provide sockets for installing RAM (Random Access Memory) modules. RAM is used by the CPU to store data and instructions that are actively being used during program execution.",
2: "The chipset acts as a communication hub between various hardware components such as the CPU, RAM, GPU, and peripheral devices. It manages data flow and controls the interaction between these components and the CPU.",
3: "The GPU (Graphics Processing Unit) is responsible for rendering graphics and images on a computer screen. It offloads graphics-related tasks from the CPU, allowing for smoother performance in graphics-intensive applications and games.",
4: "Expansion slots on a motherboard provide sockets for adding additional expansion cards such as a video card, network card, sound card, etc. These cards enhance the functionality of the computer by adding new features or capabilities.",
5: "Color coding RAM slots according to channels helps users install RAM modules in the correct configuration for optimal performance. Different colors represent different memory channels, and installing RAM in matching color slots enables dual-channel or quad-channel memory access, which can improve memory bandwidth.",
6: "The Von Neumann architecture uses a single bus for both data and instructions, while the Harvard architecture employs separate buses for data and instructions, allowing for simultaneous and parallel processing of instructions and data.",
7: "The Von Neumann bottleneck refers to the limitation imposed by having a single bus for both data and instructions in the Von Neumann architecture. This bottleneck can restrict the throughput of data and instructions, impacting overall computer performance.",
8: "Registers within the CPU are small, high-speed storage locations used to store temporary data, memory addresses, and control information during program execution. They facilitate quick access to data and instructions needed for processing.",
9: "The FETCH/EXECUTE cycle is a sequence of steps performed by the CPU to execute instructions. It involves fetching instructions from memory, decoding them to determine the operation to be performed, executing the operation, and storing the results.",
10: "The Harvard architecture is often used in embedded systems because it offers separate memory spaces for data and instructions, improving security and performance in real-time applications. Consumer PCs typically use the Von Neumann architecture due to its simplicity and cost-effectiveness.",
11: "Network topology refers to the arrangement of computers and devices in a network and how they are interconnected. It is important in computer networks as it determines the network's overall structure, efficiency, and fault tolerance.",
12: "The OSI model layers are a conceptual framework used to standardize the communication functions of a telecommunication or computing system. They include the Physical, Data Link, Network, Transport, Session, Presentation, and Application layers, each with specific functions.",
13: "Different network topologies have distinct strengths and weaknesses. For example, a star topology offers centralized management but can be prone to a single point of failure, while a mesh topology provides redundancy but can be complex and costly to implement.",
14: "The Data Link layer in the OSI model is responsible for the reliable transmission of data across a physical link. It handles error detection and correction, as well as flow control. The Network layer, on the other hand, is responsible for routing packets across multiple networks.",
15: "Examples of protocols used in each layer of the OSI model include Ethernet for the Data Link layer, IP for the Network layer, TCP and UDP for the Transport layer, HTTP and FTP for the Application layer, and many others."
}

const answers2={
    0: "AI is the simulation of human intelligence processes by machines, primarily computer systems. Its primary goals include reasoning, learning, perception, problem-solving, and language understanding.",
    1: "In traditional programming, explicit instructions are provided to perform tasks. In contrast, ML algorithms learn from data to improve performance over time without being explicitly programmed.",
    2: "DL focuses on using deep neural networks with many layers to model and understand complex patterns in data. It extends ML by automatically learning hierarchical features from raw data, enabling more accurate and efficient representation learning.",
    3:'Virtual Personal Assistants(eg:siri,alexa)\nAutonomous Vehicles(tesla)\nCRT systems(tiktok,youtube)',
    4:"Sensors to measure distance\nVision/Image Processing\nDeep learning for decision making",
    5:'Define the problem\nGather data\nPreprocessing\nFeature engineering (just a part of pre-processing) : normalization, categorical data -> numeric, new feature extraction, handling quality (outliers)\nSplit data: training, validation (tune) and testing (evaluate performance)\nHyper parameter tuning (parameters set apart from data set. Eg: learning rate, number of hidden layers of NN, depth of decision tree)\nEvaluation\nDeployment\nMonitor and maintain',
    6:'Data cleaning\nData Intergration\nData Transformation\nData Reduction'
}

const answers3= {
    1: "Grid computing is a distributed computing model that aggregates computing resources from multiple locations to solve computational problems. It benefits computational problem-solving by harnessing the collective power of interconnected computers, enabling parallel processing and efficient resource utilization.",
    2: "Utility computing delivers computing resources as a metered service, similar to utilities like electricity or water. It is considered cost-effective because it operates on a pay-as-you-use model, allowing users to pay only for the resources they consume.",
    3: "Virtualization plays a crucial role in cloud computing by enabling the creation of virtual instances of computing resources such as servers, storage, and networks from physical hardware. This abstraction allows for more efficient resource management and utilization.",
    4: "Service-Oriented Architecture (SOA) structures software applications as modular services that can be accessed and reused across different systems. It promotes loose coupling between components, making systems more flexible, scalable, and easier to maintain.",
    5: "SOA promotes flexibility, reusability, and scalability in software systems by allowing different parts of a system to communicate and work together seamlessly. This modular approach enables easy adaptation and expansion of software systems as needed.",
    6: "On-demand self-service in cloud computing enables consumers to obtain computing resources as required without human intervention. It benefits consumers by allowing them to provision resources through a self-service interface, offering convenience and control.",
    7: "Broad network access enhances the accessibility of cloud services by allowing services to be accessed via the internet from a wide range of platforms. This enables global accessibility and flexibility for users.",
    8: "Resource pooling in cloud computing involves pooling IT resources to serve multiple consumers based on a multi-tenant model. Resources are dynamically assigned and reassigned based on consumer demand, without the consumer knowing the exact location of the resources.",
    9: "Rapid elasticity in cloud computing allows cloud resources to be scaled up or down rapidly without service interruption. It is important because it enables consumers to start with minimal computing power and expand their environment as needed, making the cloud appear infinite.",
    10: "The metered service model in cloud computing works by billing consumers based on their usage of cloud resources. This provides cost transparency and enables a pay-per-use billing model, where resource usage is monitored and reported for chargeback purposes.",
    11: "Software as a Service (SaaS) is a model where the capability is provided to the consumer to use provider applications running on a cloud infrastructure. SaaS is billed based on application usage.",
    12: "Two examples of SaaS applications are EMC Mozy (online backup) and Salesforce.com (CRM application).",
    13: "Platform as a Service (PaaS) provides the capability to the customer to deploy consumer-created or acquired applications on the cloud provider's infrastructure. Consumers have control over deployed applications and hosting environment configurations.",
    14: "Two examples of PaaS offerings are Google App Engine and Microsoft Azure Platform.",
    15: "Infrastructure as a Service (IaaS) provides the capability for consumers to hire infrastructure components such as servers, storage, and networks. It offers control over the deployed software, including operating systems and applications.",
    16: "Two examples of IaaS providers are Amazon Elastic Compute Cloud (EC2) and EMC Atmos Online.",
    17: "A public cloud allows users to access and obtain services over the internet, where anyone can purchase the services on demand. The potential security concerns include less authority over the public internet, leading to higher security threats.",
    18: "A private cloud differs from a public cloud in that it requires a company to host its own infrastructure, making it more expensive but offering greater control and security.",
    19: "A hybrid cloud combines private and public clouds, offering control over the private cloud while depending on a service provider for the public cloud. This allows hosting confidential information in the private cloud and less confidential data in the public cloud.",
    20: "The benefits of using a community cloud include shared infrastructure costs and support for a specific community with shared concerns. It can be managed by the organizations involved or a third party.",
    21: "The key savings provided by cloud services include reductions in infrastructure cost, management cost, and power and energy cost.",
    22: "Cloud services enable businesses to shift from capital expenditure models to operating expenditure models, improving cost efficiency and financial flexibility."
  };


const answers4 = {
    1: "DevOps is a set of practices that aims to improve collaboration and communication between software development and IT operations teams. The primary goal of DevOps is to streamline the software delivery process and enhance the overall efficiency, agility, and reliability of the software development cycle.",
    2: "DevOps is important for organizations because it enables faster time-to-market, improves collaboration between development and operations teams, enhances efficiency through automation, increases reliability, provides continuous feedback for product quality improvement, helps mitigate risks early in the development process, and leads to cost savings through improved efficiency, reduced downtime, and better resource utilization.",
    3: "DevOps contributes to faster time-to-market by streamlining and automating the software development and deployment processes, which reduces delays and ensures that new features and updates can be delivered more quickly.",
    4: "DevOps improves collaboration between development and operations teams by fostering a culture of shared responsibility, communication, and integration of workflows. This helps to break down silos and align both teams towards common goals.",
    5: "Automation in DevOps enhances efficiency by reducing the need for manual intervention in repetitive tasks such as testing, building, and deploying software. This allows teams to focus on more strategic activities and reduces the likelihood of human errors.",
    6: "DevOps increases the reliability of software development by implementing practices such as continuous integration, continuous delivery, and continuous deployment. These practices ensure that code changes are frequently integrated, tested, and deployed, leading to more stable and reliable software releases.",
    7: "Continuous feedback in DevOps plays a critical role in improving product quality by providing real-time insights and data about the performance and issues of the software. This enables teams to make informed decisions and iterate quickly based on user feedback and monitoring data.",
    8: "DevOps helps in risk mitigation during software development by integrating testing and monitoring early and throughout the development lifecycle. This allows for early detection and resolution of issues, reducing the risk of major failures in production.",
    9: "DevOps can lead to cost savings for an organization through improved efficiency, reduced downtime, and better resource utilization. Automation and streamlined processes reduce the need for manual work and lower the costs associated with errors and downtime.",
    10: "Jenkins is an open-source automation server that automates parts of the software development process related to building, testing, and deploying code. It facilitates continuous integration and continuous delivery, making it a crucial tool in the DevOps toolkit.",
    11: "In a DevOps environment, Jenkins typically automates the following workflow: a developer makes a change in the source code, Jenkins takes the change and triggers a build (using tools like Maven or Ant), then it runs tests on test servers (using tools like Selenium or JUnit), and finally, it automates the deployment to servers for release and sets up monitoring (using tools like Splunk or Nagios).",
    12: "The stages involved in continuous monitoring in DevOps are: Version Control (Source Code Management), Continuous Integration (Continuous Build), Continuous Delivery (Continuous Testing), and Continuous Deployment (Configuration management and customization).",
    13: "Version control in DevOps involves maintaining different versions of the code, which is essential for tracking changes, collaborating on code, and managing the codebase effectively.",
    14: "During the continuous integration stage, activities such as compiling code, validating code, performing code reviews, unit testing, and integration testing are performed to ensure that code changes are frequently merged and verified.",
    15: "In the continuous delivery stage, the built application is deployed to test servers, where user acceptance testing (UAT) and other types of testing are performed to ensure that the application is ready for production.",
    16: "The continuous deployment stage in DevOps involves deploying the tested application on the production server for release. This stage includes configuration management and customization to ensure that the application runs smoothly in the production environment."
  };

  const answers5 = {
    1: "The Internet of Things (IoT) is a network of physical objects that are embedded with sensors, software, and other technologies. These objects can connect and exchange data with other devices and systems over the internet or other communication networks.",
    2: "IoT drones with cognitive computing skills need the capability to automatically recognize and track objects to free users from the tedious task of controlling them. This must be performed within the power-constrained environment of a lithium polymer battery.",
    3: "Lithium polymer batteries are used in IoT drones because they provide higher specific energy than other lithium battery types and are ideal for applications where weight is a critical feature.",
    4: "Common technologies used in IoT drones include navigational and communicational technologies (GPS, WiFi, LTE radios to transmit data), cameras, and intelligent systems to recognize and track targets.",
    5: "IoT drones recognize and track their targets using advanced analytics and AI/ML algorithms, which allow them to identify and follow their targets even in crowded environments and over long distances.",
    6: "The flight planning process for IoT drones involves creating a flight plan and delivering it to the respective drone docking station (DDS). The drone flight is then triggered almost instantaneously.",
    7: "Images captured by IoT drones are processed in real-time using advanced analytics and AI/ML algorithms both at the edge and the central platform to automatically detect faulty assets.",
    8: "DECoDe is a platform-agnostic device management solution that manages, monitors, configures, and troubleshoots IoT devices remotely from a consolidated dashboard.",
    9: "The features offered by the DECoDe Layer include flight planning, real-time drone monitoring, image analytics and AI/ML processing, enterprise integration, edge device management, alerts and notifications, and security.",
    10: "The flight planning feature of DECoDe involves centralized planning of the drone flight path and pushing the flight plan to the Ground Control Station (GCS) via the edge gateway.",
    11: "Real-time drone monitoring in DECoDe works by providing a dashboard to monitor real-time streaming video from the GCS and transmitting other parameters such as weather, wind speed, and temperature in real-time to closely monitor conditions.",
    12: "The image analytics and AI/ML processing feature in DECoDe involves using AI/ML algorithms to process images and identify faults in the power distribution network.",
    13: "Enterprise integration in DECoDe works through API-based integration with outage management and field mobility systems to receive drone flight requests and forward fault data.",
    14: "Edge device management in DECoDe includes full lifecycle management of edge devices like drones, edge gateways, GCS, and docking stations. It offers services such as remote monitoring, configuration control, remote firmware management, and updates.",
    15: "DECoDe provides alerts and notifications for device anomalies (e.g., drone battery warning, firmware upgrade failure, accidental damage) and data-related exceptions (e.g., image not of right quality, corrupt image file, transfer failure).",
    16: "DECoDe ensures security for IoT devices by implementing role-based access control, secure connection and on-boarding of IoT devices with authentication and authorization services, and leveraging enhanced security services provided by cloud platforms."
  };







let i=0;
let flag=true

  //this function puts all the questoin numbers in a list abd shuffles the order randomly
function sorter(mod){    
    if (flag==true){                             //this if condition exists to make sure the shuffle only happens one time
    const qno = Object.keys(mod);
    qno.sort(function(){return 0.5-Math.random()}); 
    console.log(qno);                      
    flag=false                   
    return qno
    }
}




let mod ;
let anscript;




function qgetter(displayer,mod){
    {
        displayer(mod,qno[i],"questionbox");
        console.log(i)
        if (i<qno.length){
            i++
        }
        else{
            document.getElementById("questionbox").innerText = 'Congrats!, you finished the module';
            document.getElementById("show").style = 'display:unset;'
    }}

}




function showresults(){
    document.getElementById('result').innerText = `You got ${correctamount} out of ${qno.length}`
}



 function display(obj,no,id){  
    document.getElementById(id).innerText = obj[no];
 }

