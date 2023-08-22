const steps = [
    {
        id: '0',
        message: 'Hey User!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Please select an option:',
        trigger: 'options',
    },
    {
        id: 'options',
        options: [
            { value: 1, label: 'About Institute', trigger: 'aboutInstitute' },
            { value: 2, label: 'Programs and Departments', trigger: 'programsAndDepartments' },
            { value: 3, label: 'Program Outcomes', trigger: 'programOutcomes' },
            { value: 'exit', label: 'Exit', end: true },
        ],
    },
    {
        id: 'aboutInstitute',
        message: 'The Government Polytechnic ,Nagpur , was founded on July, 1914 . At its commencement the school had 16 students on roll. The institution has given to Engineering College presently known as V.N.I.T. Nagpur, as well as Govt. Medical College (GMC), Nagpur. The total intake capacity of all programmes is 860 students (first shift 680 and second shift 180 ).',
        trigger: 'aboutInstituteDetails',
    },
    {
        id: 'aboutInstituteDetails',
        message: 'the premises of this institute is spread over 22 acres of land with good infra-structure facilities like well equipped laboratories, Computer center, conference hall ,Audio-Visual Room, Community Hall, Gymnasium, Good play ground etc. Accommodation for 180 boys, 54 girls and 20 trainees is also available in the campus. It has received awards and is striving for excellence.',
        trigger: 'options',
    },
    {
        id: 'programsAndDepartments',
        message: 'The institute offers various programs:',
        trigger: 'programsList',
    },
    {
        id: 'programsList',
        options: [
            { value: 'AI & Machine Learning', label: 'AI & Machine Learning', trigger: 'programDetails' },
            { value: 'Civil Engineering', label: 'Civil Engineering', trigger: 'programDetails' },
            { value: 'Mechanical Engineering', label: 'Mechanical Engineering', trigger: 'programDetails' },
            { value: 'Electrical Engineering', label: 'Electrical Engineering', trigger: 'programDetails' },
            { value: 'Electronics Engineering', label: 'Electronics Engineering', trigger: 'programDetails' },
            { value: 'Computer Engineering', label: 'Computer Engineering', trigger: 'programDetails' },
            { value: 'Information Technology', label: 'Information Technology', trigger: 'programDetails' },
            { value: 'Chemical Engineering', label: "Chemical Engineering", trigger: "programDetails" },
            { value: 'Mining Engineering', label: "Mining Engineering", trigger: "programDetails" },
            { value: 'Metallurgy Engineering', label: "Metallurgy Engineering", trigger: "programDetails" },
            { value: 'Textile Engineering', label: "Textile Engineering", trigger: "programDetails" },
            { value: 'back', label: 'Back to Options', trigger: 'options' },
        ],
    },
    {
        id: 'programDetails',
        message: 'Great choice! This program focuses on problem analysis, design solutions, and more.',
        trigger: 'options',
    },
    {
        id: 'programOutcomes',
        message: 'The program outcomes aim to equip students with skills such as problem analysis, design, project management, and more.1. Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.2. Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.3. Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs. 4. Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.5. Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.6. Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively       communicate about well-defined engineering activities.7. Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes.',
        trigger: 'options',
    },
];

export default steps;