import { RepoItem } from './repo-item';
export interface ReposResult {
  total_count: number;
  incomplete_results: boolean;
  items: RepoItem[];
}
