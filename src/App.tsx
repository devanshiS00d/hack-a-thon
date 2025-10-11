import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { NewUserScreen } from './components/NewUserScreen';
import { TextInputScreen } from './components/TextInputScreen';
import { SingleSelectScreen } from './components/SingleSelectScreen';
import { MultiSelectScreen } from './components/MultiSelectScreen';
import { IkigaiResults } from './components/IkigaiResults';
import { ProfessionsScreen } from './components/ProfessionsScreen';
import { DashboardLayout } from './components/DashboardLayout';
import { HomePage } from './components/dashboard/HomePage';
import { ChatPage } from './components/dashboard/ChatPage';
import { RoadmapPage } from './components/dashboard/RoadmapPage';
import { ExplorePage } from './components/dashboard/ExplorePage';
import { CompaniesPage } from './components/dashboard/CompaniesPage';
import { SettingsPage } from './components/dashboard/SettingsPage';
import { MissionPage } from './components/dashboard/MissionPage';
import { IkigaiCalculator } from './utils/IkigaiCalculator';

type Screen = 
  | 'welcome'
  | 'login'
  | 'new-user'
  | 'name'
  | 'age'
  | 'ikigai-1-1'
  | 'ikigai-1-2'
  | 'ikigai-1-3'
  | 'ikigai-1-4'
  | 'ikigai-2-1'
  | 'ikigai-2-2'
  | 'ikigai-2-3'
  | 'ikigai-3-1'
  | 'ikigai-3-2'
  | 'ikigai-3-3'
  | 'ikigai-3-4'
  | 'ikigai-4-1'
  | 'ikigai-4-2'
  | 'ikigai-4-3'
  | 'results'
  | 'professions'
  | 'dashboard';

