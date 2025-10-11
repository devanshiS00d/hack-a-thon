import { OpportunitiesPage } from './OpportunitiesPage';

interface ExplorePageProps {
  ikigaiType?: string;
}

export function ExplorePage({ ikigaiType = 'healthcare innovator' }: ExplorePageProps) {
  return <OpportunitiesPage ikigaiType={ikigaiType} />;
}
