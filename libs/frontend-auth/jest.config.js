module.exports = {
  name: 'frontend-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/frontend-auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
