module.exports = {
  name: 'table',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
