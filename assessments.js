// ITIL 4 Assessment Questions - 20 questions per day
const itil4Assessments = {
    day1: {
        title: "Day 1: Introduction to ITIL 4 and Service Management",
        timeLimit: 20, // minutes
        passingScore: 14, // 70%
        questions: [
            {
                id: 1,
                question: "What is the primary purpose of ITIL 4?",
                options: [
                    "To provide a framework for IT service management",
                    "To replace all existing IT frameworks",
                    "To focus only on IT operations",
                    "To eliminate the need for IT governance"
                ],
                correct: 0
            },
            {
                id: 2,
                question: "Which of the following best defines a service in ITIL 4?",
                options: [
                    "A piece of software that runs on a server",
                    "A means of enabling value co-creation by facilitating outcomes customers want to achieve",
                    "A hardware component in IT infrastructure",
                    "A document that describes IT procedures"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What are the two main aspects of value that a service provides?",
                options: [
                    "Utility and warranty",
                    "Function and performance",
                    "Cost and quality",
                    "Speed and reliability"
                ],
                correct: 0
            },
            {
                id: 4,
                question: "Which statement best describes the evolution from ITIL v3 to ITIL 4?",
                options: [
                    "ITIL 4 completely replaces all ITIL v3 concepts",
                    "ITIL 4 focuses more on processes than practices",
                    "ITIL 4 enhances ITIL v3 with greater emphasis on value co-creation and modern ways of working",
                    "ITIL 4 is only applicable to cloud computing"
                ],
                correct: 2
            },
            {
                id: 5,
                question: "In ITIL 4, who is responsible for defining the outcomes that a service consumer wants to achieve?",
                options: [
                    "Service provider",
                    "Service consumer",
                    "IT department",
                    "External consultant"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "What is the relationship between service outcomes and outputs?",
                options: [
                    "They are the same thing",
                    "Outcomes are what the service produces, outputs are the results achieved",
                    "Outputs are what the service produces, outcomes are the results achieved by the service consumer",
                    "There is no relationship between them"
                ],
                correct: 2
            },
            {
                id: 7,
                question: "Which of the following is NOT a key benefit of implementing ITIL 4?",
                options: [
                    "Improved service quality",
                    "Better alignment between IT and business",
                    "Guaranteed cost reduction",
                    "Enhanced value co-creation"
                ],
                correct: 2
            },
            {
                id: 8,
                question: "What does 'warranty' mean in the context of ITIL 4 services?",
                options: [
                    "A legal guarantee for service performance",
                    "Assurance that the service will meet agreed requirements",
                    "The cost of the service",
                    "The time it takes to deliver the service"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "In ITIL 4, what is meant by 'value co-creation'?",
                options: [
                    "The service provider creates all the value",
                    "Value is created through collaboration between service provider and service consumer",
                    "Only the service consumer creates value",
                    "Value cannot be created, only transferred"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "Which modern frameworks does ITIL 4 integrate with?",
                options: [
                    "Only ITIL v3",
                    "Agile, DevOps, and Lean",
                    "Only waterfall methodologies",
                    "Only cloud computing frameworks"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "What is the ITIL 4 certification scheme's foundation level called?",
                options: [
                    "ITIL 4 Foundation",
                    "ITIL v3 Foundation",
                    "ITIL 4 Practitioner",
                    "ITIL 4 Expert"
                ],
                correct: 0
            },
            {
                id: 12,
                question: "Who are the three key roles in a service relationship?",
                options: [
                    "Manager, user, customer",
                    "Service consumer, service provider, service user",
                    "IT department, business, vendor",
                    "Sponsor, stakeholder, user"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "What makes ITIL 4 different from traditional IT frameworks?",
                options: [
                    "It focuses only on technology",
                    "It emphasizes value creation and modern ways of working",
                    "It eliminates all processes",
                    "It is only for large organizations"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "In ITIL 4, what is the primary focus of service management?",
                options: [
                    "Managing IT infrastructure",
                    "Enabling value co-creation through services",
                    "Reducing IT costs",
                    "Implementing new technologies"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "What does 'utility' mean in the context of ITIL 4 services?",
                options: [
                    "The cost-effectiveness of the service",
                    "The functionality offered by the service",
                    "The availability of the service",
                    "The security of the service"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "Which statement about service consumers is correct?",
                options: [
                    "They only receive services passively",
                    "They actively participate in defining and receiving value from services",
                    "They have no role in service management",
                    "They are always external to the organization"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "What is the main purpose of service management according to ITIL 4?",
                options: [
                    "To manage IT resources efficiently",
                    "To enable value co-creation through services",
                    "To reduce operational costs",
                    "To implement new technologies"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "How does ITIL 4 view the relationship between service provider and service consumer?",
                options: [
                    "As a traditional vendor-customer relationship",
                    "As a collaborative partnership for value co-creation",
                    "As a purely transactional relationship",
                    "As an adversarial relationship"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "What is the significance of stakeholders in ITIL 4?",
                options: [
                    "They have no role in service management",
                    "They are only important during service design",
                    "They play a crucial role throughout the service lifecycle",
                    "They are only relevant for service strategy"
                ],
                correct: 2
            },
            {
                id: 20,
                question: "Which characteristic is essential for a service according to ITIL 4?",
                options: [
                    "It must be delivered using the latest technology",
                    "It must enable value co-creation for service consumers",
                    "It must be the cheapest option available",
                    "It must be delivered within 24 hours"
                ],
                correct: 1
            }
        ]
    },
    day2: {
        title: "Day 2: ITIL 4 Service Value System (SVS)",
        timeLimit: 20,
        passingScore: 14,
        questions: [
            {
                id: 1,
                question: "What are the main components of the ITIL 4 Service Value System?",
                options: [
                    "Processes, functions, and roles only",
                    "Guiding principles, governance, service value chain, practices, and continual improvement",
                    "Only service value chain and practices",
                    "Technology and people only"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "Which guiding principle suggests building on what already exists?",
                options: [
                    "Focus on value",
                    "Start where you are",
                    "Progress iteratively with feedback",
                    "Keep it simple and practical"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is the primary purpose of the 'Focus on value' guiding principle?",
                options: [
                    "To reduce costs at all times",
                    "To ensure every activity contributes to value creation",
                    "To increase revenue",
                    "To implement new technology"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Which guiding principle emphasizes working across organizational boundaries?",
                options: [
                    "Think and work holistically",
                    "Collaborate and promote visibility",
                    "Optimize and automate",
                    "Progress iteratively with feedback"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "What does the 'Progress iteratively with feedback' principle promote?",
                options: [
                    "Completing everything in one large project",
                    "Making small incremental improvements with regular feedback",
                    "Avoiding any changes to current processes",
                    "Implementing changes without testing"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Which element provides direction and oversight in the Service Value System?",
                options: [
                    "Service value chain",
                    "Practices",
                    "Governance",
                    "Continual improvement"
                ],
                correct: 2
            },
            {
                id: 7,
                question: "What is the role of governance in the SVS?",
                options: [
                    "To execute day-to-day operations",
                    "To provide direction, control, and oversight",
                    "To implement technical solutions",
                    "To manage customer relationships"
                ],
                correct: 1
            },
            {
                id: 8,
                question: "The 'Collaborate and promote visibility' principle emphasizes:",
                options: [
                    "Working in isolation",
                    "Sharing information and working together transparently",
                    "Keeping information confidential",
                    "Working only within department boundaries"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "What does 'Keep it simple and practical' principle advocate?",
                options: [
                    "Using complex solutions for all problems",
                    "Eliminating all processes",
                    "Using the minimum number of steps to achieve objectives",
                    "Avoiding any documentation"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "When should automation be considered according to ITIL 4?",
                options: [
                    "For every possible task",
                    "Only after optimization and when it adds value",
                    "Never, as it's too risky",
                    "Only for technical tasks"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "What is the purpose of continual improvement in the SVS?",
                options: [
                    "To make changes for the sake of change",
                    "To align practices and services with changing business needs",
                    "To eliminate all existing practices",
                    "To reduce the workforce"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Which question is associated with the 'What is the vision?' step in continual improvement?",
                options: [
                    "How do we keep the momentum going?",
                    "What is the desired future state?",
                    "How do we get there?",
                    "Where are we now?"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "The Service Value System enables:",
                options: [
                    "Only service delivery",
                    "Value co-creation through the integration of all ITIL 4 components",
                    "Cost reduction only",
                    "Technology implementation only"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "What inputs does the Service Value System typically receive?",
                options: [
                    "Only internal demands",
                    "Opportunity, demand, and value expectations from stakeholders",
                    "Only technology requirements",
                    "Only financial inputs"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "Which guiding principle helps prevent over-engineering solutions?",
                options: [
                    "Focus on value",
                    "Keep it simple and practical",
                    "Optimize and automate",
                    "Think and work holistically"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "What is the relationship between the guiding principles?",
                options: [
                    "They are independent and should be applied separately",
                    "They are interconnected and should be applied together",
                    "Only one should be applied at a time",
                    "They contradict each other"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "The 'Where are we now?' step in continual improvement focuses on:",
                options: [
                    "Future planning",
                    "Current state assessment",
                    "Implementation planning",
                    "Vision definition"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "Which component of SVS represents organizational capabilities and resources?",
                options: [
                    "Governance",
                    "Guiding principles",
                    "Practices",
                    "Service value chain"
                ],
                correct: 2
            },
            {
                id: 19,
                question: "What does the 'Optimize and automate' principle suggest should be done first?",
                options: [
                    "Automate everything immediately",
                    "Optimize processes before automating",
                    "Buy new technology",
                    "Eliminate all manual tasks"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "How do the SVS components work together?",
                options: [
                    "They operate independently",
                    "They are integrated to enable value co-creation",
                    "Only some components interact",
                    "They replace each other"
                ],
                correct: 1
            }
        ]
    },
    day3: {
        title: "Day 3: Service Value Chain Activities",
        timeLimit: 20,
        passingScore: 14,
        questions: [
            {
                id: 1,
                question: "How many key activities are there in the ITIL 4 Service Value Chain?",
                options: ["4", "5", "6", "7"],
                correct: 2
            },
            {
                id: 2,
                question: "Which activity focuses on understanding stakeholder needs and ensuring continual engagement?",
                options: ["Plan", "Improve", "Engage", "Design & Transition"],
                correct: 2
            },
            {
                id: 3,
                question: "What is the primary purpose of the Plan activity?",
                options: [
                    "To create detailed project schedules",
                    "To ensure shared understanding of vision, status, and improvement direction",
                    "To manage incidents",
                    "To engage with stakeholders"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Which activity is responsible for ensuring continual improvement of products, services, and practices?",
                options: ["Plan", "Improve", "Engage", "Deliver & Support"],
                correct: 1
            },
            {
                id: 5,
                question: "The Design & Transition activity primarily focuses on:",
                options: [
                    "Engaging with stakeholders",
                    "Ensuring services meet stakeholder expectations for quality, costs, and time to market",
                    "Planning future states",
                    "Obtaining resources"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "What does the Obtain/Build activity ensure?",
                options: [
                    "Stakeholder engagement",
                    "Service components are available when and where needed",
                    "Continual improvement",
                    "Service delivery"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "Which activity ensures services are delivered and supported according to agreed specifications?",
                options: ["Obtain/Build", "Deliver & Support", "Design & Transition", "Engage"],
                correct: 1
            },
            {
                id: 8,
                question: "Value streams are:",
                options: [
                    "Fixed sequences of activities",
                    "Series of steps an organization undertakes to create and deliver products and services",
                    "Only used in manufacturing",
                    "Replacement for the service value chain"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "Can Service Value Chain activities be performed in different sequences?",
                options: [
                    "No, they must always follow the same order",
                    "Yes, the sequence depends on the circumstances and value stream",
                    "Only in emergency situations",
                    "Only for technical services"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "Which activity would typically be involved in understanding user requirements for a new service?",
                options: ["Plan", "Improve", "Engage", "Obtain/Build"],
                correct: 2
            },
            {
                id: 11,
                question: "The Plan activity includes:",
                options: [
                    "Only strategic planning",
                    "Portfolio decisions, architecture, and policies",
                    "Only tactical planning",
                    "Only operational planning"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Which activities are most likely to be involved when responding to a service request?",
                options: [
                    "Only Deliver & Support",
                    "Engage, Obtain/Build, and Deliver & Support",
                    "Only Plan and Improve",
                    "Only Design & Transition"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "The Improve activity ensures:",
                options: [
                    "Only technology improvements",
                    "Continual improvement across all four dimensions of service management",
                    "Only process improvements",
                    "Only cost improvements"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "What type of input might trigger the Design & Transition activity?",
                options: [
                    "Only new service requirements",
                    "Requirements for new/changed services and products",
                    "Only incident reports",
                    "Only improvement opportunities"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "The Service Value Chain represents:",
                options: [
                    "A rigid process model",
                    "A flexible operating model",
                    "Only technical operations",
                    "Only business operations"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "Which activity focuses on good relationships and awareness of user needs?",
                options: ["Plan", "Improve", "Engage", "Design & Transition"],
                correct: 2
            },
            {
                id: 17,
                question: "The Obtain/Build activity is concerned with:",
                options: [
                    "Only purchasing activities",
                    "Ensuring service components are available through building or buying",
                    "Only building internal capabilities",
                    "Only vendor management"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "How do the Service Value Chain activities create value?",
                options: [
                    "Each activity creates value independently",
                    "Value is created through the interaction and combination of activities",
                    "Only the Deliver & Support activity creates value",
                    "Value cannot be created, only transferred"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "Which statement about the Service Value Chain is correct?",
                options: [
                    "It replaces all ITIL processes",
                    "It provides flexibility in how organizations create value",
                    "It only applies to IT services",
                    "It eliminates the need for practices"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "The integration of Service Value Chain activities with practices enables:",
                options: [
                    "Reduced complexity only",
                    "Value co-creation through effective and efficient service management",
                    "Cost reduction only",
                    "Technology advancement only"
                ],
                correct: 1
            }
        ]
    },
    day4: {
        title: "Day 4: ITIL 4 Practices - General Management",
        timeLimit: 20,
        passingScore: 14,
        questions: [
            {
                id: 1,
                question: "How many categories of practices are there in ITIL 4?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                id: 2,
                question: "Which of the following is NOT one of the three categories of ITIL 4 practices?",
                options: [
                    "General Management Practices",
                    "Service Management Practices",
                    "Technical Management Practices",
                    "Strategic Management Practices"
                ],
                correct: 3
            },
            {
                id: 3,
                question: "What is the primary purpose of Continual Improvement practice?",
                options: [
                    "To make changes for the sake of change",
                    "To align the organization's practices and services with changing business needs",
                    "To reduce costs only",
                    "To implement new technology"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "The Continual Improvement Model includes which of these steps?",
                options: [
                    "What is the vision?, Where are we now?, Where do we want to be?, How do we get there?",
                    "Plan, Do, Check, Act",
                    "Input, Process, Output",
                    "Strategy, Design, Transition, Operation"
                ],
                correct: 0
            },
            {
                id: 5,
                question: "What are the three main aspects of Information Security according to ITIL 4?",
                options: [
                    "Cost, Quality, Time",
                    "Confidentiality, Integrity, Availability",
                    "People, Process, Technology",
                    "Plan, Implement, Monitor"
                ],
                correct: 1
            },
            {
                id: 6,
                question: "Which practice focuses on establishing and nurturing links between stakeholders?",
                options: [
                    "Continual Improvement",
                    "Information Security Management",
                    "Relationship Management",
                    "Supplier Management"
                ],
                correct: 2
            },
            {
                id: 7,
                question: "Confidentiality in information security means:",
                options: [
                    "Information is accurate and complete",
                    "Information is accessible when needed",
                    "Information is protected from unauthorized disclosure",
                    "Information can be modified by anyone"
                ],
                correct: 2
            },
            {
                id: 8,
                question: "Integrity in information security refers to:",
                options: [
                    "Information being kept secret",
                    "Information being accurate, complete, and protected from unauthorized modification",
                    "Information being available 24/7",
                    "Information being backed up regularly"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "Availability in information security ensures:",
                options: [
                    "Information is kept confidential",
                    "Information cannot be changed",
                    "Information is accessible when authorized users need it",
                    "Information is stored permanently"
                ],
                correct: 2
            },
            {
                id: 10,
                question: "The purpose of Relationship Management practice is to:",
                options: [
                    "Manage only customer relationships",
                    "Establish and nurture links between the organization and its stakeholders",
                    "Manage only supplier relationships",
                    "Eliminate all external relationships"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "Which type of relationships does Relationship Management practice handle?",
                options: [
                    "Only strategic relationships",
                    "Only tactical relationships",
                    "Both strategic and tactical relationships",
                    "Only operational relationships"
                ],
                correct: 2
            },
            {
                id: 12,
                question: "In the Continual Improvement Model, 'Where are we now?' focuses on:",
                options: [
                    "Future vision",
                    "Current state assessment",
                    "Implementation planning",
                    "Measuring success"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "What is a key characteristic of General Management Practices?",
                options: [
                    "They are specific to IT service management",
                    "They are adopted and adapted from general business management",
                    "They only apply to technical teams",
                    "They are unique to ITIL"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "Which statement about ITIL 4 practices is correct?",
                options: [
                    "Practices replace processes completely",
                    "Practices are organizational resources designed to perform work or accomplish objectives",
                    "Practices are only documentation",
                    "Practices eliminate the need for people"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "Information Security Management practice should be:",
                options: [
                    "Implemented only after a security incident",
                    "Integrated into all organizational activities",
                    "Applied only to technical systems",
                    "Managed only by the security team"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "The 'How do we get there?' step in Continual Improvement involves:",
                options: [
                    "Vision definition",
                    "Current state analysis",
                    "Improvement planning and execution",
                    "Success measurement"
                ],
                correct: 2
            },
            {
                id: 17,
                question: "Which approach should be taken for implementing continual improvement?",
                options: [
                    "Big bang approach with major changes",
                    "Iterative approach with small improvements",
                    "No changes until problems occur",
                    "Only annual improvement initiatives"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "Relationship Management practice includes:",
                options: [
                    "Only external stakeholder relationships",
                    "Strategic partnerships, service consumer relationships, and internal stakeholder relationships",
                    "Only internal team relationships",
                    "Only vendor relationships"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "What is the role of risk management in Information Security Management?",
                options: [
                    "It is not relevant to information security",
                    "It helps identify, assess, and treat information security risks",
                    "It only applies to technical risks",
                    "It eliminates all risks"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "How do General Management Practices relate to Service Management Practices?",
                options: [
                    "They are completely separate",
                    "They work together to support the organization's service management activities",
                    "General Management Practices replace Service Management Practices",
                    "They are in competition with each other"
                ],
                correct: 1
            }
        ]
    },
    day5: {
        title: "Day 5: ITIL 4 Practices - Service Management",
        timeLimit: 20,
        passingScore: 14,
        questions: [
            {
                id: 1,
                question: "What is the primary purpose of Incident Management?",
                options: [
                    "To prevent all incidents from occurring",
                    "To restore normal service operation as quickly as possible",
                    "To find the root cause of all problems",
                    "To manage service requests"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "What is the difference between an incident and a problem?",
                options: [
                    "There is no difference",
                    "An incident is an unplanned interruption; a problem is the cause of one or more incidents",
                    "A problem is an unplanned interruption; an incident is the cause",
                    "Incidents are more serious than problems"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "What is a major incident?",
                options: [
                    "Any incident that takes more than 4 hours to resolve",
                    "An incident with the highest business impact",
                    "Any incident affecting more than 100 users",
                    "An incident that requires management approval"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "What is the primary purpose of Problem Management?",
                options: [
                    "To restore service as quickly as possible",
                    "To reduce the likelihood and impact of incidents by identifying actual and potential causes",
                    "To manage service requests",
                    "To implement changes"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "What is a Known Error?",
                options: [
                    "Any incident that has been logged",
                    "A problem that has been analyzed and has not been resolved",
                    "A problem for which the root cause has been identified and a workaround exists",
                    "An incident that occurs frequently"
                ],
                correct: 2
            },
            {
                id: 6,
                question: "What are the three types of changes in ITIL 4?",
                options: [
                    "Small, Medium, Large",
                    "Standard, Normal, Emergency",
                    "Low, Medium, High",
                    "Planned, Unplanned, Emergency"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "What is a Standard Change?",
                options: [
                    "A change that requires CAB approval",
                    "A change that is pre-approved, low-risk, and follows a documented procedure",
                    "A change that must be implemented immediately",
                    "A change that affects critical services"
                ],
                correct: 1
            },
            {
                id: 8,
                question: "What is the purpose of the Change Advisory Board (CAB)?",
                options: [
                    "To implement all changes",
                    "To advise the change authority on change assessment and scheduling",
                    "To reject all change requests",
                    "To manage incidents"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "When would an Emergency Change be implemented?",
                options: [
                    "When there is a business opportunity",
                    "When normal change processes would take too long and there's urgent need",
                    "When requested by senior management",
                    "When resources are available"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "What is the primary purpose of Service Level Management?",
                options: [
                    "To handle service requests",
                    "To ensure agreed service levels are achieved and maintained",
                    "To resolve incidents",
                    "To implement changes"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "What is a Service Level Agreement (SLA)?",
                options: [
                    "A contract with suppliers",
                    "An agreement between service provider and service consumer about service levels",
                    "A technical specification document",
                    "A problem resolution procedure"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "What is the purpose of Service Request Management?",
                options: [
                    "To handle incidents",
                    "To support the agreed quality of service by handling pre-defined service requests",
                    "To manage problems",
                    "To control changes"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "What characterizes a service request?",
                options: [
                    "It's an unplanned interruption to service",
                    "It's a request for information, advice, or for a standard change",
                    "It's a cause of multiple incidents",
                    "It requires emergency implementation"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "Which type of Problem Management focuses on preventing problems?",
                options: [
                    "Reactive Problem Management",
                    "Proactive Problem Management",
                    "Emergency Problem Management",
                    "Standard Problem Management"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "What should be the focus when managing a major incident?",
                options: [
                    "Finding the root cause immediately",
                    "Restoring service as quickly as possible",
                    "Assigning blame",
                    "Documenting everything in detail"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "What is incident categorization used for?",
                options: [
                    "To assign costs to incidents",
                    "To ensure appropriate resource allocation and routing",
                    "To determine the incident owner",
                    "To calculate service credits"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "Which practice would handle a user request for a new laptop?",
                options: [
                    "Incident Management",
                    "Problem Management",
                    "Service Request Management",
                    "Change Control"
                ],
                correct: 2
            },
            {
                id: 18,
                question: "What is the relationship between Incident Management and Problem Management?",
                options: [
                    "They are completely independent",
                    "Problem Management focuses on underlying causes of incidents",
                    "They handle the same types of issues",
                    "Incident Management replaces Problem Management"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "What information should be captured during incident logging?",
                options: [
                    "Only the user's name",
                    "Relevant details about the incident including symptoms, impact, and urgency",
                    "Only the time of the incident",
                    "Only the affected service"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "How should service requests be fulfilled?",
                options: [
                    "As slowly as possible to ensure quality",
                    "As efficiently as possible, often through automation",
                    "Only during business hours",
                    "Only by senior staff"
                ],
                correct: 1
            }
        ]
    },
    day6: {
        title: "Day 6: ITIL 4 Practices - Technical Management & Integration",
        timeLimit: 20,
        passingScore: 14,
        questions: [
            {
                id: 1,
                question: "Which of the following is a Technical Management Practice?",
                options: [
                    "Incident Management",
                    "Deployment Management",
                    "Continual Improvement",
                    "Relationship Management"
                ],
                correct: 1
            },
            {
                id: 2,
                question: "What is the primary purpose of Deployment Management?",
                options: [
                    "To manage incidents",
                    "To move new or changed hardware, software, and services to live environments",
                    "To handle service requests",
                    "To manage relationships"
                ],
                correct: 1
            },
            {
                id: 3,
                question: "Infrastructure and Platform Management practice focuses on:",
                options: [
                    "Managing customer relationships",
                    "Overseeing infrastructure and platforms used to deliver services",
                    "Handling incidents only",
                    "Managing suppliers"
                ],
                correct: 1
            },
            {
                id: 4,
                question: "Software Development and Management practice is responsible for:",
                options: [
                    "Only purchasing software",
                    "Ensuring applications meet stakeholder needs in terms of functionality and quality",
                    "Only testing software",
                    "Only maintaining existing software"
                ],
                correct: 1
            },
            {
                id: 5,
                question: "How does ITIL 4 integrate with DevOps?",
                options: [
                    "It replaces DevOps completely",
                    "It conflicts with DevOps principles",
                    "It complements DevOps by providing governance and service management practices",
                    "It is only for traditional IT environments"
                ],
                correct: 2
            },
            {
                id: 6,
                question: "What is a value stream in the context of ITIL 4?",
                options: [
                    "A financial measurement",
                    "A series of steps an organization undertakes to create and deliver products and services",
                    "A type of incident",
                    "A change management process"
                ],
                correct: 1
            },
            {
                id: 7,
                question: "How do practices work together in ITIL 4?",
                options: [
                    "They operate completely independently",
                    "They are integrated and work together to deliver value",
                    "Only similar practices can work together",
                    "They replace each other"
                ],
                correct: 1
            },
            {
                id: 8,
                question: "What should be the first step when implementing ITIL 4?",
                options: [
                    "Implement all practices immediately",
                    "Assess current state and identify gaps",
                    "Replace all existing processes",
                    "Buy new technology"
                ],
                correct: 1
            },
            {
                id: 9,
                question: "Which approach is recommended for ITIL 4 implementation?",
                options: [
                    "Big bang implementation",
                    "Iterative approach with continuous improvement",
                    "Waiting until all resources are available",
                    "Implementing only when problems occur"
                ],
                correct: 1
            },
            {
                id: 10,
                question: "How does ITIL 4 support Agile ways of working?",
                options: [
                    "It prevents Agile implementation",
                    "It provides governance while supporting flexibility and speed",
                    "It only works with waterfall methods",
                    "It replaces Agile completely"
                ],
                correct: 1
            },
            {
                id: 11,
                question: "What is the role of change management in ITIL 4 implementation?",
                options: [
                    "It's not necessary",
                    "It helps ensure successful adoption of new ways of working",
                    "It only applies to technical changes",
                    "It should be avoided"
                ],
                correct: 1
            },
            {
                id: 12,
                question: "Practice interaction patterns help organizations:",
                options: [
                    "Eliminate all practices",
                    "Understand how practices work together effectively",
                    "Keep practices completely separate",
                    "Reduce the number of practices"
                ],
                correct: 1
            },
            {
                id: 13,
                question: "What should guide the selection of practices during ITIL 4 implementation?",
                options: [
                    "Industry standards only",
                    "Organizational context, needs, and resources",
                    "What competitors are doing",
                    "The number of available staff"
                ],
                correct: 1
            },
            {
                id: 14,
                question: "Workflow optimization in ITIL 4 focuses on:",
                options: [
                    "Eliminating all manual tasks",
                    "Improving efficiency and effectiveness of value streams",
                    "Reducing staff numbers",
                    "Increasing the number of processes"
                ],
                correct: 1
            },
            {
                id: 15,
                question: "What is the ITIL 4 Foundation certification designed to demonstrate?",
                options: [
                    "Advanced ITIL implementation skills",
                    "Understanding of ITIL 4 key concepts and terminology",
                    "Ability to implement all ITIL practices",
                    "Technical expertise in all areas"
                ],
                correct: 1
            },
            {
                id: 16,
                question: "How should organizations approach practice adoption?",
                options: [
                    "Adopt all practices simultaneously",
                    "Start with practices that address the most critical needs",
                    "Wait until all practices are perfect",
                    "Never change existing practices"
                ],
                correct: 1
            },
            {
                id: 17,
                question: "What is the relationship between Technical Management Practices and other practice categories?",
                options: [
                    "They are completely independent",
                    "They support and integrate with Service Management and General Management practices",
                    "They replace other practices",
                    "They only work with technology teams"
                ],
                correct: 1
            },
            {
                id: 18,
                question: "Which factor is most important for successful ITIL 4 implementation?",
                options: [
                    "Having the latest technology",
                    "Leadership support and organizational commitment",
                    "Hiring external consultants",
                    "Implementing everything at once"
                ],
                correct: 1
            },
            {
                id: 19,
                question: "How can organizations measure the success of ITIL 4 implementation?",
                options: [
                    "Only by counting the number of practices implemented",
                    "By measuring value creation and stakeholder satisfaction",
                    "Only by technical metrics",
                    "By the speed of implementation"
                ],
                correct: 1
            },
            {
                id: 20,
                question: "What should be the ongoing focus after initial ITIL 4 implementation?",
                options: [
                    "Stopping all changes",
                    "Continual improvement and adaptation",
                    "Implementing more frameworks",
                    "Reducing the scope of services"
                ],
                correct: 1
            }
        ]
    }
};

// Export the assessments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = itil4Assessments;
} 