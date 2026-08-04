export type CloudMetrics = {
  resources: string;
  latency: string;
  availability: string;
};

export async function getCloudMetrics(): Promise<CloudMetrics> {
  const response = await fetch('https://dummyjson.com/quotes/random');
  
  if (!response.ok) {
    throw new Error('Failed to fetch cloud metrics');
  }
  
  const data = await response.json();
  
  // Transform the dummy API data into realistic-looking metrics
  return {
    resources: `${200 + (data.id % 50)}+`,
    latency: `${10 + (data.id % 8)}ms`,
    availability: `99.99${data.id % 9}%`,
  };
}
