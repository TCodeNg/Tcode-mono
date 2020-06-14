export function aggregate(stages: {[stage: string]: any}): any[] {
  return Object.keys(stages).map(key => stages[key]);
}
