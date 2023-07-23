import { computed, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export class ApiSignalState<T> {
  subscription!: Subscription;
  readonly _isWorking = signal(false);
  readonly _result = signal<T>(this.defaultValue);
  readonly _error = signal<object | null>(null);

  readonly isWorking = this._isWorking.asReadonly();
  readonly result = this._result.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isCompleted = computed(() => this.result() !== this.defaultValue);
  readonly hasError = computed(() => this._error() !== null);
  readonly errorMessage = computed(() => this.getErrorMessage(this._error()));

  constructor(private readonly defaultValue: T) {}

  execute(observable: Observable<T>) {
    this.setStarted();
    this.subscription = observable.subscribe({
      next: body => this.onSucceed(body),
      error: e => this.onFail(e),
    });
  }

  setStarted(): void {
    this._isWorking.set(true);
    this._result.set(this.defaultValue);
    this._error.set(null);
  }

  setSucceed(result: T): void {
    this._isWorking.set(false);
    this._result.set(result);
    this._error.set(null);
  }

  setFailed(error: object): void {
    this._isWorking.set(false);
    this._result.set(this.defaultValue);
    this._error.set(error);
  }

  protected getErrorMessage(error: object | null): string {
    if (!error) return '';
    if ('message' in error) return error.message as string;
    return JSON.stringify(error);
  }

  private onSucceed(result: T): void {
    this.subscription.unsubscribe();
    this.setSucceed(result);
  }

  private onFail(error: object): void {
    this.subscription.unsubscribe();
    this.setFailed(error);
  }
}
