export function trackPageView(path: string): void {
  // Implementation would depend on analytics provider
  console.log(`Page view: ${path}`);
}

export function trackEvent(category: string, action: string, label?: string): void {
  // Implementation would depend on analytics provider
  console.log(`Event: ${category} - ${action}${label ? ` - ${label}` : ''}`);
}