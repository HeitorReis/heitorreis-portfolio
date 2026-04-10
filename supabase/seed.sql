begin;

-- =========================================================
-- seed.sql
-- Portfolio seed for Heitor
-- Revised to match the current schema in this repository.
-- Notes:
--   - experiences.responsibilities = jsonb array
--   - experiences.technologies     = jsonb array
--   - experiences.impact           = jsonb array
--   - experiences.detail_content   = jsonb array
--   - projects.technologies        = jsonb array
--   - projects.impact              = jsonb array
--   - projects.learnings           = jsonb array
-- =========================================================

-- Optional cleanup
delete from public.posts;
delete from public.achievements;
delete from public.projects;
delete from public.experiences;
delete from public.homepage_settings;

-- =========================================================
-- MEDIA PLACEHOLDERS
-- =========================================================

insert into public.media (
  file_name,
  file_path,
  alt_text,
  media_type,
  bucket_id,
  is_public,
  related_entity_type,
  related_entity_id
)
values
  ('hero-heitor-profile.jpg', 'placeholders/hero-heitor-profile.jpg', null, 'image', 'portfolio-public', true, 'homepage', '1'),
  ('featured-emma-cover.jpg', 'placeholders/featured-emma-cover.jpg', null, 'image', 'portfolio-public', true, 'project', null),
  ('featured-embraer-sales-cover.jpg', 'placeholders/featured-embraer-sales-cover.jpg', null, 'image', 'portfolio-public', true, 'experience', null),
  ('featured-embraer-contracts-cover.jpg', 'placeholders/featured-embraer-contracts-cover.jpg', null, 'image', 'portfolio-public', true, 'experience', null),
  ('featured-embraer-cover.jpg', 'placeholders/featured-embraer-cover.jpg', null, 'image', 'portfolio-public', true, 'experience', null),
  ('featured-compiler-cover.jpg', 'placeholders/featured-compiler-cover.jpg', null, 'image', 'portfolio-public', true, 'project', null),
  ('featured-processor-cover.jpg', 'placeholders/featured-processor-cover.jpg', null, 'image', 'portfolio-public', true, 'project', null),
  ('featured-research-cover.jpg', 'placeholders/featured-research-cover.jpg', null, 'image', 'portfolio-public', true, 'project', null),
  ('personal-running.jpg', 'placeholders/personal-running.jpg', null, 'image', 'portfolio-public', true, 'personal', null),
  ('personal-music.jpg', 'placeholders/personal-music.jpg', null, 'image', 'portfolio-public', true, 'personal', null),
  ('personal-3d-printing.jpg', 'placeholders/personal-3d-printing.jpg', null, 'image', 'portfolio-public', true, 'personal', null)
on conflict (bucket_id, file_path) do nothing;

-- =========================================================
-- HOMEPAGE SETTINGS
-- =========================================================

insert into public.homepage_settings (
  id,
  headline,
  subheadline,
  hero_image_path,
  show_photo_in_hero,
  updated_at
)
values (
  1,
  'Heitor Reis',
  'With experience spanning Embraer, healthtech, research, and systems projects, Heitor brings a multidisciplinary engineering profile shaped by technical depth and practical execution.',
  'hero-heitor-profile.jpg',
  true,
  now()
)
on conflict (id) do update
set
  headline = excluded.headline,
  subheadline = excluded.subheadline,
  hero_image_path = excluded.hero_image_path,
  show_photo_in_hero = excluded.show_photo_in_hero,
  updated_at = excluded.updated_at;

-- =========================================================
-- EXPERIENCES
-- =========================================================

