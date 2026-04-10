update public.experiences
set
  summary = 'Work at Embraer that demonstrates Heitor’s ability to build digital solutions around Salesforce, analytics, and AI to support commercial strategy, improve visibility, and strengthen executive decision-making.',
  technologies = to_jsonb(
    array[
      'Salesforce Administration',
      'Salesforce Development',
      'Power BI',
      'Artificial Intelligence',
      'Business Optimization',
      'Data Analysis',
      'Digital Tools'
    ]::text[]
  ),
  feature_rank = 1,
  updated_at = now()
where slug = 'sales-digital-tools-intern-embraer';

update public.experiences
set
  summary = 'An operations-focused experience at Embraer that demonstrates Heitor’s ability to turn complex data, reporting flows, and manual routines into structured systems, measurable savings, and faster business execution.',
  technologies = to_jsonb(
    array[
      'Data Analysis',
      'Business Intelligence',
      'Power BI',
      'Excel',
      'Process Automation',
      'Reporting',
      'Systems Optimization',
      'Stakeholder Management',
      'Data Visualization',
      'Corporate Analytics'
    ]::text[]
  ),
  feature_rank = 2,
  updated_at = now()
where slug = 'contracts-administration-intern-embraer';

update public.experiences
set
  title = 'Founder & Developer – Emma',
  summary = 'Emma reflects Heitor’s ability to lead from concept to execution — connecting AI, digital biomarkers, product strategy, and full-stack development to create a clinically meaningful health technology solution.',
  technologies = to_jsonb(
    array[
      'Software Engineering',
      'Digital Health',
      'Artificial Intelligence',
      'Clinical Data Science',
      'Product Development',
      'Flask',
      'Python',
      'Next.js',
      'TypeScript'
    ]::text[]
  ),
  feature_rank = 3,
  updated_at = now()
where slug = 'emma-founder-developer';

update public.projects
set
  is_featured = false,
  updated_at = now()
where slug = 'emma-digital-health-platform';

update public.projects
set
  title = 'Compiler & ARM Processor Projects',
  summary = 'A technical body of work that reflects Heitor’s depth in low-level computing, spanning compiler construction, instruction flow, machine code generation, processor design, and hardware implementation in Verilog.',
  context = 'This body of work connects compiler construction and processor design into a coherent low-level systems track that spans both software and hardware reasoning.',
  problem = 'Low-level systems engineering requires precision across multiple layers of abstraction, from source parsing and code generation to instruction flow, control logic, and execution behavior.',
  solution = 'The work spans lexical and syntactic analysis, semantic validation, intermediate representation, assembly translation, machine code generation, and ARM-oriented processor design in Verilog covering control, registers, memory interaction, and instruction execution.',
  technologies = to_jsonb(
    array[
      'Compiler Design',
      'Computer Architecture',
      'Systems Programming',
      'Low-Level Programming',
      'ARM Architecture',
      'Verilog',
      'Digital Logic Design',
      'Embedded Systems'
    ]::text[]
  ),
  impact = to_jsonb(
    array[
      'Built a full compiler capable of handling the complete C- test suite and generating working machine code for an ARM-like architecture.',
      'Implemented a functional 32-bit processor capable of executing a custom instruction set verified through simulation.'
    ]::text[]
  ),
  learnings = to_jsonb(
    array[
      'This body of work strengthened low-level reasoning across both software and hardware, reinforcing the ability to connect theoretical computing concepts with robust implementation.'
    ]::text[]
  ),
  is_featured = true,
  feature_rank = 4,
  updated_at = now()
where slug = 'c-minus-compiler';

update public.projects
set
  is_featured = false,
  updated_at = now()
where slug = 'arm-based-processor-verilog';
