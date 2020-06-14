module.exports = {
  name: 'buttons',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/buttons',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
