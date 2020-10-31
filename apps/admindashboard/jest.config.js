module.exports = {
  name: 'admindashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/admindashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
