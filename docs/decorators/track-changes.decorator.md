# Track changes decorator

### How to use

Ensure that the component implements the OnChanges interface. Consider the following component:

```ts
  export class TestComponent implements OnChanges {
  @Input() user: User;
  @Input() profile: Profile;
  @Input() age: number;
  
  @TrackChanges<User>('user', 'updateUser')
  @TrackChanges<Profile>('profile', 'updateProfile', ChangesStrategy.First)
  @TrackChanges<number>('age', 'updateAge', ChangesStrategy.NON_FIRST)
  ngOnChanges(changes: SimpleChanges): void {}

  updateUser(user: User) {
    this.user = {
      ...user
    } as User;
  }

  updateProfile(profile: Profile) {
    this.profile = {
      ...profile
    } as Profile;
  }

  updateAge(age: number) {
    this.age = age;
  }
}
```
