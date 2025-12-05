import CommonTwoCard from '../common/CommonTwoCard'

export const ApiExpertise =()=>{
    const data = {
    
    heading: "API Expertise Across Formats That Power Your Ecosystem",
    
    subheading:
      "Whether You’re Working With Modern Or Legacy Formats, We’ve Got You Covered:",
    cards: [
            {
              
              title: "REST API Assistance",
              
              description:
                "Design And Build Scalable, Stateless RESTful Services That Conform To Modern Web Standards – Ideal For Mobile Applications, SPAs, Microservices, And Distributed Cloud-Native Systems. Our REST APIs Are Structured For High Availability, Clean URI Design, And Seamless Client-Server Decoupling.",
            },
            {
              
              title: "SOAP API Guidance",
              
              description:
                "Integrate Reliably With Enterprise-Grade Systems Using Protocol-Based SOAP APIs. We Ensure Strong Security Through WS-Security Standards, Robust Data Validation Via XML Schema, And Advanced Features Like Session-Based Messaging And Transaction Handling.",
            },
            {
              
              title: "XML API Support System",
              
              description:
                "Enable Structured, Consistent Communication With Systems Still Reliant On XML. We Help You Maintain Backward Compatibility With Legacy Software, Government Platforms, And Industry-Specific Solutions (E.G., Banking, Insurance, Healthcare) Where XML Remains A Standard.",
            },
            {
              
              title: "RPC API Implementation",
              
              description:
                "Build High-Efficiency Remote Procedure Call (RPC) APIs Designed For Speed And Simplicity – Especially Suitable For Internal Systems Or Tightly Coupled Services Where Performance And Low Overhead Matter. We Support Both JSON-RPC And GRPC Implementations Based On Your Use Case.",
            }
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
        </>
    )
}