module.exports = {
  name: 'vendor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/vendor',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