type DashboardPage = 'home' | 'chat' | 'roadmap' | 'explore' | 'companies' | 'settings' | 'mission';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentDashboardPage, setCurrentDashboardPage] = useState<DashboardPage>('home');
  const [userResponses, setUserResponses] = useState<Record<string, any>>({});
  const [ikigaiResults, setIkigaiResults] = useState<any>(null);

  const handleResponse = (key: string, value: any) => {
    setUserResponses(prev => ({ ...prev, [key]: value }));
  };

  const goToNextScreen = (nextScreen: Screen, key?: string, value?: any) => {
    if (key && value) {
      handleResponse(key, value);
    }
    setCurrentScreen(nextScreen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onComplete={() => setCurrentScreen('login')} />;

      case 'login':
        return (
          <LoginScreen
            onLogin={(email, password) => {
              handleResponse('email', email);
              handleResponse('password', password);
              setCurrentScreen('dashboard');
              setCurrentDashboardPage('home');
            }}
            onSignUp={() => setCurrentScreen('new-user')}
          />
        );

      case 'new-user':
        return <NewUserScreen onComplete={() => setCurrentScreen('name')} />;

      case 'name':
        return (
          <TextInputScreen
            question="What's your name?"
            placeholder="Your name"
            onSubmit={(answer) => goToNextScreen('age', 'name', answer)}
          />
        );

      case 'age':
        return (
          <TextInputScreen
            question="How old are you?"
            placeholder="Your age"
            onSubmit={(answer) => goToNextScreen('ikigai-1-1', 'age', answer)}
          />
        );

      // DIMENSION 1: What You LOVE
      case 'ikigai-1-1':
        return (
          <SingleSelectScreen
            question="Imagine it's Saturday morning with no obligations. What are you most excited to do?"
            options={[
              'Create something (art/code/content)',
              'Learn something new',
              "Help solve someone's problem",
              'Build/fix things',
              'Connect with people',
              'Explore ideas/research'
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-1-2', 'saturday_activity', answer)}
          />
        );

      case 'ikigai-1-2':
        return (
          <SingleSelectScreen
            question="Which of these scenarios energizes you most?"
            options={[
              "Teaching someone a skill you're good at",
              'Designing/building something from scratch',
              'Analyzing data to find insights',
              'Leading a team toward a goal',
              'Advocating for a cause you believe in',
              'Experimenting with new technologies/methods'
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-1-3', 'energizing_scenario', answer)}
          />
        );

      case 'ikigai-1-3':
        return (
          <MultiSelectScreen
            question="What topics do you find yourself reading about in your free time?"
            options={[
              'Tech & Innovation',
              'Health & Wellness',
              'Social Justice',
              'Business & Entrepreneurship',
              'Art & Design',
              'Education',
              'Environment',
              'Psychology',
              'Finance',
              'Sports & Fitness'
            ]}
            maxSelections={3}
            onSubmit={(answer) => goToNextScreen('ikigai-1-4', 'reading_topics', answer)}
          />
        );

      case 'ikigai-1-4':
        return (
          <TextInputScreen
            question="Complete this sentence: I feel most alive when I'm..."
            placeholder="Your answer"
            onSubmit={(answer) => goToNextScreen('ikigai-2-1', 'feel_alive', answer)}
          />
        );

      // DIMENSION 2: What You're GOOD AT
      case 'ikigai-2-1':
        return (
          <MultiSelectScreen
            question="What do people frequently ask for your help with?"
            options={[
              'Explaining complex things simply',
              'Creative/visual work',
              'Organizing projects/events',
              'Technical problem-solving',
              'Writing/communication',
              'Strategy & planning',
              'Building relationships',
              'Hands-on making/fixing'
            ]}
            maxSelections={3}
            onSubmit={(answer) => goToNextScreen('ikigai-2-2', 'help_with', answer)}
          />
        );

      case 'ikigai-2-2':
        return (
          <MultiSelectScreen
            question="Think of your proudest accomplishment. What skills did you use?"
            options={[
              'Leadership',
              'Creativity',
              'Technical Skills',
              'Communication',
              'Problem-Solving',
              'Collaboration',
              'Research',
              'Execution'
            ]}
            maxSelections={5}
            onSubmit={(answer) => goToNextScreen('ikigai-2-3', 'skills_used', answer)}
          />
        );

      case 'ikigai-2-3':
        return (
          <SingleSelectScreen
            question="Which statement resonates most?"
            options={[
              "I'm a specialist - I go deep on specific topics",
              "I'm a generalist - I connect ideas across domains",
              "I'm a builder - I turn ideas into reality",
              "I'm a strategist - I see the big picture and plan ahead"
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-3-1', 'work_style', answer)}
          />
        );

      // DIMENSION 3: What the World NEEDS
      case 'ikigai-3-1':
        return (
          <SingleSelectScreen
            question="If you could solve ONE problem in the world, what would it be?"
            options={[
              'Climate Change',
              'Healthcare Access',
              'Education Inequality',
              'Mental Health',
              'Economic Opportunity',
              'Technology Ethics',
              'Community Building',
              'Food Security'
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-3-2', 'world_problem', answer)}
          />
        );

      case 'ikigai-3-2':
        return (
          <SingleSelectScreen
            question="Which impact statement speaks to you most?"
            options={[
              'I want to help individuals improve their lives',
              'I want to create systemic change in how society works',
              "I want to build tools that make people's work easier",
              'I want to preserve/protect what we already have',
              "I want to create new things that didn't exist before"
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-3-3', 'impact_statement', answer)}
          />
        );

      case 'ikigai-3-3':
        return (
          <MultiSelectScreen
            question="Rank these values - select your top 3 in order of importance"
            options={[
              'Innovation',
              'Equity',
              'Sustainability',
              'Community',
              'Freedom',
              'Excellence',
              'Compassion',
              'Justice'
            ]}
            maxSelections={3}
            onSubmit={(answer) => goToNextScreen('ikigai-3-4', 'values', answer)}
          />
        );

      case 'ikigai-3-4':
        return (
          <MultiSelectScreen
            question="Who would benefit most from your ideal work?"
            options={[
              'Underserved communities',
              'Businesses/organizations',
              'Creative professionals',
              'Students/learners',
              'Healthcare patients',
              'Environment/planet',
              'My local community',
              'Global society'
            ]}
            maxSelections={3}
            onSubmit={(answer) => goToNextScreen('ikigai-4-1', 'beneficiaries', answer)}
          />
        );

      // DIMENSION 4: What You Can Be PAID FOR
      case 'ikigai-4-1':
        return (
          <SingleSelectScreen
            question="What's your current career stage?"
            options={[
              'Student (exploring options)',
              'Early career (0-3 years experience)',
              'Career changer (pivoting from another field)',
              'Mid-career (looking to realign)'
            ]}
            onSubmit={(answer) => goToNextScreen('ikigai-4-2', 'career_stage', answer)}
          />
        );

      case 'ikigai-4-2':
        return (
          <MultiSelectScreen
            question="Which industries interest you most?"
            options={[
              'Tech/Software',
              'Healthcare',
              'Education',
              'Finance',
              'Marketing/Media',
              'Non-Profit/Social Impact',
              'Design/Creative',
              'Consulting',
              'Government/Policy',
              'Manufacturing/Engineering',
              'Hospitality',
              'Retail/E-commerce'
            ]}
            maxSelections={3}
            onSubmit={(answer) => goToNextScreen('ikigai-4-3', 'industries', answer)}
          />
        );

      case 'ikigai-4-3':
        return (
          <MultiSelectScreen
            question="What does career success look like for you? Select your top 3"
            options={[
              'High income potential',
              'Work-life balance',
              'Making a meaningful impact',
              'Creative freedom',
              'Job security/stability',
              'Rapid growth opportunities',
              'Working with great people',
              'Location flexibility/remote work'
            ]}
            maxSelections={3}
            onSubmit={(answer) => {
              handleResponse('success_criteria', answer);
              // Calculate ikigai results with enhanced logic
              const calculatorAnswers: Record<number, string> = {
                1: IkigaiCalculator.mapUserResponse(1, userResponses.saturday_activity),
                2: IkigaiCalculator.mapUserResponse(2, userResponses.energizing_scenario),
                3: IkigaiCalculator.mapUserResponse(3, userResponses.reading_topics?.[0] || ''),
                6: IkigaiCalculator.mapUserResponse(6, userResponses.help_with?.[0] || ''),
                9: IkigaiCalculator.mapUserResponse(9, userResponses.world_problem),
                10: IkigaiCalculator.mapUserResponse(10, userResponses.impact_statement),
                13: IkigaiCalculator.mapUserResponse(13, userResponses.career_stage),
                14: IkigaiCalculator.mapUserResponse(14, userResponses.industries?.[0] || ''),
                15: IkigaiCalculator.mapUserResponse(15, answer[0] || '')
              };
              
              const { dimensions, tags } = IkigaiCalculator.calculateDimensionScores(calculatorAnswers);
              const ikigaiScore = IkigaiCalculator.calculateIkigaiScore(dimensions);
              const professions = IkigaiCalculator.matchProfessions(dimensions, tags);
              const ikigaiType = IkigaiCalculator.determineIkigaiType(dimensions, professions[0]);
              const archetype = {
                title: ikigaiType.type,
                path: ikigaiType.motto,
                description: ikigaiType.description
              };
              
              setIkigaiResults({ dimensions, ikigaiScore, archetype, professions, tags });
              setCurrentScreen('results');
            }}
          />
        );

      case 'results':
        return ikigaiResults ? (
          <IkigaiResults
            dimensions={ikigaiResults.dimensions}
            ikigaiScore={ikigaiResults.ikigaiScore}
            archetype={ikigaiResults.archetype}
            onContinue={() => setCurrentScreen('professions')}
          />
        ) : null;

      case 'professions':
        return ikigaiResults?.professions ? (
          <ProfessionsScreen
            professions={ikigaiResults.professions}
            onContinue={() => setCurrentScreen('dashboard')}
          />
        ) : null;

      case 'dashboard':
        return (
          <DashboardLayout
            currentPage={currentDashboardPage}
            onNavigate={(page) => setCurrentDashboardPage(page as DashboardPage)}
            userName={userResponses.name}
            onSignOut={() => {
              setCurrentScreen('welcome');
              setUserResponses({});
              setIkigaiResults(null);
              setCurrentDashboardPage('home');
            }}
          >
            {currentDashboardPage === 'home' && (
              <HomePage
                userName={userResponses.name || 'there'}
                ikigaiType={ikigaiResults?.archetype?.title || 'Emerging Talent'}
              />
            )}
            {currentDashboardPage === 'chat' && (
              <ChatPage userName={userResponses.name || 'there'} />
            )}
            {currentDashboardPage === 'roadmap' && <RoadmapPage />}
            {currentDashboardPage === 'explore' && (
              <ExplorePage ikigaiType={ikigaiResults?.archetype?.title || 'emerging talent'} />
            )}
            {currentDashboardPage === 'companies' && <CompaniesPage />}
            {currentDashboardPage === 'settings' && <SettingsPage />}
            {currentDashboardPage === 'mission' && <MissionPage />}
          </DashboardLayout>
        );

      default:
        return <WelcomeScreen onComplete={() => setCurrentScreen('login')} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div key={currentScreen}>
        {renderScreen()}
      </div>
    </AnimatePresence>
  );
}
