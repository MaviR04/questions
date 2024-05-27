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

let i=0;
const qno = Object.keys(questions);
qno.sort(function(){return 0.5-Math.random()}) 
console.log(qno)

function qgetter(displayer){
    if(flag==true){
        displayer(questions,qno[i],"questionbox");
        console.log(i)
        if (i<qno.length){
            i++
        }
        else{
            document.getElementById("questionbox").innerText = 'Congrats!, you finished the module';
            document.getElementById("show").style = 'display:unset;'
    }}
    flag=false
}

let flag = true
let correctamount = 0


function adder(){
    if (i<=qno.length && flag==false){
        correctamount++
        flag=true
        console.log('Correct: '+correctamount)
    }
    else{
        flag=true
    }

}

function showresults(){
    document.getElementById('result').innerText = `You got ${correctamount} out of ${qno.length}`
}



 function display(obj,no,id){  
    document.getElementById(id).innerText = obj[no];
 }