insert into public.experiences (
  slug,
  title,
  organization,
  category,
  location,
  summary,
  responsibilities,
  technologies,
  impact,
  timeframe_label,
  start_date,
  end_date,
  is_featured,
  feature_rank,
  detail_content,
  image_path,
  is_published,
  published_at,
  created_at,
  updated_at
)
values
(
  'sales-digital-tools-intern-embraer',
  'Sales Digital Tools Intern',
  'Embraer',
  'professional',
  'São José dos Campos - SP, Brazil',
  'Work at Embraer that demonstrates Heitor’s ability to build digital solutions around Salesforce, analytics, and AI to support commercial strategy, improve visibility, and strengthen executive decision-making.',
  to_jsonb(array[
    'Develops Salesforce-based solutions',
    'Builds Power BI dashboards',
    'Applies AI tools for business optimization',
    'Supports corporate performance management in strategic initiatives'
  ]::text[]),
  to_jsonb(array[
    'Salesforce Administration',
    'Salesforce Development',
    'Power BI',
    'Artificial Intelligence',
    'Business Optimization',
    'Data Analysis',
    'Digital Tools'
  ]::text[]),
  to_jsonb(array[
    'Contributes to corporate-level decision-making',
    'Supports sales enablement and process improvement',
    'Works with executive-level performance management'
  ]::text[]),
  'Jan 2026 - Present',
  '2026-01-01',
  null,
  true,
  1,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$At Embraer, Heitor works on digital tools that help improve business performance and support strategic sales processes. His work combines Salesforce, analytics, and AI to create practical solutions that increase visibility, efficiency, and competitiveness. This role reflects his ability to connect technical implementation with business impact in a complex corporate environment.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Develops Salesforce-based solutions',
        'Builds Power BI dashboards',
        'Applies AI tools for business optimization',
        'Supports corporate performance management in strategic initiatives'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this role.',
      'bullets', to_jsonb(array[
        'Salesforce Administration',
        'Salesforce Development',
        'Power BI',
        'Artificial Intelligence',
        'Business Optimization',
        'Data Analysis',
        'Digital Tools'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Contributes to corporate-level decision-making',
        'Supports sales enablement and process improvement',
        'Works with executive-level performance management'
      ]::text[])
    )
  ),
  'featured-embraer-sales-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'contracts-administration-intern-embraer',
  'Contracts Administration Intern',
  'Embraer',
  'professional',
  'São José dos Campos - SP, Brazil',
  'An operations-focused experience at Embraer that demonstrates Heitor’s ability to turn complex data, reporting flows, and manual routines into structured systems, measurable savings, and faster business execution.',
  to_jsonb(array[
    'Performed data analysis, controls, and calculations',
    'Built dashboards and optimized spreadsheets',
    'Automated workflows and recurring processes',
    'Supported internal and external stakeholders',
    'Improved technical reporting and operational visibility'
  ]::text[]),
  to_jsonb(array[
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
  ]::text[]),
  to_jsonb(array[
    'Delivered 9 process improvement projects in 3 months',
    'Saved more than USD 23k in total',
    'Automated 5+ recurring workflows',
    'Improved reporting speed by around 40%'
  ]::text[]),
  'Feb 2025 - Dec 2025',
  '2025-02-01',
  '2025-12-31',
  true,
  2,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$In the Contracts area at Embraer, Heitor transformed operational routines into more structured, faster, and more transparent processes. He built dashboards, optimized spreadsheets, automated repetitive workflows, and improved the quality of technical reporting. The result was measurable savings, reduced manual work, and stronger support for supervisory and executive decisions.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Performed data analysis, controls, and calculations',
        'Built dashboards and optimized spreadsheets',
        'Automated workflows and recurring processes',
        'Supported internal and external stakeholders',
        'Improved technical reporting and operational visibility'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this role.',
      'bullets', to_jsonb(array[
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
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Delivered 9 process improvement projects in 3 months',
        'Saved more than USD 23k in total',
        'Automated 5+ recurring workflows',
        'Improved reporting speed by around 40%'
      ]::text[])
    )
  ),
  'featured-embraer-contracts-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'emma-founder-developer',
  'Founder & Developer – Emma',
  'Emma',
  'innovation',
  'São Paulo - SP, Brazil',
  'Emma reflects Heitor’s ability to lead from concept to execution — connecting AI, digital biomarkers, product strategy, and full-stack development to create a clinically meaningful health technology solution.',
  to_jsonb(array[
    'Leads product and technical development',
    'Defines the scientific and strategic roadmap',
    'Connects clinical research with software design',
    'Develops a scalable platform using modern web technologies'
  ]::text[]),
  to_jsonb(array[
    'Software Engineering',
    'Digital Health',
    'Artificial Intelligence',
    'Clinical Data Science',
    'Product Development',
    'Flask',
    'Python',
    'Next.js',
    'TypeScript'
  ]::text[]),
  to_jsonb(array[
    'Built an AI-driven platform tested with simulated datasets of 100+ patients',
    'Helped position Emma as a recognized healthtech project in national programs'
  ]::text[]),
  '2025 - Current',
  '2025-01-01',
  null,
  true,
  3,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$Emma is one of Heitor's most meaningful projects because it sits at the intersection of engineering, healthcare, data, and real-world impact. As founder and developer, he has led the technical direction of the platform while also shaping its scientific and strategic foundation. Emma was designed to help clinicians and patients access more continuous, objective insights into neurological progression through digital biomarkers.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Leads product and technical development',
        'Defines the scientific and strategic roadmap',
        'Connects clinical research with software design',
        'Develops a scalable platform using modern web technologies'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this work.',
      'bullets', to_jsonb(array[
        'Software Engineering',
        'Digital Health',
        'Artificial Intelligence',
        'Clinical Data Science',
        'Product Development',
        'Flask',
        'Python',
        'Next.js',
        'TypeScript'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Built an AI-driven platform tested with simulated datasets of 100+ patients',
        'Helped position Emma as a recognized healthtech project in national programs'
      ]::text[])
    )
  ),
  'featured-emma-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'cope-disaster-response-project',
  'Participant - COPE Disaster-Response Project',
  'CEMADEN & FAPESP',
  'research',
  'São José dos Campos - SP, Brazil',
  'Contributed to data-driven tools for disaster prediction and community resilience using geospatial analysis and machine learning.',
  to_jsonb(array[
    'Analyzed geospatial and environmental datasets',
    'Implemented machine learning methods',
    'Collaborated with multidisciplinary teams focused on early-warning systems',
    'Supported public-safety-oriented decision workflows'
  ]::text[]),
  to_jsonb(array[
    'Data Science',
    'Geospatial Analysis',
    'Environmental Modeling',
    'Machine Learning',
    'Disaster Prediction'
  ]::text[]),
  to_jsonb(array[
    'Worked with datasets containing 5,000+ geospatial entries',
    'Supported model improvements for disaster prediction workflows'
  ]::text[]),
  'May 2024 - Dec 2024',
  '2024-05-01',
  '2024-12-31',
  false,
  10,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$This research experience strengthened Heitor's ability to apply data science to high-stakes public problems. At CEMADEN, he worked with geospatial and environmental data to support early-warning systems and more informed decision-making in disaster contexts. It also expanded his experience in interdisciplinary collaboration and socially meaningful technology.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Analyzed geospatial and environmental datasets',
        'Implemented machine learning methods',
        'Collaborated with multidisciplinary teams focused on early-warning systems',
        'Supported public-safety-oriented decision workflows'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this work.',
      'bullets', to_jsonb(array[
        'Data Science',
        'Geospatial Analysis',
        'Environmental Modeling',
        'Machine Learning',
        'Disaster Prediction'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Worked with datasets containing 5,000+ geospatial entries',
        'Supported model improvements for disaster prediction workflows'
      ]::text[])
    )
  ),
  'featured-research-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'english-teacher-interlinguando',
  'Volunteer English Teacher',
  'Interlinguando (UNIFESP)',
  'leadership',
  'São José dos Campos - SP, Brazil',
  'Taught English to students from different academic backgrounds, focusing on communication, grammar, and confidence-building through engaging lessons.',
  to_jsonb(array[
    'Prepared lessons and learning materials',
    'Adapted teaching to different proficiency levels',
    'Used digital tools and real-life contexts to improve learning',
    'Helped students build confidence in communication'
  ]::text[]),
  to_jsonb(array[
    'Education',
    'Communication',
    'Pedagogy',
    'Digital Learning',
    'Linguistics'
  ]::text[]),
  to_jsonb(array[
    'Taught 20+ students across multiple proficiency levels',
    'Helped increase student engagement over 2 years of teaching'
  ]::text[]),
  'Jun 2022 - Jul 2024',
  '2022-06-01',
  '2024-07-31',
  false,
  11,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$Teaching strengthened Heitor's ability to explain complex ideas clearly, adapt communication to different audiences, and work with empathy and consistency. It is a meaningful part of his profile because it shows that his technical side is matched by clarity, collaboration, and human communication.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Prepared lessons and learning materials',
        'Adapted teaching to different proficiency levels',
        'Used digital tools and real-life contexts to improve learning',
        'Helped students build confidence in communication'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this work.',
      'bullets', to_jsonb(array[
        'Education',
        'Communication',
        'Pedagogy',
        'Digital Learning',
        'Linguistics'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Taught 20+ students across multiple proficiency levels',
        'Helped increase student engagement over 2 years of teaching'
      ]::text[])
    )
  ),
  null,
  true,
  now(),
  now(),
  now()
),
(
  'hackathon-receita-federal-coorganizer',
  'Co-organizer - 1st Federal Revenue Hackathon (Brazil) | UNIFESP Hub',
  'UNIFESP & Receita Federal do Brasil',
  'leadership',
  'São José dos Campos - SP, Brazil',
  'Helped coordinate one of the largest innovation events held on campus, connecting logistics, partnerships, mentors, and operations across a major multi-hub initiative.',
  to_jsonb(array[
    'Supported logistics and volunteer coordination',
    'Managed partnerships and mentor engagement',
    'Helped execute a major multi-hub event under tight deadlines'
  ]::text[]),
  to_jsonb(array[
    'Event Management',
    'Innovation',
    'Public Administration',
    'Logistics',
    'Stakeholder Engagement'
  ]::text[]),
  to_jsonb(array[
    'Mobilized 1,500+ participants across 6 hubs',
    'Coordinated 300+ participants on-site at the UNIFESP hub'
  ]::text[]),
  'May 2025',
  '2025-05-01',
  '2025-05-31',
  false,
  12,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$This experience highlights Heitor's ability to lead large-scale initiatives beyond pure technical execution. Working across multiple stakeholders and a tight timeline, he helped make the event operationally viable and impactful, reinforcing his strength in coordination, communication, and innovation ecosystems.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Supported logistics and volunteer coordination',
        'Managed partnerships and mentor engagement',
        'Helped execute a major multi-hub event under tight deadlines'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this work.',
      'bullets', to_jsonb(array[
        'Event Management',
        'Innovation',
        'Public Administration',
        'Logistics',
        'Stakeholder Engagement'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Mobilized 1,500+ participants across 6 hubs',
        'Coordinated 300+ participants on-site at the UNIFESP hub'
      ]::text[])
    )
  ),
  null,
  true,
  now(),
  now(),
  now()
),
(
  'ai-implementation-summit-crm-asone-2026',
  'Summit CRM AsOne 2026 - AI Implementation',
  'Embraer',
  'professional',
  'São José dos Campos - SP, Brazil',
  'A high-visibility Embraer initiative that shows Heitor applying AI to faster understanding, clearer follow-through, and better strategic coordination.',
  to_jsonb(array[
    'Developed AI workflows for executive-level sessions',
    'Generated summaries and insights',
    'Supported leadership interactions',
    'Helped structure action items and follow-ups'
  ]::text[]),
  to_jsonb(array[
    'Artificial Intelligence',
    'Data Analysis',
    'Communication',
    'NLP',
    'Information Structuring'
  ]::text[]),
  to_jsonb(array[
    'Enabled faster knowledge consolidation',
    'Supported strategic discussions in real time',
    'Contributed in a high-visibility corporate environment'
  ]::text[]),
  'Mar 2026',
  '2026-03-01',
  '2026-03-31',
  true,
  4,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$During Summit CRM AsOne 2026, Heitor helped apply AI in a practical, high-visibility corporate setting. His work supported transcription, synthesis, and decision-oriented information flow during executive sessions, showing how AI can create immediate operational value in strategic environments.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Responsibilities',
      'body', 'Selected responsibilities and areas of contribution.',
      'bullets', to_jsonb(array[
        'Developed AI workflows for executive-level sessions',
        'Generated summaries and insights',
        'Supported leadership interactions',
        'Helped structure action items and follow-ups'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Technologies and Focus',
      'body', 'Tools and areas used in this work.',
      'bullets', to_jsonb(array[
        'Artificial Intelligence',
        'Data Analysis',
        'Communication',
        'NLP',
        'Information Structuring'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Impact',
      'body', 'Selected outcomes and areas of value.',
      'bullets', to_jsonb(array[
        'Enabled faster knowledge consolidation',
        'Supported strategic discussions in real time',
        'Contributed in a high-visibility corporate environment'
      ]::text[])
    )
  ),
  'featured-embraer-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'unifesp-bachelor-science-technology',
  'Bachelor''s Degree in Science and Technology',
  'UNIFESP',
  'education',
  'São José dos Campos - SP, Brazil',
  'Completed an interdisciplinary bachelor''s degree that built a strong foundation in mathematics, physics, computing, engineering principles, and research.',
  to_jsonb(array[
    'Worked on multidisciplinary projects',
    'Completed research-based assignments',
    'Integrated analytical thinking, innovation, and engineering fundamentals'
  ]::text[]),
  to_jsonb(array[
    'Mathematics',
    'Physics',
    'Computer Science',
    'Engineering Fundamentals',
    'Research Methodology'
  ]::text[]),
  to_jsonb(array[
    'Completed degree with strong training across four core disciplines',
    'Delivered multiple research-based projects'
  ]::text[]),
  '2022 - 2025',
  '2022-01-01',
  '2025-12-31',
  false,
  20,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$This degree shaped the breadth of Heitor's technical foundation. It gave him the interdisciplinary base that now supports his work across software, AI, systems, hardware, and research-driven problem-solving.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Focus',
      'body', 'Selected areas of study and work.',
      'bullets', to_jsonb(array[
        'Worked on multidisciplinary projects',
        'Completed research-based assignments',
        'Integrated analytical thinking, innovation, and engineering fundamentals'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Foundation',
      'body', 'Core areas covered in the degree.',
      'bullets', to_jsonb(array[
        'Mathematics',
        'Physics',
        'Computer Science',
        'Engineering Fundamentals',
        'Research Methodology'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Outcome',
      'body', 'Selected outcomes from the degree.',
      'bullets', to_jsonb(array[
        'Completed degree with strong training across four core disciplines',
        'Delivered multiple research-based projects'
      ]::text[])
    )
  ),
  null,
  true,
  now(),
  now(),
  now()
),
(
  'unifesp-computer-engineering',
  'Computer Engineering (ongoing)',
  'UNIFESP',
  'education',
  'São José dos Campos - SP, Brazil',
  'Currently pursuing a Computer Engineering degree with focus areas that include software development, embedded systems, AI, and systems integration.',
  to_jsonb(array[
    'Develops software prototypes',
    'Builds embedded systems and technical projects',
    'Connects hardware and computing with practical engineering applications'
  ]::text[]),
  to_jsonb(array[
    'Software Engineering',
    'Embedded Systems',
    'Artificial Intelligence',
    'Data Analysis',
    'Systems Integration'
  ]::text[]),
  to_jsonb(array[
    'Developed 5+ software prototypes and embedded systems as part of academic and technical training'
  ]::text[]),
  '2022 - 2027',
  '2022-01-01',
  '2027-12-31',
  false,
  21,
  jsonb_build_array(
    jsonb_build_object(
      'key', 'context',
      'heading', 'Overview',
      'body', $$Computer Engineering is where Heitor deepens the technical rigor behind the multidisciplinary foundation he already built. The program supports the kind of hybrid profile he is shaping: someone comfortable across software, hardware, AI, and systems thinking.$$
    ),
    jsonb_build_object(
      'key', 'what-i-did',
      'heading', 'Focus',
      'body', 'Selected areas of study and work.',
      'bullets', to_jsonb(array[
        'Develops software prototypes',
        'Builds embedded systems and technical projects',
        'Connects hardware and computing with practical engineering applications'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'technologies',
      'heading', 'Foundation',
      'body', 'Core areas covered in the degree.',
      'bullets', to_jsonb(array[
        'Software Engineering',
        'Embedded Systems',
        'Artificial Intelligence',
        'Data Analysis',
        'Systems Integration'
      ]::text[])
    ),
    jsonb_build_object(
      'key', 'impact',
      'heading', 'Outcome',
      'body', 'Selected outcomes from the degree so far.',
      'bullets', to_jsonb(array[
        'Developed 5+ software prototypes and embedded systems as part of academic and technical training'
      ]::text[])
    )
  ),
  null,
  true,
  now(),
  now(),
  now()
);

-- =========================================================
-- PROJECTS
-- =========================================================

insert into public.projects (
  slug,
  title,
  category,
  summary,
  context,
  problem,
  solution,
  technologies,
  impact,
  learnings,
  is_featured,
  feature_rank,
  related_experience_id,
  image_path,
  is_published,
  published_at,
  created_at,
  updated_at
)
values
(
  'emma-digital-health-platform',
  'Emma',
  'ai-driven-system',
  'A digital health platform for multiple sclerosis monitoring that reflects Heitor''s ability to connect AI, product thinking, and clinically relevant problem-solving.',
  'Emma was created to explore more continuous, objective, and scalable ways of monitoring neurological progression beyond isolated clinical observations.',
  'Monitoring chronic neurological conditions is often limited by sparse evaluations and subjective interpretation. There is room for digital tools that help generate more accessible, structured, and continuous data.',
  'Emma combines a Flask backend and a Next.js frontend to support the collection, organization, and interpretation of digital biomarkers. The platform integrates AI-oriented logic and a user-centered design approach to make complex health data more usable for both patients and clinical contexts.',
  to_jsonb(array[
    'Flask',
    'Python',
    'Next.js',
    'TypeScript',
    'Digital Biomarkers',
    'AI',
    'Product Design',
    'Clinical Data Science'
  ]::text[]),
  to_jsonb(array[
    'Developed an AI-driven platform tested with simulated datasets of 100+ patients and recognized in national innovation and healthtech programs.'
  ]::text[]),
  to_jsonb(array[
    'Emma reflects the importance of building technology that is technically strong but also clinically meaningful, understandable, and scalable.'
  ]::text[]),
  false,
  1,
  (select id from public.experiences where slug = 'emma-founder-developer'),
  'featured-emma-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'eye-tracking-system',
  'Eye-Tracking System',
  'research',
  'A computer vision project built for Emma that highlights Heitor''s interest in translating technical precision into meaningful health applications.',
  'The project was developed as part of Emma to capture visual biomarkers in a reliable and user-friendly way.',
  'Eye-tracking for health applications needs to be responsive, adaptable to different users and screens, and understandable during calibration and use.',
  'The system uses face detection to crop and center the user, calibration routines to adapt to different screen sizes, and pupil tracking to provide visual feedback and precision analysis.',
  to_jsonb(array[
    'Computer Vision',
    'Human-Computer Interaction',
    'Signal Processing',
    'Python',
    'AI Systems'
  ]::text[]),
  to_jsonb(array[
    'Implemented a real-time tracking pipeline running at 30+ FPS.'
  ]::text[]),
  to_jsonb(array[
    'This project reinforced the value of combining precision, performance, and usability in health-oriented interfaces.'
  ]::text[]),
  true,
  5,
  null,
  'featured-research-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'c-minus-compiler',
  'Compiler & ARM Processor Projects',
  'compiler',
  'A technical body of work that reflects Heitor’s depth in low-level computing, spanning compiler construction, instruction flow, machine code generation, processor design, and hardware implementation in Verilog.',
  'This body of work connects compiler construction and processor design into a coherent low-level systems track that spans both software and hardware reasoning.',
  'Low-level systems engineering requires precision across multiple layers of abstraction, from source parsing and code generation to instruction flow, control logic, and execution behavior.',
  'The work spans lexical and syntactic analysis, semantic validation, intermediate representation, assembly translation, machine code generation, and ARM-oriented processor design in Verilog covering control, registers, memory interaction, and instruction execution.',
  to_jsonb(array[
    'Compiler Design',
    'Computer Architecture',
    'Systems Programming',
    'Low-Level Programming',
    'ARM Architecture',
    'Verilog',
    'Digital Logic Design',
    'Embedded Systems'
  ]::text[]),
  to_jsonb(array[
    'Built a full compiler capable of handling the complete C- test suite and generating working machine code for an ARM-like architecture.',
    'Implemented a functional 32-bit processor capable of executing a custom instruction set verified through simulation.'
  ]::text[]),
  to_jsonb(array[
    'This body of work strengthened low-level reasoning across both software and hardware, reinforcing the ability to connect theoretical computing concepts with robust implementation.'
  ]::text[]),
  true,
  4,
  null,
  'featured-compiler-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'arm-based-processor-verilog',
  'ARM-based Processor from Scratch',
  'hardware',
  'A hardware project that shows Heitor''s ability to move from architectural theory to functional system design.',
  'This project emerged from the desire to understand computing systems from the hardware level upward.',
  'Designing a processor requires integrating logic, instruction flow, control behavior, and component coordination into a coherent architecture.',
  'The processor includes an ALU, control unit, register bank, memory interface, and simulated execution pipeline for a custom instruction set.',
  to_jsonb(array[
    'Digital Logic Design',
    'Computer Architecture',
    'HDL',
    'Verilog',
    'Embedded Systems'
  ]::text[]),
  to_jsonb(array[
    'Implemented a functional 32-bit processor capable of executing a custom instruction set verified through simulation.'
  ]::text[]),
  to_jsonb(array[
    'This project deepened the connection between low-level hardware design and higher-level systems reasoning.'
  ]::text[]),
  false,
  4,
  null,
  'featured-processor-cover.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'timelapsecreator',
  'TimeLapseCreator',
  'tooling',
  'A Python-based tool that automates smooth 3D-printing timelapse generation from image sequences, even with modest recording setups.',
  'The project was built from a personal interest in 3D printing, content creation, and practical automation.',
  'Creating clean 3D-printing timelapses usually requires manual editing and better equipment than many makers have access to.',
  'The tool automates image assembly, stabilization, frame timing, filtering, and output generation to simplify the workflow and improve consistency.',
  to_jsonb(array[
    'Python',
    'Automation',
    '3D Printing',
    'Computer Vision',
    'Process Optimization'
  ]::text[]),
  to_jsonb(array[
    'Reduced editing time by around 80% while making timelapse generation more accessible for low-budget setups.'
  ]::text[]),
  to_jsonb(array[
    'This project shows how engineering can also support creativity, accessibility, and everyday maker workflows.'
  ]::text[]),
  false,
  8,
  null,
  'personal-3d-printing.jpg',
  true,
  now(),
  now(),
  now()
),
(
  'municip-2020-ai-research',
  'AI Analysis of MUNIC 2020 Data',
  'research',
  'A research project applying machine learning and association-rule mining to analyze public management data across Brazilian municipalities.',
  'Presented at a national scientific congress, the project explored how AI could reveal patterns in large-scale public datasets.',
  'Large datasets often contain hidden relationships that are difficult to identify through manual inspection alone.',
  'The work involved preprocessing a dataset of 5,571 municipalities and 159 attributes, then applying FP-Growth and related validation methods to generate interpretable association rules.',
  to_jsonb(array[
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Public Policy',
    'Socio-environmental Analysis',
    'Scikit-learn',
    'mlxtend'
  ]::text[]),
  to_jsonb(array[
    'Processed a large national dataset and presented results at a scientific congress after validating useful association patterns.'
  ]::text[]),
  to_jsonb(array[
    'The project reinforced the value of interpretable AI and data-driven analysis for socially relevant decision contexts.'
  ]::text[]),
  false,
  9,
  null,
  'featured-research-cover.jpg',
  true,
  now(),
  now(),
  now()
);

-- =========================================================
-- ACHIEVEMENTS
-- =========================================================

insert into public.achievements (
  title,
  organization,
  summary,
  impact,
  timeframe_label,
  image_path,
  is_featured,
  sort_order,
  is_published,
  published_at,
  created_at,
  updated_at
)
values
(
  'Winner - Harvard Brazil Hackathon',
  'Emma',
  'Won the Harvard Brazil Hackathon with Emma, a digital health platform focused on multiple sclerosis monitoring through AI and digital biomarkers.',
  'Recognized among 60+ national teams for clinical relevance, innovation, and scalability.',
  'May 2025',
  'featured-emma-cover.jpg',
  true,
  1,
  true,
  now(),
  now(),
  now()
),
(
  'Selected Participant - Huawei Seeds for the Future 2025',
  'Huawei',
  'Selected as one of 50 young talents from Brazil for Huawei''s global technology program focused on AI, 5G, cloud, innovation, and sustainability.',
  'Completed all mandatory and elective modules with strong evaluation performance.',
  'Jun 2025',
  null,
  true,
  2,
  true,
  now(),
  now(),
  now()
),
(
  'Selected Participant - Huawei Seeds for the Future 2024',
  'Huawei',
  'Selected as one of 50 young innovators from Brazil for Huawei''s global talent program focused on technology and social impact.',
  'Completed all technical modules and assessments with distinction-level performance.',
  'Jun 2024',
  null,
  true,
  3,
  true,
  now(),
  now(),
  now()
),
(
  'Participant - In.Cube Acceleration Program',
  'InovaHC / HCFMUSP',
  'Participated in the In.Cube healthtech acceleration program with Emma, refining business model, clinical applicability, scalability, and regulatory direction.',
  'Strengthened Emma''s positioning inside a real healthcare innovation ecosystem.',
  'Aug 2025 - Apr 2026',
  'featured-emma-cover.jpg',
  true,
  4,
  true,
  now(),
  now(),
  now()
),
(
  'Honorable Mention - GOI Peace Foundation Essay Competition',
  'GOI Peace Foundation',
  'Received an Honorable Mention in an international essay competition centered on conflict, empathy, and personal growth.',
  'Recognized among 15,744 entries from 152 countries.',
  '2024',
  null,
  false,
  5,
  true,
  now(),
  now(),
  now()
),
(
  'Congress Presenter - AI Analysis of MUNIC 2020',
  'CEMADEN / FAPESP / ABRHidro',
  'Presented research on AI-based associative analysis of public management data at a national scientific congress.',
  'Showcased a machine learning workflow applied to a large-scale municipal dataset from Brazil.',
  'Oct 2024',
  'featured-research-cover.jpg',
  false,
  6,
  true,
  now(),
  now(),
  now()
);

-- =========================================================
-- POSTS
-- =========================================================

insert into public.posts (
  slug,
  title,
  excerpt,
  content,
  category,
  related_section,
  related_project_slug,
  published_at,
  is_published,
  cover_image_path,
  created_at,
  updated_at
)
values
(
  'building-emma-across-health-and-engineering',
  'Building Emma across health, data, and engineering',
  'A look at how Emma brings together AI, digital biomarkers, and product thinking to support more continuous neurological monitoring.',
  'Emma has become one of the clearest expressions of the kind of work I care about: building systems that connect technical depth with real-world meaning. Working on the platform has pushed me to think not only about software and AI, but also about usability, clinical relevance, and how to turn complex signals into something useful and understandable.',
  'project-update',
  'projects',
  'emma-digital-health-platform',
  now(),
  true,
  'featured-emma-cover.jpg',
  now(),
  now()
),
(
  'why-i-like-building-across-layers',
  'Why I like building across layers',
  'From dashboards and automation to compilers and processors, I enjoy understanding systems from multiple levels.',
  'One thing that connects many of my projects is the desire to understand how things work across layers. Sometimes that means improving business processes with data and AI. Other times, it means building a compiler or a processor from scratch. I like that contrast because it keeps engineering grounded, flexible, and honest.',
  'learning',
  'how-i-think',
  null,
  now(),
  true,
  null,
  now(),
  now()
),
(
  'applying-ai-in-executive-contexts',
  'Applying AI in executive contexts',
  'A recent experience at Embraer showed me how AI can support fast understanding, structured follow-up, and decision-oriented communication.',
  'During Summit CRM AsOne 2026, I worked on AI-supported flows for transcription, summarization, and action tracking in a high-visibility corporate environment. It was a valuable reminder that good AI work is not only about models. It is also about timing, clarity, reliability, and making information easier to use when it matters most.',
  'learning',
  'experience',
  null,
  now(),
  true,
  'featured-embraer-cover.jpg',
  now(),
  now()
);

commit;
