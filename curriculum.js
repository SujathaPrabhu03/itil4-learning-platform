// Enhanced ITIL 4 Curriculum with Detailed Learning Materials
const itil4Curriculum = [
    {
        day: 1,
        title: "Introduction to ITIL 4 and Service Management",
        duration: "2 hours",
        objectives: [
            "Understand what ITIL 4 is and its purpose",
            "Learn the key concepts of service management",
            "Explore the evolution from ITIL v3 to ITIL 4",
            "Understand the definition of a service"
        ],
        topics: [
            {
                title: "What is ITIL 4?",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "ITIL 4 represents the latest evolution of the world's most widely adopted guidance for IT Service Management (ITSM). It provides organizations with a practical and flexible foundation to support their journey toward digital transformation.",
                    sections: [
                        {
                            title: "Definition and Purpose of ITIL 4",
                            content: `
                                <h4>ITIL 4 Definition:</h4>
                                <p>ITIL 4 is a framework designed to help organizations navigate IT's role in the wider business strategy and emerging technologies. It builds on ITIL's decades of progress and adapts guidance for the modern world of cloud, agile working, and DevOps.</p>
                                
                                <h4>Core Purpose:</h4>
                                <ul>
                                    <li><strong>Value Co-creation:</strong> Enable organizations to create value through IT-enabled services</li>
                                    <li><strong>Holistic Approach:</strong> Integrate people, processes, products, and partners</li>
                                    <li><strong>Flexibility:</strong> Adapt to any organization regardless of size or sector</li>
                                    <li><strong>Practical Guidance:</strong> Provide actionable advice for real-world implementation</li>
                                </ul>
                            `
                        },
                        {
                            title: "ITIL as a Framework for IT Service Management",
                            content: `
                                <h4>Framework Characteristics:</h4>
                                <p>ITIL 4 is not a rigid methodology but a flexible framework that:</p>
                                <ul>
                                    <li><strong>Provides Structure:</strong> Offers a common vocabulary and set of concepts</li>
                                    <li><strong>Enables Customization:</strong> Can be adapted to organizational needs</li>
                                    <li><strong>Promotes Best Practices:</strong> Shares industry-proven approaches</li>
                                    <li><strong>Supports Integration:</strong> Works with other frameworks like Agile, DevOps, and Lean</li>
                                </ul>
                                
                                <h4>Key Components:</h4>
                                <p>The ITIL 4 framework consists of:</p>
                                <ul>
                                    <li>Service Value System (SVS)</li>
                                    <li>Four Dimensions of Service Management</li>
                                    <li>Guiding Principles</li>
                                    <li>Service Value Chain</li>
                                    <li>34 Management Practices</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Key Concepts of Service Management",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "Service management is a set of specialized organizational capabilities for enabling value for customers in the form of services. Understanding these core concepts is fundamental to implementing ITIL 4 effectively.",
                    sections: [
                        {
                            title: "Definition of Service Management",
                            content: `
                                <h4>Service Management Definition:</h4>
                                <p>Service management is a set of specialized organizational capabilities for enabling value for customers in the form of services.</p>
                                
                                <h4>Key Characteristics:</h4>
                                <ul>
                                    <li><strong>Capabilities:</strong> Combination of people, processes, and technology</li>
                                    <li><strong>Value-focused:</strong> Emphasis on customer value creation</li>
                                    <li><strong>Service-oriented:</strong> Delivery through services rather than products</li>
                                    <li><strong>Outcome-based:</strong> Focus on achieving desired outcomes</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Evolution from ITIL v3 to ITIL 4",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "ITIL 4 represents a significant evolution from ITIL v3, incorporating modern approaches to service management while building on proven foundations.",
                    sections: [
                        {
                            title: "Key Differences",
                            content: `
                                <h4>Major Changes:</h4>
                                <ul>
                                    <li><strong>Structure:</strong> From lifecycle to Service Value System</li>
                                    <li><strong>Focus:</strong> From process-centric to value-centric</li>
                                    <li><strong>Integration:</strong> Better alignment with modern frameworks</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Understanding Services",
                duration: "15 minutes",
                detailedContent: {
                    introduction: "A service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.",
                    sections: [
                        {
                            title: "Service Definition",
                            content: `
                                <h4>ITIL 4 Service Definition:</h4>
                                <p><em>"A service is a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks."</em></p>
                                
                                <h4>Key Elements:</h4>
                                <ul>
                                    <li><strong>Value Co-creation:</strong> Joint effort between provider and consumer</li>
                                    <li><strong>Outcome Facilitation:</strong> Enabling desired customer outcomes</li>
                                    <li><strong>Cost and Risk Transfer:</strong> Provider manages specific costs and risks</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    },
    {
        day: 2,
        title: "ITIL 4 Service Value System (SVS)",
        duration: "2 hours",
        objectives: [
            "Understand the Service Value System components",
            "Learn the seven ITIL 4 guiding principles",
            "Explore governance and continual improvement",
            "Understand how SVS enables value creation"
        ],
        topics: [
            {
                title: "Service Value System Overview",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "The ITIL Service Value System (SVS) describes how all the components and activities of the organization work together as a system to enable value creation.",
                    sections: [
                        {
                            title: "SVS Components",
                            content: `
                                <h4>Key Components:</h4>
                                <ul>
                                    <li><strong>Guiding Principles:</strong> Universal guidance for decision-making</li>
                                    <li><strong>Governance:</strong> Direction and oversight</li>
                                    <li><strong>Service Value Chain:</strong> Operating model for service delivery</li>
                                    <li><strong>Practices:</strong> Organizational resources and capabilities</li>
                                    <li><strong>Continual Improvement:</strong> Ongoing enhancement activity</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "ITIL 4 Guiding Principles",
                duration: "60 minutes",
                detailedContent: {
                    introduction: "The seven guiding principles provide universal guidance that can be applied to any initiative, in any organization, at any level.",
                    sections: [
                        {
                            title: "The Seven Principles",
                            content: `
                                <h4>1. Focus on Value</h4>
                                <p>Everything the organization does should link back to value creation for stakeholders.</p>
                                
                                <h4>2. Start Where You Are</h4>
                                <p>Don't start from scratch; assess and leverage what already exists.</p>
                                
                                <h4>3. Progress Iteratively with Feedback</h4>
                                <p>Make incremental improvements with regular feedback loops.</p>
                                
                                <h4>4. Collaborate and Promote Visibility</h4>
                                <p>Work transparently across organizational boundaries.</p>
                                
                                <h4>5. Think and Work Holistically</h4>
                                <p>Consider the entire system and all stakeholders.</p>
                                
                                <h4>6. Keep It Simple and Practical</h4>
                                <p>Use minimum viable number of steps to achieve objectives.</p>
                                
                                <h4>7. Optimize and Automate</h4>
                                <p>First optimize, then automate to maximize value.</p>
                            `
                        }
                    ]
                }
            },
            {
                title: "Governance",
                duration: "15 minutes",
                detailedContent: {
                    introduction: "Governance ensures that policies and strategy are implemented, and that required processes are correctly followed.",
                    sections: [
                        {
                            title: "Governance Role",
                            content: `
                                <h4>Key Functions:</h4>
                                <ul>
                                    <li><strong>Direction:</strong> Setting organizational vision and strategy</li>
                                    <li><strong>Control:</strong> Monitoring and measuring performance</li>
                                    <li><strong>Oversight:</strong> Ensuring compliance and risk management</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    },
    {
        day: 3,
        title: "Service Value Chain Activities",
        duration: "2 hours",
        objectives: [
            "Understand the six Service Value Chain activities",
            "Learn how activities create value streams",
            "Explore Plan, Improve, and Engage activities",
            "Understand Design & Transition, Obtain/Build, and Deliver & Support"
        ],
        topics: [
            {
                title: "Service Value Chain Overview",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "The Service Value Chain is an operating model that outlines key activities required to respond to demand and facilitate value realization.",
                    sections: [
                        {
                            title: "Six Key Activities",
                            content: `
                                <h4>The Activities:</h4>
                                <ol>
                                    <li><strong>Plan:</strong> Ensure shared understanding of vision and direction</li>
                                    <li><strong>Improve:</strong> Ensure continual improvement across all areas</li>
                                    <li><strong>Engage:</strong> Provide good understanding of stakeholder needs</li>
                                    <li><strong>Design & Transition:</strong> Ensure products and services meet expectations</li>
                                    <li><strong>Obtain/Build:</strong> Ensure service components are available</li>
                                    <li><strong>Deliver & Support:</strong> Ensure services are delivered according to specifications</li>
                                </ol>
                            `
                        }
                    ]
                }
            },
            {
                title: "Plan, Improve, and Engage Activities",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "These three activities focus on understanding stakeholder needs, strategic direction, and continuous enhancement.",
                    sections: [
                        {
                            title: "Detailed Activity Breakdown",
                            content: `
                                <h4>Plan Activity:</h4>
                                <ul>
                                    <li>Portfolio decisions and architecture</li>
                                    <li>Strategy development</li>
                                    <li>Policy creation and compliance</li>
                                </ul>
                                
                                <h4>Improve Activity:</h4>
                                <ul>
                                    <li>Continual improvement initiatives</li>
                                    <li>Performance measurement</li>
                                    <li>Innovation and learning</li>
                                </ul>
                                
                                <h4>Engage Activity:</h4>
                                <ul>
                                    <li>Stakeholder relationship management</li>
                                    <li>User needs understanding</li>
                                    <li>Requirement gathering</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Design & Transition, Obtain/Build, Deliver & Support",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "These activities focus on the creation, acquisition, and delivery of services to consumers.",
                    sections: [
                        {
                            title: "Service Creation and Delivery",
                            content: `
                                <h4>Design & Transition:</h4>
                                <ul>
                                    <li>Service design and architecture</li>
                                    <li>Testing and validation</li>
                                    <li>Change management</li>
                                </ul>
                                
                                <h4>Obtain/Build:</h4>
                                <ul>
                                    <li>Component procurement</li>
                                    <li>Development activities</li>
                                    <li>Supplier management</li>
                                </ul>
                                
                                <h4>Deliver & Support:</h4>
                                <ul>
                                    <li>Service delivery</li>
                                    <li>Incident resolution</li>
                                    <li>User support</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    },
    {
        day: 4,
        title: "ITIL 4 Practices - General Management",
        duration: "2 hours",
        objectives: [
            "Understand the three categories of ITIL 4 practices",
            "Learn key General Management practices",
            "Explore Continual Improvement practice",
            "Understand Information Security and Relationship Management"
        ],
        topics: [
            {
                title: "ITIL 4 Practices Framework",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "ITIL 4 practices are organizational resources designed to perform work or accomplish objectives. They are grouped into three categories.",
                    sections: [
                        {
                            title: "Three Practice Categories",
                            content: `
                                <h4>Practice Categories:</h4>
                                <ul>
                                    <li><strong>General Management Practices:</strong> Adopted from general business management (14 practices)</li>
                                    <li><strong>Service Management Practices:</strong> Specific to service management (17 practices)</li>
                                    <li><strong>Technical Management Practices:</strong> Adapted from technology management (3 practices)</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Continual Improvement Practice",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "The purpose of the continual improvement practice is to align the organization's practices and services with changing business needs.",
                    sections: [
                        {
                            title: "Continual Improvement Model",
                            content: `
                                <h4>Seven-Step Model:</h4>
                                <ol>
                                    <li><strong>What is the vision?</strong> Define future state</li>
                                    <li><strong>Where are we now?</strong> Assess current state</li>
                                    <li><strong>Where do we want to be?</strong> Define objectives</li>
                                    <li><strong>How do we get there?</strong> Plan improvements</li>
                                    <li><strong>Take action</strong> Implement changes</li>
                                    <li><strong>Did we get there?</strong> Evaluate results</li>
                                    <li><strong>How do we keep the momentum going?</strong> Sustain improvements</li>
                                </ol>
                            `
                        }
                    ]
                }
            },
            {
                title: "Information Security and Relationship Management",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "These practices ensure proper security management and stakeholder relationships throughout the organization.",
                    sections: [
                        {
                            title: "Key Practice Details",
                            content: `
                                <h4>Information Security Management:</h4>
                                <ul>
                                    <li><strong>Confidentiality:</strong> Protecting information from unauthorized disclosure</li>
                                    <li><strong>Integrity:</strong> Ensuring information accuracy and completeness</li>
                                    <li><strong>Availability:</strong> Ensuring information is accessible when needed</li>
                                </ul>
                                
                                <h4>Relationship Management:</h4>
                                <ul>
                                    <li>Strategic partnerships</li>
                                    <li>Service consumer relationships</li>
                                    <li>Internal stakeholder management</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    },
    {
        day: 5,
        title: "ITIL 4 Practices - Service Management",
        duration: "2 hours",
        objectives: [
            "Understand key Service Management practices",
            "Learn Incident and Problem Management",
            "Explore Change Control processes",
            "Understand Service Level and Request Management"
        ],
        topics: [
            {
                title: "Incident and Problem Management",
                duration: "60 minutes",
                detailedContent: {
                    introduction: "These practices work together to restore services and prevent future incidents.",
                    sections: [
                        {
                            title: "Incident Management",
                            content: `
                                <h4>Purpose:</h4>
                                <p>To restore normal service operation as quickly as possible and minimize business impact.</p>
                                
                                <h4>Key Concepts:</h4>
                                <ul>
                                    <li><strong>Incident:</strong> Unplanned interruption or reduction in service quality</li>
                                    <li><strong>Major Incident:</strong> Incident with highest business impact</li>
                                    <li><strong>Workaround:</strong> Solution that reduces or eliminates impact</li>
                                </ul>
                            `
                        },
                        {
                            title: "Problem Management",
                            content: `
                                <h4>Purpose:</h4>
                                <p>To reduce the likelihood and impact of incidents by identifying actual and potential causes.</p>
                                
                                <h4>Key Concepts:</h4>
                                <ul>
                                    <li><strong>Problem:</strong> Cause or potential cause of incidents</li>
                                    <li><strong>Known Error:</strong> Problem with identified root cause and workaround</li>
                                    <li><strong>Reactive vs Proactive:</strong> Response to incidents vs prevention</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Change Control",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "Change control ensures that risks are properly assessed, authorization is obtained, and changes are managed in a controlled manner.",
                    sections: [
                        {
                            title: "Change Types",
                            content: `
                                <h4>Three Types of Changes:</h4>
                                <ul>
                                    <li><strong>Standard Change:</strong> Pre-approved, low-risk, follows documented procedure</li>
                                    <li><strong>Normal Change:</strong> Requires assessment and authorization</li>
                                    <li><strong>Emergency Change:</strong> Must be implemented urgently</li>
                                </ul>
                                
                                <h4>Change Advisory Board (CAB):</h4>
                                <p>Advises the change authority on assessment and scheduling of changes.</p>
                            `
                        }
                    ]
                }
            },
            {
                title: "Service Level and Request Management",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "These practices ensure agreed service levels are met and user requests are handled efficiently.",
                    sections: [
                        {
                            title: "Service Management",
                            content: `
                                <h4>Service Level Management:</h4>
                                <ul>
                                    <li><strong>SLA:</strong> Service Level Agreement with customers</li>
                                    <li><strong>OLA:</strong> Operational Level Agreement internally</li>
                                    <li><strong>UC:</strong> Underpinning Contract with suppliers</li>
                                </ul>
                                
                                <h4>Service Request Management:</h4>
                                <ul>
                                    <li>Handle pre-defined service requests</li>
                                    <li>Provide information and advice</li>
                                    <li>Process standard changes</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    },
    {
        day: 6,
        title: "ITIL 4 Practices - Technical Management & Integration",
        duration: "2 hours",
        objectives: [
            "Understand Technical Management practices",
            "Learn about practice integration",
            "Explore ITIL 4 implementation approaches",
            "Review course content and next steps"
        ],
        topics: [
            {
                title: "Technical Management Practices",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "Technical Management practices are adapted from technology management and focus on managing technology.",
                    sections: [
                        {
                            title: "Key Technical Practices",
                            content: `
                                <h4>Three Technical Practices:</h4>
                                <ul>
                                    <li><strong>Deployment Management:</strong> Moving new/changed components to live environments</li>
                                    <li><strong>Infrastructure and Platform Management:</strong> Overseeing infrastructure and platforms</li>
                                    <li><strong>Software Development and Management:</strong> Ensuring applications meet stakeholder needs</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "Practice Integration and Value Streams",
                duration: "45 minutes",
                detailedContent: {
                    introduction: "Practices work together through value streams to deliver value. Integration is key to successful service management.",
                    sections: [
                        {
                            title: "Integration Concepts",
                            content: `
                                <h4>Value Streams:</h4>
                                <p>Series of steps an organization undertakes to create and deliver products and services to consumers.</p>
                                
                                <h4>Practice Interaction:</h4>
                                <ul>
                                    <li>Practices combine activities from the Service Value Chain</li>
                                    <li>Multiple practices may contribute to single value stream</li>
                                    <li>Integration patterns help optimize workflows</li>
                                </ul>
                                
                                <h4>Integration with Modern Frameworks:</h4>
                                <ul>
                                    <li><strong>DevOps:</strong> Continuous integration and deployment</li>
                                    <li><strong>Agile:</strong> Iterative development and delivery</li>
                                    <li><strong>Lean:</strong> Waste elimination and flow optimization</li>
                                </ul>
                            `
                        }
                    ]
                }
            },
            {
                title: "ITIL 4 Implementation and Next Steps",
                duration: "30 minutes",
                detailedContent: {
                    introduction: "Successful ITIL 4 implementation requires a structured approach and ongoing commitment to improvement.",
                    sections: [
                        {
                            title: "Implementation Guidance",
                            content: `
                                <h4>Implementation Approach:</h4>
                                <ul>
                                    <li><strong>Start Where You Are:</strong> Assess current capabilities</li>
                                    <li><strong>Iterative Progress:</strong> Implement incrementally</li>
                                    <li><strong>Value Focus:</strong> Prioritize high-value improvements</li>
                                    <li><strong>Stakeholder Engagement:</strong> Involve all relevant parties</li>
                                </ul>
                                
                                <h4>Success Factors:</h4>
                                <ul>
                                    <li>Leadership support and commitment</li>
                                    <li>Clear communication and training</li>
                                    <li>Measurement and feedback loops</li>
                                    <li>Continuous improvement culture</li>
                                </ul>
                                
                                <h4>Next Steps:</h4>
                                <ul>
                                    <li>Take ITIL 4 Foundation certification exam</li>
                                    <li>Consider advanced ITIL 4 certifications</li>
                                    <li>Apply concepts in your organization</li>
                                    <li>Join ITIL community and continue learning</li>
                                </ul>
                            `
                        }
                    ]
                }
            }
        ]
    }
];

// Export the enhanced curriculum
if (typeof module !== 'undefined' && module.exports) {
    module.exports = itil4Curriculum;
} 