import { useQuery } from '@tanstack/react-query';
import { getCloudMetrics } from '../services/cloud';

export function useCloudMetrics() {
  return useQuery({
    queryKey: ['cloud-metrics'],
    queryFn: getCloudMetrics,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
