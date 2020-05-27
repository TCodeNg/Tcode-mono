module.exports = {
  name: 'storefront',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/storefront',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
