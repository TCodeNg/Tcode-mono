import { SimpleChanges } from '@angular/core';

export enum ChangeStrategy {
  EACH,
  FIRST,
  NON_FIRST
}

export function TrackChanges<T>(key: string, methodName: string, strategy: ChangeStrategy): Function {
  return function(targetClass, functionName, descriptor) {
    const source = descriptor.value;

    descriptor.value = function(changes: SimpleChanges): Function {
      if (changes && changes[key] && changes[key].currentValue !== undefined) {
        const isFirstChange = changes[key].firstChange;

        if (
          strategy === ChangeStrategy.EACH ||
          (strategy === ChangeStrategy.FIRST && isFirstChange) ||
          (strategy == ChangeStrategy.NON_FIRST && !isFirstChange)
        ) {
          targetClass[methodName].call(this, changes[key].currentValue as T);
        }
      }
      return source.call(this, changes);
    }
    return descriptor;
  }
}
