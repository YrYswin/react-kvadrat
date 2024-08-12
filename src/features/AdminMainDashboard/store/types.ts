export interface MetricsSliceState {
  analytics: analyticsState | null;
  statistics: statisticsState[];
  isLoading: boolean;
  error: null | "Error";
}

export interface MetricState {
  analytics: analyticsState;
  statistics: statisticsState[];
}

export interface statisticsState {
  date: string;
  visits_count: number;
  page_views_count: number;
  new_visitors_count: number;
  returning_visitors_count: number;
}

export interface analyticsState {
  new_visitors_percentage: number;
  returning_visitors_percentage: number;
  total_visits: number;
  total_page_views: number;
}

export interface DateParams {
  monday: Date;
  sunday: Date;
}
